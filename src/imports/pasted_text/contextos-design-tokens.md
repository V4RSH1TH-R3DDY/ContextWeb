# ContextOS — Figma Design Prompt

## AI-Powered Proactive Android Operating Assistant

---

## DESIGN SYSTEM TOKENS (Apply Globally Across All Frames)

### Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `--bg-base` | `#050508` | Page background |
| `--bg-surface` | `#0D0D14` | Card/panel background |
| `--bg-elevated` | `#12121F` | Elevated surface |
| `--purple-core` | `#7C3AED` | Primary brand accent |
| `--purple-glow` | `#A855F7` | Glow / highlight states |
| `--purple-soft` | `#6D28D9` | Secondary accent |
| `--violet-mist` | `#4C1D95` | Deep violet fills |
| `--neon-cyan` | `#22D3EE` | Highlight / data indicators |
| `--neon-mint` | `#10B981` | Success / active states |
| `--text-primary` | `#F0EEFF` | Body copy |
| `--text-secondary` | `#9B8EC4` | Muted / captions |
| `--text-tertiary` | `#4B4568` | Disabled / placeholder |
| `--glass-border` | `rgba(124, 58, 237, 0.25)` | Glassmorphism card borders |
| `--glass-fill` | `rgba(13, 13, 20, 0.55)` | Glassmorphism card fill |

### Typography

| Token | Font | Weight | Size | Line Height |
| --- | --- | --- | --- | --- |
| `--type-display` | Syne | 800 | 72–96px | 1.0 |
| `--type-headline` | Syne | 700 | 40–56px | 1.1 |
| `--type-title` | Syne | 600 | 24–32px | 1.2 |
| `--type-label` | DM Mono | 500 | 11–13px | 1.4 |
| `--type-body` | Cabinet Grotesk | 400 | 16–18px | 1.65 |
| `--type-caption` | Cabinet Grotesk | 400 | 13–14px | 1.5 |

> Import fonts: Syne (Google Fonts) · Cabinet Grotesk (Fontshare) · DM Mono (Google Fonts)

### Spacing Scale

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128px`

### Border Radius

`8 · 12 · 16 · 24 · 32 · 48 · 9999px (pill)`

### Shadows & Glows

```text
Glow Purple:    0px 0px 40px rgba(124, 58, 237, 0.45)
Glow Cyan:      0px 0px 24px rgba(34, 211, 238, 0.35)
Card Shadow:    0px 24px 64px rgba(0, 0, 0, 0.6)
Inner Glow:     inset 0px 1px 0px rgba(255, 255, 255, 0.06)
```

### Grid System

- Desktop: 12-column · 1280px max-width · 24px gutter · 80px margin
- Tablet: 8-column · 768px · 16px gutter
- Mobile: 4-column · 375px · 16px gutter

---

## GLOBAL COMPONENTS (Build as Figma Components with Variants)

### Component: CTA Button

- **Primary**: Pill shape (9999px radius) · Fill: linear-gradient(135deg, #7C3AED → #A855F7) · Text: white/700/14px · Padding: 14px 28px · Drop shadow: Glow Purple
- **Secondary (Ghost)**: Same pill · Border: 1px #7C3AED · Fill: transparent · Text: #A855F7 · Same padding
- **Hover state variant**: Increase glow spread to 60px, scale 1.02

### Component: Glassmorphism Card

- Fill: `--glass-fill` · Backdrop blur: 20px · Border: 1px `--glass-border` · Radius: 24px · Inner Glow shadow · Card Shadow

### Component: Section Label Badge

- DM Mono / 11px / tracking +0.15em / uppercase · Fill: rgba(124,58,237,0.15) · Border: 1px rgba(124,58,237,0.4) · Radius: 9999px · Padding: 6px 14px · Text: #A855F7

### Component: Feature Icon Container

- 56×56px · Radius: 16px · Fill: radial-gradient(#7C3AED20 → transparent) · Border: 1px #7C3AED40 · Icon: 24px stroke · Color: #A855F7

### Component: Status Pill (Dashboard)

- Height: 28px · Radius: 9999px · Padding: 0 12px · Dot indicator (8px) + label · Variants: Active (mint), Pending (purple), Idle (muted)

---

## PAGE LAYOUT — ALL SECTIONS

---

### SECTION 1 — HERO

**Frame size**: 1440 × 900px (Desktop) · Full viewport height

**Layout:**

- Center-aligned content column (max 680px wide) placed at vertical 40% from top
- Background: radial gradient centered behind hero — `#7C3AED` at 0% → `#050508` at 70%
- Add a second radial gradient at bottom-left in `#4C1D95` at 30% opacity for depth

