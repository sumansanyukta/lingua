# Lingua Language Selection Screen — Detailed UI/UX Layout Specification

This document provides a complete layout and visual specification for the **Choose a Language** UI screen based on the Lingua Design System.

---

## 1. Viewport & Navigation Bar

* **Canvas:** Mobile Viewport (`#FFFFFF` background)
* **Status Bar:** Top-aligned; time (`9:41`) on left, signal/Wi-Fi/battery icons on right.
* **Top Navigation:** Flex row layout (`justify-content: space-between`, `align-items: center`):
  * **Left:** Back chevron arrow (`<`) in dark primary text color (`#0D132B`).
  * **Center Header (H3):** `"Choose a language"` — `20px` / `24px`, SemiBold (`600`), `#0D132B`.

---

## 2. Search Bar

* **Container:** Full width with horizontal padding (`24px`), height `48px`, border radius `24px` (pill shape).
* **Background & Border:** White surface (`#FFFFFF`) with a light gray border (`#E5E7EB`).
* **Content:**
  * **Icon:** Search magnifying glass icon on the far left (`#6B7280`).
  * **Placeholder Text:** `"Search languages"` — `14px` / `16px`, Regular (`400`), `#6B7280`.

---

## 3. Section Title

* **Title (H4):** `"Popular"` — `16px`, SemiBold (`600`), `#0D132B`, left-aligned with `margin-top: 24px`, `margin-bottom: 12px`.

---

## 4. Language Selection List

Vertical list of selectable language cards with rounded corners (`16px`), light border/surface background, circular flag icons, title, learner count subtitle, and trailing selection indicator.

### Selected Language Card (Active State)
* **Language:** **Spanish**
* **Border & Accent:** Active border in Lingua Purple (`#6C4EF5`, `1.5px` or `2px` width) with soft surface highlight.
* **Leading Icon:** Round flag of Spain.
* **Title:** `"Spanish"` — `16px`, SemiBold (`600`), `#0D132B`.
* **Subtitle:** `"28.4M learners"` — `13px`, Regular (`400`), `#6B7280`.
* **Trailing Action:** Filled blue/purple circle with a white checkmark (`✓`) indicating current selection.

### Unselected Language Cards (Default State)
Each unselected item features a white card background (`#FFFFFF`), faint border (`#E5E7EB`), round country flag, primary text, secondary learner count, and a right chevron (`>`) in `#6B7280`.

1. **French**
   * **Flag:** France
   * **Title:** `"French"`
   * **Subtitle:** `"19.4M learners"`
   * **Trailing Icon:** Right chevron (`>`)
2. **Japanese**
   * **Flag:** Japan
   * **Title:** `"Japanese"`
   * **Subtitle:** `"12.7M learners"`
   * **Trailing Icon:** Right chevron (`>`)
3. **Korean**
   * **Flag:** South Korea
   * **Title:** `"Korean"`
   * **Subtitle:** `"9.3M learners"`
   * **Trailing Icon:** Right chevron (`>`)
4. **German**
   * **Flag:** Germany
   * **Title:** `"German"`
   * **Subtitle:** `"8.1M learners"`
   * **Trailing Icon:** Right chevron (`>`)
5. **Chinese**
   * **Flag:** China
   * **Title:** `"Chinese"`
   * **Subtitle:** `"7.4M learners"`
   * **Trailing Icon:** Right chevron (`>`)

---

## 5. Expand / See All Button

* **Container:** Full-width rounded card (`16px` border radius), white background (`#FFFFFF`), light border (`#E5E7EB`), height `52px`.
* **Layout:** Centered flex row.
* **Leading Icon:** Globe icon in dark text color (`#0D132B`).
* **Label:** `"See all languages"` — `16px`, SemiBold (`600`), `#0D132B`.

---

## 6. Footer Illustration Graphic

* **Position:** Fixed at the bottom of the screen background.
* **Graphic:** Cartoon illustration of the Earth globe surrounded by famous world landmarks (Eiffel Tower, Leaning Tower of Pisa, oriental pagodas/domes, European cathedrals) in vibrant green, blue, and yellow tones.