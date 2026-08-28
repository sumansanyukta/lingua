# Lingua Onboarding Screen — Detailed UI/UX Layout Specification

This document provides an exact structural and visual specification to recreate the **Lingua Onboarding Screen** UI component in code (React Native, Flutter, HTML/CSS, or SwiftUI), referencing the **Lingua Design System**.

---

## 1. Screen Overview & Architecture

* **Screen Name:** Onboarding Step 1 (`02-onboarding-screen`)
* **Target Canvas:** Mobile Viewport (Standard 375px × 812px or A11/A12 device frame ratio)
* **Background Color:** `#FFFFFF` (Primary Canvas Background)
* **Layout Structure:** Vertical Flexbox Box Layout (Centered column layout with safe-area padding top & bottom).

---

## 2. Header & Branding Section

### Status Bar
* **Position:** Fixed Top (`0px`), Full Width
* **Content Left:** Time display (`9:41`), `14px`, Medium weight (`#0D132B`).
* **Content Right:** Mobile signal, Wi-Fi, and Battery level indicators.

### Brand Bar
* **Position:** Directly below status bar (`margin-top: 16px`)
* **Alignment:** Centered horizontally
* **Layout:** Inline Flex Row (Icon + Text)
* **Components:**
  * **Mascot Head Icon:** Small graphic badge showing the upper head/face of the Lingua Fox mascot.
  * **Brand Typography:** Text string `"lingua"` in lower-case, using **Poppins**, `24px` Font Size, Extra-Bold (`800`) weight, color `#0D132B`.

---

## 3. Typography & Messaging Stack

Aligned centered horizontally with `margin-top: 32px` and side padding `margin-x: 24px`.

### 1. Headline (H1 Stack)
* **Font Family:** Poppins
* **Font Size:** `32px`
* **Font Weight:** Bold (`700`)
* **Line Height:** `1.2` (`38.4px`)
* **Alignment:** Center-aligned
* **Text breakdown:**
  * Text Line 1: `"Your AI language"` — Color: Text / Primary (`#0D132B`)
  * Text Line 2: `"teacher."` — Word `"teacher"` in Lingua Purple (`#6C4EF5`), punctuation `"."` in Text / Primary (`#0D132B`).

### 2. Sub-headline (Body Large)
* **Font Family:** Poppins
* **Font Size:** `16px`
* **Font Weight:** Regular (`400`)
* **Line Height:** `1.6` (`25.6px`)
* **Color:** Text / Secondary (`#6B7280`)
* **Alignment:** Center-aligned
* **Margin Top:** `12px`
* **Content:** `"Real conversations, personalized lessons, anytime, anywhere."`

---

## 4. Graphic Illustration & Visual Stage

* **Container Area:** Centered hero illustration stage (`height: ~320px`).
* **Main Mascot Visual:**
  * Full-body cartoon illustration of the Lingua Fox mascot winking with its right eye and waving its left paw.
  * Wearing a bright purple backpack (`#6C4EF5`).
* **Speech Bubbles (Absolute Positioned Callouts):**
  1. **Top-Left Bubble (`Hello!`):**
     * Background Color: `#EBF3FF` (Soft Ice Blue)
     * Text Color: `#0D132B`
     * Text: `"Hello!"`
     * Border Radius: `16px` (Pill shape with left-bottom tail point)
  2. **Top-Right Bubble (`¡Hola!`):**
     * Background Color: `#F0ECFE` (Soft Lavender)
     * Text Color: `#5B3BF6` (Lingua Deep Purple)
     * Text: `"¡Hola!"`
     * Border Radius: `16px` (Pill shape with left-bottom tail point)
  3. **Mid-Right Bubble (`你好!`):**
     * Background Color: `#FFF2ED` (Soft Coral / Warm Cream)
     * Text Color: `#FF4D4F` (Accent Red)
     * Text: `"你好!"`
     * Border Radius: `16px` (Pill shape with left-bottom tail point)

---

## 5. Navigation & Action Components

### 1. Pagination Carousel Dots
* **Alignment:** Centered horizontally
* **Margin Top:** `24px`
* **Margin Bottom:** `32px`
* **Dot Count:** `4`
* **Item Properties:**
  * **Dot 1 (Active):** Width `10px`, Height `10px`, Radius `50%`, Background Color `#6C4EF5` (Lingua Purple).
  * **Dot 2 (Inactive):** Width `8px`, Height `8px`, Radius `50%`, Background Color `#E5E7EB` (Neutral Border / Disable).
  * **Dot 3 (Inactive):** Width `8px`, Height `8px`, Radius `50%`, Background Color `#E5E7EB`.
  * **Dot 4 (Inactive):** Width `8px`, Height `8px`, Radius `50%`, Background Color `#E5E7EB`.
  * **Spacing:** `8px` gap between dots.

### 2. Primary Call-to-Action (CTA Button)
* **Position:** Fixed / Pinned near bottom of viewport (`margin-x: 24px`, `margin-bottom: 24px`).
* **Height:** `56px`
* **Width:** `100%` (Calc `100% - 48px` accounting for side margins)
* **Border Radius:** `20px` (Soft pill geometry)
* **Background Fill:** Solid / Gradient Accent — `#6C4EF5` (Lingua Purple) transitioning to `#5B3BF6` (Lingua Deep Purple).
* **Flex Layout:** `justify-content: center`, `align-items: center`, `position: relative`
* **Label Text:**
  * **Typography:** Poppins, `18px`, SemiBold (`600`)
  * **Color:** `#FFFFFF`
  * **Text:** `"Get Started"`
* **Trailing Icon:**
  * **Type:** Right Chevron Arrow (`>`)
  * **Color:** `#FFFFFF`
  * **Position:** Absolute right-aligned inside the button container (`right: 24px`).

---

## 6. Implementation CSS Tokens Quick Reference

```css
:root {
  /* Colors */
  --color-brand-purple: #6C4EF5;
  --color-brand-deep-purple: #5B3BF6;
  --color-text-primary: #0D132B;
  --color-text-secondary: #6B7280;
  --color-border-inactive: #E5E7EB;
  --color-bg-canvas: #FFFFFF;

  /* Fonts */
  --font-family-primary: 'Poppins', sans-serif;
}
```