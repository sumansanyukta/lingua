# Lingua AI Teacher Screen — Detailed UI/UX Layout Specification

This document provides a complete layout and visual specification for the **AI Teacher Live Call** UI screen based on the Lingua Design System.

> **CRITICAL LAYOUT & SPACING DIRECTIVE FOR DEVELOPERS:**
> To prevent unnecessary white gaps, vertical collapse, or unexpected whitespace bugs:
> 1. Set the main screen container to `display: flex; flex-direction: column; height: 100vh; overflow: hidden; justify-content: space-between;`.
> 2. The central Video Call Stage (`Section 2`) **MUST** use `flex: 1; margin: 0;` to expand dynamically and seamlessly touch the header area directly beneath the top navigation bar.
> 3. **DO NOT** add fixed `height` or excessive `padding-top`/`margin-top` to nested image wrappers.

---

## 1. Viewport & Header Navigation

* **Canvas:** Mobile Viewport (`#FFFFFF` background)
* **Status Bar:** Top-aligned; time (`9:41`) on left, signal/Wi-Fi/battery icons on right.
* **Header Bar Layout:** Flex row (`justify-content: space-between`, `align-items: center`, `height: 56px`, `padding-x: 16px`):
  * **Left Side (Navigation & Status):**
    * **Back Button:** Chevron arrow (`<`) in `#0D132B`.
    * **Title Group:**
      * **Main Title:** `"AI Teacher"` — `18px`, SemiBold (`600`), `#0D132B`.
      * **Status Subtitle:** Green dot (`#21C16B`) + `"Online"` — `13px`, Regular (`400`), `#6B7280`.
  * **Right Side (Call Controls):**
    * Circular icon buttons for video, user streak (`12`), and audio/settings (`#0D132B` / `#F6F7FB`).

---

## 2. Interactive Video Call Stage (Main Hero Area)

* **Container:** Flex grow stage (`flex: 1`, `margin-x: 12px`, `margin-top: 4px`, `border-radius: 24px`, `overflow: hidden`, `position: relative`).
* **Background Scene:** Full-bleed background depicting a cozy, warm interior room (wooden bookshelf, plants, ambient lighting).

### Picture-in-Picture & Characters
* **AI Mascot Avatar (Center Stage):** Full body of the Lingua Fox wearing a cozy purple sweater, winking/smiling and waving.
* **User Camera Floating Tile (Top Right):**
  * Floating webcam preview box (`width: ~100px`, `height: ~130px`, `border-radius: 16px`, `border: 2px solid #FFFFFF`).
  * Displays user video feed (smiling young man in green hoodie).

### Real-Time Speech Overlay
* **Position:** Absolute positioned over the lower portion of the video stage (`bottom: 120px`, `margin-x: 16px`).
* **Card Container:** White rounded bubble (`background: #FFFFFF`, `border-radius: 20px`, `padding: 16px`, `box-shadow`).
* **Content:**
  * **Primary Target Phrase:** `"¡Muy bien!"` (`16px`, SemiBold `600`, `#0D132B`).
  * **Translation & Feedback:** `"That was great! 👏"` (`14px`, Regular `400`, `#6B7280`).
  * **Audio Action:** Blue speaker icon (`#4D8BFF`) on the right.

---

## 3. Call Controls Overlay

Centered flex row floating directly over the lower gradient of the video stage (`margin-bottom: 16px`).

* **Control Buttons (Circular, 4-button row):**
  1. **Camera Toggle:** White circle button (`#FFFFFF`), camera icon in `#0D132B`, label `"Camera"`.
  2. **Microphone Toggle:** White circle button (`#FFFFFF`), mic icon in `#0D132B`, label `"Mic"`.
  3. **Subtitles Toggle:** White circle button (`#FFFFFF`), translation icon in `#0D132B`, label `"Subtitles"`.
  4. **End Call (Action):** Red solid circle button (`#FF4D4F`), white end-call icon (`#FFFFFF`), label `"End Call"`.

---

## 4. Real-Time Feedback Card (Speaking Metrics)

* **Container:** Floating white surface card (`background: #FFFFFF`, `border-radius: 20px`, `padding: 16px`, `margin-x: 12px`, `margin-bottom: 12px`).
* **Layout:** 3-Column flex grid (`justify-content: space-around`) with vertical dividers (`#E5E7EB`).
* **Metric Items:**
  1. **Speaking:** Title (`"Speaking"` - `#0D132B`), Value (`"Excellent"` - Success Green `#21C16B`, SemiBold `600`).
  2. **Pronunciation:** Title (`"Pronunciation"` - `#0D132B`), Value (`"Great"` - Info Blue `#4D8BFF`, SemiBold `600`).
  3. **Grammar:** Title (`"Grammar"` - `#0D132B`), Value (`"Good"` - Lingua Purple `#6C4EF5`, SemiBold `600`).

---

## 5. Bottom Navigation Bar

* **Container:** Fixed bottom navigation bar with top border divider (`#E5E7EB`).
* **Items (5 Navigation Tabs):**
  1. **Home:** Home outline icon, label `"Home"` (`11px`, Regular `400`, `#6B7280`).
  2. **Learn (Active):** Solid filled book icon (`#6C4EF5`), label `"Learn"` (`11px`, SemiBold `600`, `#6C4EF5`).
  3. **AI Teacher:** AI face outline icon, label `"AI Teacher"` (`11px`, Regular `400`, `#6B7280`).
  4. **Chat:** Chat bubble outline icon, label `"Chat"` (`11px`, Regular `400`, `#6B7280`).
  5. **Profile:** User profile outline icon, label `"Profile"` (`11px`, Regular `400`, `#6B7280`).