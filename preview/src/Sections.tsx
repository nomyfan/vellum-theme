import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Area,
  AreaChart,
  XAxis,
} from "recharts"
import {
  AlertCircle,
  Bell,
  Bold,
  ChevronDown,
  CircleCheck,
  Copy,
  FileText,
  FolderOpen,
  Home,
  Inbox,
  Italic,
  Mail,
  Plus,
  Search,
  Settings,
  Trash2,
  Underline,
  User,
} from "lucide-react"
import { toast } from "sonner"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function Row({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      {label && <div className="text-xs font-medium text-muted-foreground">{label}</div>}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}

export function Buttons() {
  const variants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const
  return (
    <div className="space-y-4">
      {variants.map((v) => (
        <Row key={v} label={v}>
          <Button variant={v} size="sm">Small</Button>
          <Button variant={v}>Default</Button>
          <Button variant={v} size="lg">
            <Plus /> Large
          </Button>
          <Button variant={v} size="icon" aria-label="settings">
            <Settings />
          </Button>
          <Button variant={v} disabled>Disabled</Button>
        </Row>
      ))}
      <Row label="loading / group">
        <Button disabled>
          <Spinner /> Saving
        </Button>
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
          <Button variant="outline" size="icon" aria-label="more">
            <ChevronDown />
          </Button>
        </ButtonGroup>
      </Row>
    </div>
  )
}

export function BadgesAlerts() {
  return (
    <div className="space-y-4">
      <Row label="badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </Row>
      <Row label="kbd">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        <span className="text-sm text-muted-foreground">
          Press <Kbd>Esc</Kbd> to close
        </span>
      </Row>
      <Alert>
        <CircleCheck />
        <AlertTitle>Theme saved</AlertTitle>
        <AlertDescription>The new colors will apply on next launch.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Sync failed</AlertTitle>
        <AlertDescription>Can't reach the server. Check your connection and try again.</AlertDescription>
      </Alert>
    </div>
  )
}

export function Forms() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" placeholder="Vellum" />
        <FieldDescription>Shown in settings and the title bar.</FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" defaultValue="not-an-email" aria-invalid />
        <FieldError>Enter a valid email address</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor="search">Search</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput id="search" placeholder="Search files…" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>12 results</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel>Language</FieldLabel>
          <Select defaultValue="en">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh">Chinese (Simplified)</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ja">Japanese</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="disabled">Disabled</FieldLabel>
          <Input id="disabled" disabled placeholder="Read only" />
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea id="bio" placeholder="Tell us about yourself…" />
      </Field>
    </FieldGroup>
  )
}

export function Controls() {
  const [vol, setVol] = useState([40])
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="c1" defaultChecked />
          <Label htmlFor="c1">Auto save</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c2" />
          <Label htmlFor="c2">Show line numbers</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c3" disabled />
          <Label htmlFor="c3">Disabled</Label>
        </div>
      </div>
      <Separator />
      <RadioGroup defaultValue="comfortable">
        {[
          ["default", "Default"],
          ["comfortable", "Comfortable"],
          ["compact", "Compact"],
        ].map(([v, l]) => (
          <div key={v} className="flex items-center gap-2">
            <RadioGroupItem value={v} id={`r-${v}`} />
            <Label htmlFor={`r-${v}`}>{l}</Label>
          </div>
        ))}
      </RadioGroup>
      <Separator />
      <div className="flex items-center justify-between">
        <Label htmlFor="s1">Notifications</Label>
        <Switch id="s1" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="s2">Airplane mode</Label>
        <Switch id="s2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Volume</span>
          <span className="text-muted-foreground">{vol[0]}%</span>
        </div>
        <Slider value={vol} onValueChange={setVol} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <div className="text-sm">Upload progress</div>
        <Progress value={64} />
      </div>
      <Row label="toggle">
        <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
        <Toggle aria-label="bell" defaultPressed>
          <Bell />
        </Toggle>
      </Row>
      <Row label="otp">
        <InputOTP maxLength={6} defaultValue="1234">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Row>
    </div>
  )
}

