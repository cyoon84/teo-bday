# Handoff: 돌잔치 초대장 (First Birthday Invitation) Web Page

## Overview
A single-page invitation for 태오's first birthday (돌잔치), to be published on a homepage. One centered invitation card on a warm neutral page background. Static content, one external link (Naver Map), no forms or state.

## About the Design Files
The files in this bundle are **design references created in HTML** — they show the intended look exactly, but are not production code to copy blindly. Recreate this design in the target codebase's environment (plain static hosting, React, Next.js, etc.) using its established patterns. If no environment exists yet, `reference.html` is self-contained enough to deploy as-is as a static page (with the `photos/` folder alongside it).

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Reproduce pixel-perfectly.

## Screens / Views

### Invitation Card (single view)
- **Page background**: `#E9E7E2`, content centered horizontally, `32px 16px` padding.
- **Card**: width `540px`, background `#F7F5F1`, outer border `12px solid #8FCDEB`, radius `32px`, inner padding `10px`, shadow `0 10px 30px rgba(0,0,0,0.08)`.
- **Inner frame**: `2px dashed #B5DEF2`, radius `20px`, padding `60px 30px 54px`, `overflow:hidden`, column flex, centered.
- **Background pattern** (z-index 0, absolute inset 0, pointer-events none): 14 rows of repeating "HAPPY BIRTHDAY" text, font Jua `40px`, color `#E4F1FA`, letter-spacing `4px`, row gap `26px`, `18px` top padding; odd rows offset `-160px` left, even rows `-40px` (staggered brick effect), `white-space:nowrap`.
- **Photo composition** (relative container `260×460px`):
  - Oval photo mask: absolute `left:20px; top:150px`, `220×280px`, `border-radius:50%`, overflow hidden. Inside: `photos/hehe.png` at `540×540px`, margin `-165px 0 0 -142px` (crops to the baby's face).
  - Party hat: absolute `left:18px; top:24px`, `230×190px`, background `#6FBCE0`, `clip-path:polygon(52% 0, 0 96%, 100% 78%)` — sits behind/above the oval like a cone hat.
  - Balloon string SVG under photo: absolute `top:418px`, viewBox `0 0 260 60`, two paths stroked `#2A2A2A` at `1.5px` (an arc and a small bow + tail).
- **Big "1"**: font-weight `800`, `120px`, color `#3D5A73`, letter-spacing `-4px`, line-height 1.
- **Text block** (margin-top `24px`, column gap `10px`, centered):
  - Label: "함께 축하해 주세요" — `19px`, weight 600, `#5C5A55`.
  - Headline: "태오의 첫 번째 생일." — `38px`, weight 800, letter-spacing `-1px`, line-height 1.25; "태오의" and final period `#3D5A73`, "첫 번째 생일" `#7FA8C9`.
  - Details: "9월 5일 토요일 오후 1시 | 열두대문 의왕점" — `21px`, weight 700, `#2A2A2A`, margin-top `8px`.
  - Address link: "경기 의왕시 학현로 204 · 지도 보기" — `16px`, weight 500, color `#8B8880`, links to `https://naver.me/5EUX5aej`, opens in new tab.

## Interactions & Behavior
- Single link (address → Naver Map, `target="_blank"`). Link hover color `#5FA8CD`.
- No animations, no forms, no other interactivity.
- Responsive: card is fixed `540px` wide; on narrower viewports it may be scaled down (e.g. CSS `transform: scale()` or `max-width:100%` with internal scaling) — designer's intent is to preserve proportions rather than reflow.

## State Management
None. Fully static.

## Design Tokens
- Colors: page bg `#E9E7E2`; card bg `#F7F5F1`; border sky `#8FCDEB`; dashed border `#B5DEF2`; hat `#6FBCE0`; pattern text `#E4F1FA`; navy `#3D5A73`; light blue text `#7FA8C9`; body dark `#2A2A2A`; gray label `#5C5A55`; muted gray `#8B8880`; link hover `#5FA8CD`.
- Fonts: **Pretendard** (body/headline — CDN: `cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`), **Jua** (background pattern — Google Fonts).
- Radii: card `32px`, inner frame `20px`. Borders: `12px` solid outer, `2px` dashed inner.

## Assets
- `photos/hehe.png` — baby photo used in the oval (540×540 crop source, 418×418 file). Other cuts of the same shoot are in the project's `photos/` folder if a different expression is wanted. All photos are the client's own.
- Fonts load from public CDNs (both free-licensed: Pretendard SIL OFL, Jua OFL via 눈누/Google Fonts).

## Files
- `reference.html` — self-contained static recreation of the design (open in a browser; deployable as-is).
- `돌잔치 초대장 2.dc.html` — original design file from the design session (requires its runtime; use as reference only).
- `photos/hehe.png` — the photo asset.
