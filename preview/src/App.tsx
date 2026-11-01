import { Moon, Sun } from "lucide-react"
import { ThemeProvider, useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  AppShell,
  BadgesAlerts,
  Buttons,
  CalendarDemo,
  Charts,
  Controls,
  DataDisplay,
  Forms,
  Navigation,
  Overlays,
  SampleCards,
  Typography,
} from "./Sections"
import { TokenPanel } from "./TokenPanel"

function Section({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <section className={"rounded-xl border bg-card p-5 text-card-foreground " + (className ?? "")}>
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">{title}</h2>
      {children}
    </section>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const dark = resolvedTheme === "dark"
  return (
    <Button variant="outline" size="sm" onClick={() => setTheme(dark ? "light" : "dark")}>
      {dark ? <Sun /> : <Moon />}
      {dark ? "Light" : "Dark"}
    </Button>
  )
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <div>
              <div className="font-semibold">Vellum · App Theme Preview</div>
              <div className="text-xs text-muted-foreground">Edit src/vellum.css — changes hot-reload</div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-2">
          <Section title="Tokens & Contrast" className="lg:col-span-2">
            <TokenPanel />
          </Section>
          <Section title="App Shell" className="lg:col-span-2">
            <AppShell />
          </Section>
          <Section title="Buttons">
            <Buttons />
          </Section>
          <Section title="Badges & Alerts">
            <BadgesAlerts />
          </Section>
          <Section title="Form">
            <Forms />
          </Section>
          <Section title="Controls">
            <Controls />
          </Section>
          <Section title="Overlays">
            <Overlays />
          </Section>
          <Section title="Navigation">
            <Navigation />
          </Section>
          <Section title="Cards" className="lg:col-span-2">
            <SampleCards />
          </Section>
          <Section title="Data" >
            <DataDisplay />
          </Section>
          <Section title="Typography">
            <Typography />
            <div className="mt-6">
              <CalendarDemo />
            </div>
          </Section>
          <Section title="Charts" className="lg:col-span-2">
            <Charts />
          </Section>
        </main>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}