export function Overlays() {
  const [showLines, setShowLines] = useState(true)
  return (
    <div className="space-y-4">
      <Row label="dialog / sheet">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rename file</DialogTitle>
              <DialogDescription>Links to this file will update automatically.</DialogDescription>
            </DialogHeader>
            <Input defaultValue="notes.md" />
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 /> Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this project?</AlertDialogTitle>
              <AlertDialogDescription>This can't be undone. All files in the project will be removed.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Preferences</SheetTitle>
              <SheetDescription>Adjust how the editor looks and behaves.</SheetDescription>
            </SheetHeader>
            <div className="px-4">
              <Controls />
            </div>
          </SheetContent>
        </Sheet>
      </Row>
      <Row label="popover / menu / tooltip">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="space-y-3">
            <div className="text-sm font-medium">Dimensions</div>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="w">Width</FieldLabel>
              <Input id="w" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="h">Height</FieldLabel>
              <Input id="h" defaultValue="auto" />
            </Field>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Menu <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuItem>
              <User /> Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings /> Settings <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem checked={showLines} onCheckedChange={setShowLines}>
              Show line numbers
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="copy">
              <Copy />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copy to clipboard</TooltipContent>
        </Tooltip>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@vellum</Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex gap-3">
            <Avatar>
              <AvatarFallback>VL</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="text-sm font-medium">Vellum</div>
              <p className="text-sm text-muted-foreground">A warm, paper-like theme for long reading sessions.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Row>
      <Row label="toast">
        <Button variant="outline" onClick={() => toast("Link copied")}>
          Toast
        </Button>
        <Button variant="outline" onClick={() => toast.success("Saved", { description: "All changes are synced" })}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error("Upload failed")}>
          Error
        </Button>
      </Row>
      <div className="text-xs font-medium text-muted-foreground">command (static, shows popover colors)</div>
      <Command className="rounded-lg border bg-popover shadow-md">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <FileText /> New file <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FolderOpen /> Open folder <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <Settings /> Preferences
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}

export function Navigation() {
  return (
    <div className="space-y-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Theme</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="disabled" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-2 text-sm text-muted-foreground">
          Default Tabs. The active tab uses the background color.
        </TabsContent>
        <TabsContent value="activity" className="pt-2 text-sm text-muted-foreground">
          12 updates in the last 7 days.
        </TabsContent>
        <TabsContent value="settings" className="pt-2 text-sm text-muted-foreground">
          Settings content.
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="code">
        <TabsList variant="line">
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="docs">Docs</TabsTrigger>
        </TabsList>
      </Tabs>
      <Pagination className="justify-start">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Accordion type="single" collapsible defaultValue="a">
        <AccordionItem value="a">
          <AccordionTrigger>What is this theme for?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Long reading and writing sessions. Low-saturation warm colors reduce eye strain.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>Which editors are supported?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">VS Code, Zed, Neovim, Ghostty and Warp.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Overdue", method: "Bank transfer", amount: "$350.00" },
  { id: "INV-004", status: "Paid", method: "Apple Pay", amount: "$450.00" },
]

