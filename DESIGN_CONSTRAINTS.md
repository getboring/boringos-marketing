# BoringOS Design Constraints & Visual Language Specification

**Version:** 3.0
**Status:** Active
**Ethos:** Quiet. Engineered. Owner-Centric.

This document governs all visual work for BoringOS. It overrides personal taste, design trends, and requests for "delight" or "pop." It binds designers, engineers, contractors, and AI assistants.

---

## 1. Visual Philosophy

### Principle 1: "Ink Mode"
**Definition:** A visual standard prioritizing absolute legibility through high contrast.
*   **The Rule:** If it is worth printing, it is worth printing bold. We move from "Pencil" (hesitant, light gray) to "Ink" (deliberate, high contrast).
*   **Constraint:** Never use light gray (#A3A39F or lighter) for essential labels. If text is too small to be read in **ExtraBold (800)**, it is too small to exist.

### Principle 2: "Circuit Breaker"
**Definition:** A layout logic where the page is a continuous, physically connected circuit.
*   **The Rule:** Sections are not floating islands; they are physically connected by a vertical "Anchor Line" (1px gradient or solid).
*   **Constraint:** Section headers must be "Status Pills" (capsule-shaped badges) that physically break the Anchor Line to indicate a node in the system.

### Principle 3: "Quiet Fidelity"
**Definition:** An aesthetic of high resolution and low noise.
*   **The Rule:** Quality is conveyed through precision (alignment, typography), not decoration.
*   **Constraint:** Remove any element that does not answer the question: **"How does this help technology disappear so life can appear?"**

---

## 2. Logo System

### Primary Wordmark
*   **Composition:** The text `BoringOS.` in **Inter Bold (700)** with tight Swiss tracking (`-0.02em`).
*   **The Brand Dot:** The period (`.`) is mandatory. It is colored `boring-orange` (#FF6B00) and pulses slowly (`animate-pulse-slow`) to indicate a living system.

### The Symbol (Icon)
*   **Geometry:** A rounded square (`rounded-xl` equivalent).
*   **Composition:** Solid `boring-black` (#1A1A19) fill.
*   **Accent:** A `boring-orange` circle positioned in the bottom-right area.
*   **Proportions:** Dot diameter is 25% of the square width.

### "Never Do" List
*   **NEVER** lock up the Symbol next to the Wordmark in the navigation. Use one or the other.
*   **NEVER** apply gradients, shadows, or glows to the logo elements.
*   **NEVER** remove the period from the wordmark.

---

## 3. Typography

**Family:** `Inter` (Sans-serif) for UI / `Monospace` (System Default) for Data.

### Weights & Hierarchy
*   **Headlines (Display):** `text-5xl` to `text-8xl`. **Bold (700)**. End with a period.
*   **Body Copy:** `boring-gray-600` (Warm Gray). **Medium (500)**. `leading-relaxed`.
*   **"The Stamp" (Micro-Labels):** **UPPERCASE**. **ExtraBold (800)**. `font-mono`. `tracking-widest`. Color: `boring-gray-500` or darker.

### Forbidden Behaviors
*   Using Light (300) or Regular (400) weights for small text.
*   Italics (unless referencing a file path, variable, or citation).
*   Center-aligning text blocks longer than 3 lines.

---

## 4. Color

### Palette (Warm Technical)
*   **Boring Black (#1A1A19):** Primary Ink. Charcoal, not pure black.
*   **Boring White (#FDFBF9):** Primary Surface. Warm paper white.
*   **Boring Paper (#F7F5F3):** Secondary Surface.

### Functional Accents
*   **Orange (#FF6B00):** Attention, Warning, Active Process.
*   **Emerald (#10B981):** Nominal, Safe, "Home".
*   **Red (#EF4444):** Conflict, Distraction, "Removed".

### Forbidden
*   Gradients (except 1px borders).
*   Decorative color usage without semantic meaning.

---

## 5. Layout

### Grid System
*   **The Thread:** A vertical line must physically connect sections (see "Circuit Breaker").
*   **The Zig-Zag:** Alternating content density (Text/Visual → Visual/Text) to prevent reading fatigue.
*   **Symmetry:** Use centered, symmetrical grids for feature lists and specs.

### Density
*   **White Space:** Minimum `py-24` (padding-y) between sections.
*   **Max Width:** Text columns should never exceed `max-w-2xl`.

---

## 6. UI & Interaction

### Components
*   **Buttons:** `rounded-xl`. Solid colors. No gradients. High contrast labels.
*   **Cards:** `bg-white`, `border-boring-gray-200`. Lift on hover (`-translate-y-1`).
*   **Status Pills:** Capsule headers containing system status text.

### Motion Policy
*   **Philosophy:** Mechanical, not organic.
*   **Permitted:** `blink` (cursor), `pulse` (living system), `scan` (loading), `typing` (terminal).
*   **Forbidden:** Bouncing, elastic easing, swooping entrances.

---

## 7. Iconography

### Style
*   **Stroke:** `stroke-width="1.5"` or `2`.
*   **Container:** Icons should reside in `rounded-xl` containers.
*   **Metaphors:** Physical objects (Files, Folders, Chips).

### Prohibited
*   Abstract "Startup" illustrations (rockets, handshakes, clouds).
*   3D renders (unless CSS-generated flat-3D).
*   Generic stock icons floating without a container.

---

## 8. Imagery

### Subject Matter
*   **Interface as Hero:** Show the OS, the terminal, the window manager.
*   **Code as Texture:** Use hex codes, file paths, and logs as background textures.
*   **Hardware Abstraction:** Stylized representations of monitors/laptops using CSS borders.

### Forbidden
*   **NO People:** No photos of smiling users.
*   **NO Lifestyle:** No coffee shops, desks, or plants.
*   **NO Tech Glamour:** No shiny, rotating 3D devices.

---

## 9. AI Governance

### Interpretation Protocols
1.  **"Make it pop":** Interpret as increasing **contrast** and **typographic weight**. Do not add color or decoration.
2.  **"Modern Clean":** Default to **"Industrial High-Fidelity"** (high-contrast black/white), not low-contrast gray.
3.  **Conflict Resolution:** If a request violates the **Circuit Breaker** (e.g., "remove the vertical line"), refuse the request and explain that it breaks the visual system's continuity.

### Personality
*   The design system is an Engineer, not an Artist.
*   It values correctness over expression.
*   It values clarity over brevity.
