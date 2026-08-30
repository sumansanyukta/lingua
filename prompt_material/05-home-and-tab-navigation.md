# Lingua Dashboard Screen — Detailed UI/UX Layout Specification

This document provides a complete layout and visual specification for the **Main Dashboard / Home** UI screen based on the Lingua Design System.

---

## 1. Viewport & Top Header Bar

* **Canvas:** Mobile Viewport (`#FFFFFF` background)
* **Status Bar:** Top-aligned; time (`9:41`) on left, signal/Wi-Fi/battery icons on right.
* **Header Bar Layout:** Flex row (`justify-content: space-between`, `align-items: center`):
  * **Left Side (User & Language Profile):**
    * **Flag Badge:** Circular Spanish flag icon (`28px × 28px`).
    * **Greeting Text:** `"Hola, Alex!"` (`18px`, SemiBold `600`, `#0D132B`) followed by a waving hand emoji (`👋`).
  * **Right Side (Gamification & Notifications):**
    * **Streak Badge:** Flame icon (Streak Orange `#FF8A00`) + `"12"` active counter (`16px`, SemiBold `600`, `#0D132B`).
    * **Notification Icon:** Bell outline icon (`#0D132B`).

---

## 2. Daily Goal & Gamification Card

* **Container:** Warm cream surface card (`#FFFDF7` / `#FFF9F0`), rounded corners (`20px`), internal padding (`16px`).
* **Content Layout:** Two-column grid / flex layout:
  * **Left Column:**
    * **Label:** `"Daily goal"` (`14px`, Regular `400`, `#6B7280`).
    * **Progress Fraction:** `"15"` (`24px`, Bold `700`, `#0D132B`) + `"/ 20 XP"` (`16px`, Medium `500`, `#6B7280`).
    * **Progress Bar:** Custom progress track background (`#FFEEDD`), filled with active progress bar in Streak Orange (`#FF8A00`, height `8px`, rounded `4px`).
  * **Right Column:**
    * **Reward Visual:** 3D treasure chest graphic illustration.

---

## 3. Active Course Progress Card (Hero Banner)

* **Container:** Full-width hero banner with Lingua Purple gradient fill (`#6C4EF5` to `#5B3BF6`), rounded corners (`20px`), relative positioning.
* **Background Artwork:** Right-aligned architectural illustration (Spanish cathedral/church building set against green hills).
* **Text & Call-to-Action:**
  * **Kicker Label:** `"Continue learning"` (`14px`, Regular `400`, translucent white `#FFFFFF99`).
  * **Course Title:** `"Spanish"` (`24px`, SemiBold `600`, `#FFFFFF`).
  * **Level Tag:** `"A1 • Unit 3"` (`14px`, Regular `400`, translucent white `#FFFFFFDD`).
  * **Interactive CTA Button:** White pill button (`background: #FFFFFF`, `border-radius: 12px`, padding `8px 20px`), text `"Continue"` (`14px`, SemiBold `600`, Lingua Purple `#6C4EF5`).

---

## 4. Today's Plan Section

* **Section Header:** Flex row (`justify-content: space-between`, `align-items: center`):
  * **Title (H4):** `"Today's plan"` (`18px`, SemiBold `600`, `#0D132B`).
  * **Action Link:** `"View all"` (`14px`, SemiBold `600`, Lingua Purple `#6C4EF5`).

* **Task Item List (Vertical Stack):**
  1. **Lesson Task (Completed):**
     * **Icon Badge:** Purple square container (`#6C4EF5`) with white open book icon (`16px` radius).
     * **Title:** `"Lesson"` (`16px`, SemiBold `600`, `#0D132B`).
     * **Subtitle:** `"At the café"` (`13px`, Regular `400`, `#6B7280`).
     * **Status Indicator:** Filled blue/purple checkmark circle (`✓`).
  2. **AI Conversation Task (Incomplete):**
     * **Icon Badge:** Purple square container (`#6C4EF5`) with white headphones icon (`16px` radius).
     * **Title:** `"AI Conversation"` (`16px`, SemiBold `600`, `#0D132B`).
     * **Subtitle:** `"Talk about your day"` (`13px`, Regular `400`, `#6B7280`).
     * **Status Indicator:** Empty grey circle outline (`#C4C8D0`).
  3. **New Words Task (Incomplete):**
     * **Icon Badge:** Light red/coral square container (`#FF6B6B`) with white ghost/card icon (`16px` radius).
     * **Title:** `"New words"` (`16px`, SemiBold `600`, `#0D132B`).
     * **Subtitle:** `"10 words"` (`13px`, Regular `400`, `#6B7280`).
     * **Status Indicator:** Empty grey circle outline (`#C4C8D0`).

---

## 5. Next Up (AI Video Call Feature Card)

* **Container:** Soft green tint surface (`#F2FBF5`), rounded corners (`20px`), relative layout.
* **Text Content (Left Side):**
  * **Sub-label:** `"Next up"` (`13px`, Regular `400`, `#6B7280`).
  * **Title:** `"AI Video Call"` (`18px`, Bold `700`, `#0D132B`).
  * **Subtitle:** `"Practice speaking"` (`14px`, Regular `400`, `#6B7280`).
* **Visual Content (Right Side):**
  * **Avatar:** Circular avatar image of a female AI tutor (`48px × 48px`).
  * **Action Floating Badge:** Green circular video camera icon button (`#21C16B` / Success Green fill).

---

## 6. Bottom Navigation Bar

* **Container:** Fixed bottom navigation bar with top border divider (`#E5E7EB`).
* **Items (5 Navigation Tabs):**
  1. **Home (Active):** Solid purple home icon (`#6C4EF5`), label `"Home"` (`11px`, SemiBold `600`, `#6C4EF5`).
  2. **Learn:** Open book outline icon, label `"Learn"` (`11px`, Regular `400`, `#6B7280`).
  3. **AI Teacher:** AI face outline icon, label `"AI Teacher"` (`11px`, Regular `400`, `#6B7280`).
  4. **Chat:** Chat bubble outline icon, label `"Chat"` (`11px`, Regular `400`, `#6B7280`).
  5. **Profile:** User profile outline icon, label `"Profile"` (`11px`, Regular `400`, `#6B7280`).