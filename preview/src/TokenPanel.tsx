import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"

const SURFACES = [
  "background",
  "card",
  "popover",
  "primary",
  "secondary",
  "muted",
  "accent",
  "destructive",
  "sidebar",
  "sidebar-accent",
  "border",
  "input",
  "ring",
]

const CHARTS = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]

// [text, surface, minimum ratio]. 4.5 = WCAG AA body text, 3 = UI components.
const PAIRS: [string, string, number][] = [
  ["foreground", "background", 4.5],
  ["card-foreground", "card", 4.5],
  ["popover-foreground", "popover", 4.5],
  ["primary-foreground", "primary", 4.5],
  ["secondary-foreground", "secondary", 4.5],
  ["accent-foreground", "accent", 4.5],
  ["muted-foreground", "background", 4.5],
  ["muted-foreground", "card", 4.5],
  ["muted-foreground", "muted", 4.5],
  ["primary", "background", 4.5],
  ["destructive", "background", 4.5],
  ["destructive", "card", 4.5],
  ["sidebar-foreground", "sidebar", 4.5],
  ["sidebar-accent-foreground", "sidebar-accent", 4.5],
  ["input", "background", 3],
  ["ring", "background", 3],
]

function readVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim()
}

// Resolves any CSS color (hex, oklch, ...) to sRGB through a 1×1 canvas.
const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!
function toRgb(color: string): [number, number, number] {
  ctx.clearRect(0, 0, 1, 1)
  ctx.fillStyle = "#000"
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  return [r, g, b]
}

function luminance(color: string) {
  const [r, g, b] = toRgb(color).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

// Re-read the variables whenever the theme flips or Vite hot-swaps the CSS.
function useTokenRevision() {
  const { resolvedTheme } = useTheme()
  const [rev, setRev] = useState(0)
  useEffect(() => {
    const bump = () => requestAnimationFrame(() => setRev((r) => r + 1))
    bump()
    import.meta.hot?.on("vite:afterUpdate", bump)
    return () => import.meta.hot?.off("vite:afterUpdate", bump)
  }, [resolvedTheme])
  return rev
}

function Swatch({ name }: { name: string }) {
  const value = readVar(name)
  return (
    <div className="flex items-center gap-2">
      <div className="size-8 shrink-0 rounded-md border" style={{ background: `var(--${name})` }} />
      <div className="min-w-0 text-xs leading-tight">
        <div className="truncate font-medium">{name}</div>
        <div className="font-mono text-muted-foreground">{value}</div>
      </div>
    </div>
  )
}

export function TokenPanel() {
  useTokenRevision()

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SURFACES.map((n) => (
            <Swatch key={n} name={n} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {CHARTS.map((n) => (
            <div key={n} className="space-y-1">
              <div className="h-8 rounded-md" style={{ background: `var(--${n})` }} />
              <div className="text-center font-mono text-[10px] text-muted-foreground">{readVar(n)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-xs">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Sample</th>
              <th className="px-3 py-2 text-left font-medium">Text / Surface</th>
              <th className="px-3 py-2 text-right font-medium">Ratio</th>
            </tr>
          </thead>
          <tbody>
            {PAIRS.map(([fg, bg, min]) => {
              const ratio = contrast(readVar(fg), readVar(bg))
              const pass = ratio >= min
              return (
                <tr key={fg + bg} className="border-t">
                  <td className="px-3 py-1.5">
                    <span
                      className="inline-block rounded px-2 py-0.5 font-medium ring-1 ring-border"
                      style={{ color: `var(--${fg})`, background: `var(--${bg})` }}
                    >
                      Aa Text
                    </span>
                  </td>
                  <td className="px-3 py-1.5 font-mono">
                    {fg} <span className="text-muted-foreground">on</span> {bg}
                  </td>
                  <td className="px-3 py-1.5 text-right">
                    <Badge variant={pass ? "secondary" : "destructive"} className="font-mono">
                      {ratio.toFixed(2)} {pass ? "" : `< ${min}`}
                    </Badge>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
