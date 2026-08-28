# Lingua Design System

Welcome to the **Lingua Design System** specification documentation. This document serves as a comprehensive reference guide for designers, developers, and product teams working on the Lingua platform to ensure visual consistency, accessibility, and brand coherence across UI components and user experiences.

---

## 1. Brand Identity

### Brand Name & Logo
* **Brand Name:** Lingua
* **Mascot / Visual Asset:** Friendly cartoon fox illustration, conveying an approachable, modern, and engaging learning personality.
* **Logo Typography:** Bold, rounded sans-serif custom logotype in deep navy/dark primary text color (`#0D132B`).

---

## 2. Color System

The color palette is divided into three distinct categories: **Primary**, **Semantic**, and **Neutrals**.

### Primary Palette
Primary colors establish the main visual identity of Lingua and are used for key UI components, branding highlights, and primary actions.

| Color Name | Hex Code | Visual Swatch | Usage / Description |
| :--- | :--- | :--- | :--- |
| **Lingua Purple** | `#6C4EF5` | `████` | Core brand color; primary interactive elements, major call-to-actions. |
| **Lingua Deep Purple** | `#5B3BF6` | `████` | Deep accent brand color; hover states, active states, key highlights. |
| **Lingua Blue** | `#4D8BFF` | `████` | Vibrant secondary brand color; supporting actions, badges, interactive elements. |
| **Lingua Green** | `#21C16B` | `████` | Fresh brand accent; success highlights, progress tracking, brand energy. |

### Semantic Palette
Semantic colors communicate status, feedback, and specific functional attributes across the interface.

| Role | Color Name | Hex Code | Visual Swatch | Intent / Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Success** | Success Green | `#21C16B` | `████` | Positive feedback, completed tasks, success states. |
| **Warning** | Warning Yellow | `#FFC800` | `████` | Alerts, non-blocking warnings, attention required. |
| **Streak** | Streak Orange | `#FF8A00` | `████` | Gamification streaks, active progress counters, motivational badges. |
| **Error** | Error Red | `#FF4D4F` | `████` | Destructive actions, inline errors, validation failure messages. |
| **Info** | Info Blue | `#4D8BFF` | `████` | Informational callouts, tooltips, neutral feedback banners. |

### Neutrals Palette
Neutrals build the foundation of structural elements, text typography, surfaces, borders, and page backgrounds.

| Name | Hex Code | Visual Swatch | Usage / Description |
| :--- | :--- | :--- | :--- |
| **Text / Primary** | `#0D132B` | `████` | High-contrast primary text, main titles, core iconography. |
| **Text / Secondary** | `#6B7280` | `████` | Subtitles, supporting body text, placeholders, secondary icons. |
| **Border** | `#E5E7EB` | `████` | Structural dividers, card borders, input borders, UI container outlines. |
| **Surface** | `#F6F7FB` | `████` | Secondary section backgrounds, card surface fills, active container highlights. |
| **Background** | `#FFFFFF` | `████` | Primary page background, default container canvas fill. |

---

## 3. Typography

### Font Family
* **Primary Font:** **Poppins**
* **Typeface Description:** Poppins is a modern, geometric sans-serif typeface that provides excellent readability, clean visual structure, and a friendly, accessible personality across web and mobile platforms.

### Type Scale & Hierarchy

| Hierarchy Level | Applied Element / Role | Font Size | Font Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | Page / Screen Title | `32px` | Bold (`700`) | `1.2` |
| **H2** | Section Title | `24px` | SemiBold (`600`) | `1.3` |
| **H3** | Card / Module Title | `20px` | SemiBold (`600`) | `1.3` |
| **H4** | Subheading | `16px` | Medium (`500`) | `1.4` |
| **Body Large** | Important content | `16px` | Regular (`400`) | `1.6` |
| **Body Medium** | Body text | `14px` | Regular (`400`) | `1.6` |
| **Body Small** | Supporting text | `13px` | Regular (`400`) | `1.6` |
| **Caption** | Labels, meta text | `11px` | Regular (`400`) | `1.4` |

---

## 4. Implementation Guidelines

* **Color Tokens:** Use CSS variables or Tailwind tokens referencing exact hex codes (e.g., `--color-primary: #6C4EF5;`).
* **Text Contrast:** Ensure `#0D132B` is used for body text on `#FFFFFF` or `#F6F7FB` backgrounds to maintain high legibility and WCAG AA compliance.
* **Component Styling:** Use rounded corners (consistent with the soft geometry of Poppins and the mascot artwork) for buttons, swatches, and card surfaces.