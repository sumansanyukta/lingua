# Lingua Lesson / Unit Detail Screen — Detailed UI/UX Layout Specification

This document provides a complete layout and visual specification for the **Lesson / Unit Detail** UI screen based on the Lingua Design System.

---

## 1. Viewport & Navigation Bar

* **Canvas:** Mobile Viewport (`#FFFFFF` background)
* **Status Bar:** Top-aligned; time (`9:41`) on left, signal/Wi-Fi/battery icons on right.
* **Top Navigation:** Flex row (`justify-content: space-between`, `align-items: center`):
  * **Left Side:**
    * **Back Button:** Left chevron arrow (`<`) in dark primary text color (`#0D132B`).
    * **Unit Title Stack:**
      * **Main Title (H3):** `"At the Café"` — `20px`, SemiBold (`600`), `#0D132B`.
      * **Subtitle:** `"Unit 3 • 3 / 6 lessons"` — `13px`, Regular (`400`), `#6B7280`.
  * **Right Side:**
    * **Bookmark Icon:** Ribbon/bookmark badge icon outlined in orange/purple (`#FF8A00` / `#6C4EF5`).

---

## 2. Hero Header Illustration

* **Container Area:** Full-width hero banner stage with custom cartoon background scene.
* **Scene Content:**
  * **Mascot:** Lingua Fox sitting at a round outdoor café table drinking coffee/tea from a cup.
  * **Background Graphic:** European café storefront with red awning (`"CAFÉ"` sign above door), green trees, and mountain landscape under a light sky.

---

## 3. Segmented Control / Tab Switcher

* **Container:** Floating segmented control bar spanning the full width with horizontal margins (`16px`), light background fill (`#F6F7FB`), rounded corners (`16px`).
* **Tab 1: "Lessons" (Active State):**
  * **Background:** White raised surface (`#FFFFFF`) with shadow/elevation.
  * **Indicator:** Active bottom bar indicator line in Lingua Purple (`#6C4EF5`).
  * **Label:** `"Lessons"` — `14px` / `16px`, SemiBold (`600`), Lingua Purple (`#6C4EF5`).
* **Tab 2: "Practice" (Inactive State):**
  * **Background:** Transparent / surface fill.
  * **Label:** `"Practice"` — `14px` / `16px`, Medium (`500`), `#6B7280`.

---

## 4. Lesson List (Vertical Scroll Area)

Vertical list of lesson cards (`16px` border radius) representing the progress path.

### 1. Lesson 1 (Completed)
* **Container:** White background (`#FFFFFF`), light gray border (`#E5E7EB`).
* **Header Tag:** `"Lesson 1"` — `11px` / `13px`, Regular (`400`), `#6B7280`.
* **Title:** `"Greetings & Introductions"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Trailing Indicator:** Green circle with white checkmark (`✓`) in Success Green (`#21C16B`).

### 2. Lesson 2 (Completed)
* **Container:** White background (`#FFFFFF`), light gray border (`#E5E7EB`).
* **Header Tag:** `"Lesson 2"` — `11px` / `13px`, Regular (`400`), `#6B7280`.
* **Title:** `"Daily Life"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Trailing Indicator:** Green circle with white checkmark (`✓`) in Success Green (`#21C16B`).

### 3. Lesson 3 (In Progress / Active Item)
* **Container:** Highlighted card with active Lingua Purple border (`#6C4EF5`, `1.5px`), soft purple tint fill (`#F9F8FF`).
* **Header Tag:** `"Lesson 3"` — `11px` / `13px`, SemiBold (`600`), Lingua Purple (`#6C4EF5`).
* **Title:** `"At the Café"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Status Badge:** `"In progress"` label in Lingua Purple (`#6C4EF5`, `13px`, Medium).
* **Trailing Graphic:** Small 3D illustration of an outdoor café table with chairs and drinks.

### 4. Lesson 4 (Locked)
* **Container:** White background (`#FFFFFF`), faint border (`#E5E7EB`), muted opacity.
* **Header Tag:** `"Lesson 4"` — `11px` / `13px`, Regular (`400`), `#6B7280`.
* **Title:** `"Travel & Directions"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Progress Counter:** `"0 / 6 lessons"` — `13px`, Regular (`400`), `#6B7280`.
* **Trailing Indicator:** Lock icon in gray line styling (`#6B7280`).

### 5. Lesson 5 (Locked)
* **Container:** White background (`#FFFFFF`), faint border (`#E5E7EB`), muted opacity.
* **Header Tag:** `"Lesson 5"` — `11px` / `13px`, Regular (`400`), `#6B7280`.
* **Title:** `"Shopping"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Progress Counter:** `"0 / 6 lessons"` — `13px`, Regular (`400`), `#6B7280`.
* **Trailing Indicator:** Lock icon in gray line styling (`#6B7280`).

### 6. Lesson 6 (Locked)
* **Container:** White background (`#FFFFFF`), faint border (`#E5E7EB`), muted opacity.
* **Header Tag:** `"Lesson 6"` — `11px` / `13px`, Regular (`400`), `#6B7280`.
* **Title:** `"Family & Friends"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Progress Counter:** `"0 / 6 lessons"` — `13px`, Regular (`400`), `#6B7280`.
* **Trailing Indicator:** Lock icon in gray line styling (`#6B7280`).

---

## 5. Bottom Navigation Bar

* **Container:** Fixed bottom navigation bar with top border divider (`#E5E7EB`).
* **Items (5 Navigation Tabs):**
  1. **Home:** Home outline icon, label `"Home"` (`11px`, Regular `400`, `#6B7280`).
  2. **Learn (Active):** Solid filled book icon (`#6C4EF5`), label `"Learn"` (`11px`, SemiBold `600`, `#6C4EF5`).
  3. **AI Teacher:** AI face outline icon, label `"AI Teacher"` (`11px`, Regular `400`, `#6B7280`).
  4. **Chat:** Chat bubble outline icon, label `"Chat"` (`11px`, Regular `400`, `#6B7280`).
  5. **Profile:** User profile outline icon, label `"Profile"` (`11px`, Regular `400`, `#6B7280`).