export function DataDisplay() {
  return (
    <div className="space-y-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((i) => (
            <TableRow key={i.id} data-state={i.id === "INV-002" ? "selected" : undefined}>
              <TableCell className="font-medium">{i.id}</TableCell>
              <TableCell>
                <Badge
                  variant={i.status === "Paid" ? "secondary" : i.status === "Overdue" ? "destructive" : "outline"}
                >
                  {i.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{i.method}</TableCell>
              <TableCell className="text-right">{i.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {["AL", "BK", "CY"].map((n) => (
            <Avatar key={n} className="ring-2 ring-background">
              <AvatarFallback>{n}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>Create your first project to start organizing your notes.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">
            <Plus /> New project
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

const chartData = [
  { month: "Jan", a: 186, b: 80, c: 120, d: 60, e: 40 },
  { month: "Feb", a: 305, b: 200, c: 140, d: 90, e: 70 },
  { month: "Mar", a: 237, b: 120, c: 180, d: 110, e: 85 },
  { month: "Apr", a: 173, b: 190, c: 160, d: 130, e: 95 },
  { month: "May", a: 209, b: 130, c: 200, d: 150, e: 120 },
  { month: "Jun", a: 254, b: 140, c: 230, d: 170, e: 110 },
]

const chartConfig = {
  a: { label: "Reading", color: "var(--chart-1)" },
  b: { label: "Writing", color: "var(--chart-2)" },
  c: { label: "Editing", color: "var(--chart-3)" },
  d: { label: "Review", color: "var(--chart-4)" },
  e: { label: "Archive", color: "var(--chart-5)" },
} satisfies ChartConfig

export function Charts() {
  const keys = Object.keys(chartConfig) as (keyof typeof chartConfig)[]
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ChartContainer config={chartConfig} className="h-56 w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          {keys.map((k) => (
            <Bar key={k} dataKey={k} fill={`var(--color-${k})`} radius={3} isAnimationActive={false} />
          ))}
        </BarChart>
      </ChartContainer>
      <ChartContainer config={chartConfig} className="h-56 w-full">
        <AreaChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          {keys.slice(0, 3).map((k) => (
            <Area
              key={k}
              dataKey={k}
              type="monotone"
              fill={`var(--color-${k})`}
              fillOpacity={0.25}
              stroke={`var(--color-${k})`}
              stackId="s"
              isAnimationActive={false}
            />
          ))}
        </AreaChart>
      </ChartContainer>
    </div>
  )
}

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
}

export function SampleCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Enter your email and password.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input id="login-email" type="email" placeholder="me@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="login-pw">Password</FieldLabel>
              <Input id="login-pw" type="password" />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">Sign in</Button>
          <Button variant="outline" className="w-full">
            <Mail /> Email me a link
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>This month</CardTitle>
          <CardDescription>Compared with last month</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {[
            ["Reading time", "42.5 h", "+12%"],
            ["New notes", "128", "+4%"],
            ["Tasks done", "86", "-3%"],
            ["Focus days", "21", "+8%"],
          ].map(([k, v, d]) => (
            <div key={k} className="space-y-1 rounded-lg bg-muted p-3">
              <div className="text-xs text-muted-foreground">{k}</div>
              <div className="text-xl font-semibold">{v}</div>
              <div className={d.startsWith("-") ? "text-xs text-destructive" : "text-xs text-chart-3"}>{d}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export function AppShell() {
  const nav = [
    [Home, "Home"],
    [Inbox, "Inbox"],
    [FileText, "Docs"],
    [Settings, "Settings"],
  ] as const
  return (
    <div className="flex h-[34rem] overflow-hidden rounded-lg border">
      <aside className="flex w-52 shrink-0 flex-col gap-1 border-r border-sidebar-border bg-sidebar p-2 text-sidebar-foreground">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">
            V
          </div>
          <span className="text-sm font-semibold">Vellum</span>
        </div>
        {nav.map(([Icon, label], i) => (
          <button
            key={label}
            className={
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring " +
              (i === 2 ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground" : "")
            }
          >
            <Icon className="size-4" />
            {label}
            {i === 1 && (
              <Badge className="ml-auto" variant="secondary">
                3
              </Badge>
            )}
          </button>
        ))}
        <div className="mt-auto flex items-center gap-2 rounded-md px-2 py-1.5">
          <Avatar className="size-6">
            <AvatarFallback className="text-[10px]">C</AvatarFallback>
          </Avatar>
          <span className="text-sm">cxx</span>
        </div>
      </aside>
      <main className="flex-1 space-y-4 overflow-auto bg-background p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Docs</h3>
            <p className="text-sm text-muted-foreground">24 documents · updated 2 hours ago</p>
          </div>
          <Button size="sm">
            <Plus /> New
          </Button>
        </div>
        {["Design guidelines", "Theme variables", "Release process"].map((t, i) => (
          <div key={t} className="flex items-center gap-3 rounded-lg border bg-card p-3 text-card-foreground">
            <FileText className="size-4 text-muted-foreground" />
            <div className="flex-1">
              <div className="text-sm font-medium">{t}</div>
              <div className="text-xs text-muted-foreground">Edited {i + 1}d ago</div>
            </div>
            {i === 0 && <Badge variant="outline">Draft</Badge>}
          </div>
        ))}
        {/* Muted-based components placed directly on --background, not inside a card. */}
        <div className="space-y-4 border-t pt-4">
          <div className="text-xs font-medium text-muted-foreground">The components below sit directly on --background</div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mine">Mine</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-3">
            <Skeleton className="size-9 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3.5 w-2/3" />
              <Skeleton className="h-3.5 w-1/3" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Progress value={40} className="flex-1" />
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">--muted</code>
          </div>
        </div>
      </main>
    </div>
  )
}

export function Typography() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">A theme for long reading</h1>
      <h2 className="text-xl font-semibold">Second-level heading</h2>
      <p className="leading-7">
        Body text uses foreground. Here is a <a className="font-medium text-primary underline underline-offset-4">link</a>
         and some inline code <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">--primary</code>.
      </p>
      <p className="text-sm text-muted-foreground">Secondary text uses muted-foreground, common in form hints, timestamps and helper text.</p>
      <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground italic">
        A good theme is one you forget is there.
      </blockquote>
    </div>
  )
}