**Background visual layer (behind text):**

- Large abstract orb: 600×600px circle · Fill: radial gradient #7C3AED → #050508 · Blur: 120px · Opacity: 60% · Position: center, slightly above fold
- Three holographic rings: concentric ellipses around the orb · Stroke only (1px) · Colors: #7C3AED, #A855F7, #22D3EE at 20–35% opacity · Slight rotation per ring · Add rotation animation on rings
- Floating particles: ~40 small dots (2–4px) scattered across viewport · Soft purple/cyan fill at 20–50% opacity · Animate with slow drift (translateY) on staggered delay
- Subtle purple wave: thin sinusoidal SVG line at bottom of hero, animating horizontally, opacity 30%

**Floating Phone Mockups:**

- Two phone frames (390×844px mockup shape) · Left phone: tilted -12° · Right phone: tilted +8° · Both partially off-screen
- Phones slightly elevated with Card Shadow + Glow Purple
- Phone screens: show abstract AI dashboard UI with purple/cyan data elements
- Animate phones with slow floating (translateY -8px → 8px, 4s ease-in-out loop)

**Text content (center column):**

- Section Label Badge: `MEET CONTEXTOS`
- Gap: 24px
- Display headline (--type-display / 80px): `Your Phone Acts` (line 1) `Before You Ask.` (line 2, with gradient text: linear-gradient(90deg, #F0EEFF → #A855F7))
- Gap: 24px
- Body text (--type-body / 18px / --text-secondary / max 540px): `ContextOS understands your routines, predicts your needs, and takes intelligent actions in real time — so you never have to ask twice.`
- Gap: 40px
- CTA row (flex, gap 16px, center): [Watch Demo — Primary Button] [Explore Features — Ghost Button]

**Scroll indicator:**

- Centered at bottom 32px from frame edge · Animated chevron-down icon · DM Mono label "Scroll to explore" · 11px / --text-tertiary

---

### SECTION 2 — PROBLEM STATEMENT

**Frame size**: 1440 × auto

**Layout:** Full-width · Dark elevated surface `--bg-surface` · 80px vertical padding

**Heading block (center, max 640px):**

- Section Label Badge: `THE FRICTION`
- Gap: 16px
- Headline (--type-headline / 48px): `Your phone is reactive. Your life is not.`
- Gap: 16px
- Body (--type-body / --text-secondary): `Modern smartphones wait for instructions. But you're already three steps ahead — battling cognitive overload, context switching, and forgotten tasks.`

**Problem cards row:** 5 cards · Auto layout · Gap 16px · Horizontally scrollable on mobile

Each Glassmorphism Card (240×200px):

- Feature Icon Container (top-left, 48px variant)
- Title (--type-title / 16px): e.g. `Missed Meetings`
- Body (--type-caption / --text-secondary): Short pain point description

| Icon | Title | Description |
| --- | --- | --- |
| Calendar X | Missed Meetings | Meetings sneak up. DND is never on in time. |
| Zap Off | Battery Anxiety | Your phone dies when you need it most. |
| Files | Forgotten Files | The deck exists. Finding it doesn't. |
| Navigation | Manual Navigation | You launch Maps. Every. Single. Time. |
| MessageSquare X | Delayed Messages | "Running late" — sent too late. |

**Transition divider:** Full-width horizontal line with gradient fade: transparent → #7C3AED → transparent · Opacity 30%

**Solution statement (center, max 640px):**

- Headline (--type-headline / 40px / gradient text): `ContextOS changes the equation.`
- Body: `An AI layer that perceives your environment, learns your behavior, and acts with intelligence — before friction even occurs.`

---

### SECTION 3 — FEATURE SHOWCASE

**Frame size**: 1440 × auto · Background: `--bg-base` · 96px vertical padding

**Heading block:**

- Section Label Badge: `CAPABILITIES`
- Headline: `Five Systems. One Intelligence.`

**Feature card grid:** 2-column grid on desktop, 12px gap

Each card is a Glassmorphism Card with:

- Top row: Feature Icon Container (56px) + Feature label badge (DM Mono / small)
- Title (--type-title / 22px)
- Body (--type-body / 16px / --text-secondary)
- Bottom: "Activate" or "Learn more" ghost link with arrow icon
- Hover state: border color → #A855F7 at 60% · Add top glow: 0px -4px 32px rgba(124,58,237,0.4)
- Animated micro-icon on hover (icon pulses or rotates 1 turn)

**Cards:**

**Card 1 – Meeting Intelligence** (spans full width, 2 columns)

- Icon: Calendar check
- Title: `Meeting Intelligence`
- Body: `ContextOS reads your calendar 15 minutes ahead. Auto-enables Do Not Disturb, silences notifications, surfaces the relevant deck, and briefs you — all before you even open the app.`
- Visual accent: Inline mini calendar widget mockup on right side (decorative)

#### Card 2 – Smart Navigation

- Icon: Navigation compass
- Title: `Smart Navigation`
- Body: `Real-time traffic analysis calculates your departure time and auto-launches routing. You leave on time, every time.`

#### Card 3 – Battery Guardian

- Icon: Battery warning
- Title: `Battery Guardian`
- Body: `Detects critical charge levels and executes emergency protocols — low-power mode, contact alerts, and essential-app triage — automatically.`

#### Card 4 – Intelligent Messaging

- Icon: Message sparkle
- Title: `Intelligent Messaging`
- Body: `Drafts context-aware messages — "running late," "in a meeting," "on my way" — based on real-time signals. You approve; it sends.`

#### Card 5 – Memory Engine

- Icon: Brain/CPU
- Title: `Memory Engine`
- Body: `Continuously builds a behavioral model from your routines, preferred locations, app patterns, and timing. The longer it runs, the smarter it gets.`

---

### SECTION 4 — HOW IT WORKS

**Frame size**: 1440 × auto · Background: `--bg-surface` · 96px vertical padding

**Heading block:**

- Section Label Badge: `ARCHITECTURE`
- Headline: `Sense. Think. Learn. Act.`

**Flow diagram (horizontal, desktop):**

Four nodes connected by animated dashed lines with directional arrows:

```text
[ SENSE ] ──────── [ THINK ] ──────── [ LEARN ] ──────── [ ACT ]
```

Each node: Glassmorphism Card · 260×280px · Center-aligned

| Node | Icon | Title | Sub-items |
| --- | --- | --- | --- |
| SENSE | Wifi/Radar | `Sensors & APIs` | Calendar · GPS · Battery · Time · App usage |
| THINK | CPU/Chip | `Context Engine` | Pattern matching · Situation scoring · Priority queue |
| LEARN | Sparkles | `Memory Engine` | Routine modeling · Location tagging · Preference learning |
| ACT | Zap/Play | `Action Skills` | DND · Navigation · Messaging · File fetch · Alerts |

**Animated connection lines:**

- Dashed SVG lines between nodes
- Animated stroke-dashoffset to simulate data flowing left → right
- Line color: linear-gradient(90deg, #7C3AED → #22D3EE)
- Small glowing dot travels along path on loop

**Contextual annotation tags:**

Below each connection line, a DM Mono label (11px / --text-tertiary): e.g. `context signal` · `prediction model` · `action trigger`

---

### SECTION 5 — LIVE DASHBOARD DEMO

**Frame size**: 1440 × auto · Background: `--bg-base` · 96px vertical padding

**Two-column layout:**

- Left (50%): Text content
- Right (50%): Interactive phone mockup

**Left column:**

- Section Label Badge: `LIVE PREVIEW`
- Headline: `See it in motion.`
- Body: `An interactive simulation of the ContextOS interface. Toggle your context state and watch the AI adapt in real time.`
- Context switcher: 3 pill toggle buttons [🏠 Home] [🏢 Office] [🚗 Commute] — active state uses gradient fill

**Right column — Phone mockup (390×700px):**

Internal screen content (changes per context state):

**Header bar:**

- ContextOS wordmark (DM Mono / 12px) · Time · Battery icon

**Context card (top):**

- Label badge: `CURRENT CONTEXT`
- Large status: e.g. `📍 Office — 9:42 AM`
- Sub-label: `3 active sensors · 2 pending actions`

**Next event card (Glassmorphism):**

- Calendar icon · Event title · Time countdown pill · `AI preparing...` animated status

**AI Action Timeline (vertical list):**

3–4 action rows, each with:

- Status Pill (Active/Pending) · Action description · Timestamp
- e.g. `✅ DND enabled · 9:30 AM` / `⏳ Navigation queued · Launch in 8 min`

**Learned Routines chip row:**

Horizontal scroll of small pills: `Morning routine` · `Coffee at 8:45` · `Gym Fridays` · `Weekly sync`

**Skill Recommendations row (bottom):**

Two mini cards: suggested next actions with confidence % indicator

---

### SECTION 6 — TECHNOLOGY STACK

**Frame size**: 1440 × auto · Background: `--bg-surface` · 80px vertical padding

**Heading block:**

- Section Label Badge: `BUILT ON`
- Headline: `Engineering-grade foundations.`

**Tech badge cluster (freeform floating layout, not a grid):**

Each badge is a Glassmorphism Card variant (pill shape, wider):

- Left icon (16px colored logo placeholder) + tech name (DM Mono / 14px / --text-primary) + category label (11px / --text-tertiary)
- Slight rotation: alternate ±3° for organic feel
- Soft drop shadows
- Hover: scale 1.04 + Glow Purple

**Badges:**

| Name | Category | Accent Color |
| --- | --- | --- |
| Android | Platform | `#3DDC84` |
| Kotlin | Language | `#7F52FF` |
| Jetpack Compose | UI Framework | `#4285F4` |
| OpenClaw | AI Runtime | `#A855F7` |
| LLM Core | Intelligence Layer | `#F59E0B` |
| Memory Engine | Behavior Graph | `#22D3EE` |
| Cloud APIs | External Signals | `#EC4899` |

**Layout note:** Arrange badges in a loose organic cluster with subtle overlap. Add a faint radial glow behind the cluster center.

---

### SECTION 7 — PRIVACY & TRUST

**Frame size**: 1440 × auto · Background: `--bg-base` · 96px vertical padding

**Two-column layout:**

- Left (45%): Heading + body text
- Right (55%): 2×2 Glassmorphism card grid

**Left:**

- Section Label Badge: `TRUST FIRST`
- Headline: `Intelligent doesn't mean intrusive.`
- Body: `ContextOS is built on a privacy-first architecture. Every action is transparent, every decision is explainable, and every behavior model stays on your device.`
- Subtext (--text-secondary): `You are always in control. ContextOS acts with your permission, not instead of it.`

**Right — 2×2 card grid:**

| Icon | Title | Body |
| --- | --- | --- |
| Eye | Transparent Decisions | Every AI action shows its reasoning chain. |
| Shield | User Approval Layer | Configure which actions require confirmation. |
| HardDrive | Local Memory | Behavioral data never leaves your device. |
| Lock | Privacy-First Design | Zero telemetry. No ads. No data selling. |

Each card: Glassmorphism · 280×200px · Icon (mint/cyan color) · Title/body typography

---

### SECTION 8 — DOCUMENTATION TAB

**Frame size**: 1440 × auto · Background: `--bg-surface` · 96px vertical padding

**Tab navigation bar (sticky, top of section):**

- Full-width pill container: background `--bg-elevated` · Border: 1px `--glass-border` · Radius: 9999px
- 6 tab items (auto layout, evenly distributed):
  - `Overview` · `Quick Start` · `API Reference` · `Skills SDK` · `Privacy Model` · `Changelog`
- Active tab: filled pill (gradient #7C3AED → #A855F7) · White text · DM Mono / 13px
- Inactive tab: transparent · --text-secondary · hover: --text-primary

**Documentation panel (below tabs) — show "Quick Start" as default active view:**

**Left sidebar (260px):**

- Glassmorphism panel
- Section headings (DM Mono / 11px / uppercase / --text-tertiary): `GETTING STARTED` · `CORE CONCEPTS` · `SKILL LIBRARY` · `CONFIGURATION`
- Sub-items list (--type-body / 14px / --text-secondary, active item: --purple-glow with left border accent 2px)

**Main content area:**

- White label breadcrumb: `Docs / Quick Start / Installation`
- Large title (--type-title / 28px): `Getting Started with ContextOS`
- Section subheading (20px): `Prerequisites`
- Body prose (--type-body / 16px / --text-secondary / max 680px line length)
- **Code block component:** Background `#0A0A12` · Border: 1px #1E1E2E · Radius: 16px · Padding: 24px · DM Mono / 14px · Syntax highlighting (keywords: #A855F7, strings: #22D3EE, comments: #4B4568)
  - Example snippet:

    ```kotlin
    // Add to your build.gradle
    implementation("ai.contextos:sdk-android:1.0.0")

    // Initialize in Application class
    ContextOS.init(this) {
        enableMeetingIntelligence = true
        enableBatteryGuardian = true
        requireUserApproval = true
    }
    ```

- **Info callout box:** Background rgba(124,58,237,0.1) · Border-left: 3px #7C3AED · Radius: 8px · Icon + body text
- Section subheading: `Core Concepts`
- 3 inline concept cards (horizontal): Context Model · Skill Pipeline · Memory Graph — each Glassmorphism, compact

**Right mini-navigation (180px):**

- DM Mono / 11px / uppercase: `ON THIS PAGE`
- Anchor links list (--text-tertiary, active: --purple-glow with left indicator dot)

**Tab: API Reference (design as second visible state):**

- Endpoint table: Glassmorphism table component
  - Columns: Method (colored pill: GET/POST) · Endpoint (DM Mono) · Description · Auth Required
  - Row hover: subtle purple tint on row background
- Parameter detail card: below selected endpoint · shows params, types, example response

**Tab: Changelog:**

- Vertical timeline component · Left spine line in purple
- Each entry: version badge (DM Mono) + date pill + title + 3-bullet change list
- `v1.0.0 — Public Launch` · `v0.9.2 — Beta` · `v0.8.0 — Alpha`

---

### SECTION 9 — FOOTER

**Frame size**: 1440 × 320px · Background: `--bg-surface` · Top border: 1px `--glass-border`

**Layout:**

- Top row (4-column grid):
  - **Col 1 – Brand:** ContextOS wordmark (Syne / 20px) + tagline (DM Mono / 12px / --text-tertiary): `Intelligence That Understands You.` + 3 social icon links (GitHub, Twitter/X, LinkedIn)
  - **Col 2 – Product:** Nav heading (DM Mono / 11px / uppercase) + links: Features · Dashboard · Pricing · Changelog
  - **Col 3 – Developers:** Nav heading + links: Documentation · API Reference · Skills SDK · GitHub
  - **Col 4 – Company:** Nav heading + links: About · Blog · Privacy Policy · Terms

- Divider line: 1px gradient (transparent → #7C3AED40 → transparent)

- Bottom row (space-between):
  - `© 2025 ContextOS. All rights reserved.` — DM Mono / 12px / --text-tertiary
  - `Built for Android. Designed for humans.` — DM Mono / 12px / --text-tertiary

**Ambient footer glow:** Radial gradient centered at top-center of footer · #7C3AED at 15% opacity · 400px radius · Blur: 80px

---

## ANIMATION SPECIFICATIONS

| Element | Animation | Duration | Easing |
| --- | --- | --- | --- |
| Hero orb | scale pulse 1.0→1.05→1.0 + glow flicker | 3s loop | ease-in-out |
| Phone mockups | translateY -8px→8px | 4s loop | ease-in-out |
| Holographic rings | rotate 0→360deg | 20s / 28s / 36s loop | linear |
| Particles | translateY -20px→20px, random stagger | 5–8s loop | ease-in-out |
| How It Works dots | travel along SVG path | 2s loop | ease-in-out |
| Section entries | fade-up (opacity 0→1, translateY 32→0) | 0.6s | cubic-bezier(0.16,1,0.3,1) |
| Card hover glow | glow spread 40→64px | 0.25s | ease-out |
| CTA button hover | scale 1.0→1.02 + glow intensify | 0.2s | ease-out |
| Tab switch | content fade + slide (0.3s) | 0.3s | ease-in-out |
| Dashboard context switch | card content crossfade | 0.4s | ease-in-out |
| Tech badges float | translateY -4→4px, staggered | 3–5s loop | ease-in-out |

---

## FIGMA FILE STRUCTURE (Recommended Page/Frame Organization)

```text
📄 ContextOS Design

├── 🎨 00 — Design Tokens (Color/Typography/Effects styles)
├── 🧩 01 — Component Library
│   ├── Buttons (Primary, Ghost, Icon variants)
│   ├── Cards (Glass, Feature, Doc, Status)
│   ├── Badges (Label, Status, Tech, Version)
│   ├── Navigation (Tabs, Sidebar, Breadcrumb)
│   └── Code Block / Callout / Table
│
├── 📱 02 — Mobile Frames (375px)
│   └── All sections adapted for mobile
│
├── 🖥 03 — Desktop Frames (1440px)
│   ├── Frame 01 — Hero
│   ├── Frame 02 — Problem
│   ├── Frame 03 — Feature Showcase
│   ├── Frame 04 — How It Works
│   ├── Frame 05 — Dashboard Demo
│   ├── Frame 06 — Technology Stack
│   ├── Frame 07 — Privacy & Trust
│   ├── Frame 08 — Documentation
│   └── Frame 09 — Footer
│
└── 🔄 04 — Prototypes & Interactions
    ├── Scroll prototype (full page)
    ├── Dashboard context switcher
    └── Documentation tab interactions
```

---

## INTERACTION PROTOTYPING (Figma Prototype Connections)

1. **Hero CTA "Explore Features"** → scroll to Section 3 (Feature Showcase)
2. **Hero CTA "Watch Demo"** → scroll to Section 5 (Dashboard Demo)
3. **Context switcher pills** (Home/Office/Commute) → swap component content within Dashboard mockup using Variants
4. **Documentation tab bar** → swap documentation panel using Variants (6 states)
5. **Documentation sidebar links** → highlight active item state using component variants
6. **Feature cards hover** → use Smart Animate on hover variant (glow border + icon micro-animation)
7. **Nav links** → scroll to respective section frame
