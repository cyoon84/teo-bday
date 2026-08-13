# Handoff: 돌잔치 초대장 버전 1 (First Birthday Invitation, sticker version)

## Overview
A single-page invitation for 태오's first birthday (돌잔치), published on a homepage. One centered card on a light sky-blue page. Static content, one external link (Naver Map). Uses two die-cut photo stickers of the baby (transparent PNGs).

## About the Design Files
`reference.html` is a **self-contained static recreation** of the design bundle as delivered — pure spec fidelity, no deviations. `돌잔치 초대장.dc.html` is the original design-session file; reference only.

`index.html` is the **deployed page**. It matches `reference.html` closely, with one intentional deviation in the "오시는 길" section: instead of a hand-drawn sketch map plus a "네이버 지도에서 보기" button linking out, `index.html` embeds a live, always-visible interactive Naver Map directly in the card (no click needed to see it). This carries forward the map-embed behavior from the previous design version, kept by request when this design replaced it. See `#naverMap` in `index.html` for the implementation.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Reproduce pixel-perfectly (aside from the map-embed deviation noted above).

## Layout Spec

- **Page**: background `#EAF5FB`, card centered, `32px 16px` padding.
- **Card**: width `520px`, background `#FCF3E7` (warm cream), border `6px solid #8FCDEB` (sky blue), radius `28px`, inner padding `10px`.
- **Inner frame**: `2px dashed #B5DEF2`, radius `20px`, padding `40px 36px 36px`, column flex, centered, text color `#5B4636`.
- **Crayon headline** (Gaegu 700, rotated −2°, text-shadow `1px 1px 0 rgba(111,188,224,.35)`): "FIRST BIRTHDAY" `40px`, "FIRST" `#6FBCE0` / "BIRTHDAY" `#F49A9A`; sub-line "저희 아기가 첫 생일을 맞이했어요" `24px` `#8A7462`, rotated −1°.
- **Hero sticker**: `photos/stk_bluejays.png`, width `340px`, margin-top `20px` (baby in Blue Jays uniform, arms up, "생일잔치에 초대합니다" bubble).
- **Title** (Jua): "태오의&lt;br&gt;첫 번째 생일" `44px` `#4E9FC7`, line-height 1.35, centered.
- **Greeting** `18px` line-height 1.8 `#7A6552`, 3 lines:
  "사랑으로 함께해 주신 모든 분들을 모시고 / 우리 태오의 첫 돌을 축하하려 합니다. / 귀한 걸음 하시어 자리를 빛내 주세요."
- **Info card** (white, radius `18px`, padding `22px 24px`, rows gap `12px`): label (Jua `17px` `#6FBCE0`, `52px` wide) + value (`19px` bold):
  - 날짜 — 2026년 9월 5일 토요일 오후 1시
  - 장소 — 열두대문 의왕점
  - 주소 — 경기 의왕시 학현로 204 (`17px` `#8A7462`)
- **Map card** (white, radius `18px`): "오시는 길" label (Jua `18px` `#6FBCE0`), then:
  - In `reference.html`: a pill button "네이버 지도에서 보기" (`#8FCDEB` bg, white Jua text, radius `999px`) linking out to `https://naver.me/5EUX5aej` in a new tab.
  - In `index.html` (deployed): no button — a live interactive Naver Maps embed is shown directly, with a place-name header and a footer link to open the same `naver.me` URL in the app.
- **Closing sticker**: `photos/stk_hearthands.png`, width `220px`, rotated −2° (baby making heart hands).
- **Sign-off**: "아빠 · 엄마 올림" `17px` `#8A7462`.

## Fonts (all free-licensed)
- **Jua** — Google Fonts (titles, labels, button)
- **Gaegu 700** — Google Fonts (crayon headline)
- **NanumSquareRound** — body; @font-face woff: `https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff`

## Interactions
- `reference.html`: single external link (map button + link colors `a { #3E9CC9 }`, hover `#2B7FA8`). No JS required.
- `index.html`: no buttons/links to click for the map — the Naver Maps embed described above loads automatically on page load (requires a Naver Maps Client ID — see `NAVER_MAPS_CLIENT_ID` in the script). The footer "네이버 지도 앱에서 열기" link is a normal external link.
- Card is fixed `520px`; on small screens it's scaled down via JS (`#cardOuter` transform) rather than reflowed.

## Assets
- `photos/stk_bluejays.png` — hero sticker (transparent PNG)
- `photos/stk_hearthands.png` — heart-hands sticker (transparent PNG)
Both are the client's own photos.

## Files
- `index.html` — deployed page (design + always-visible inline Naver Map embed)
- `reference.html` — pure static recreation of the design bundle (sketch-free button, no map embed)
- `돌잔치 초대장.dc.html` — original design file (reference only)
- `photos/` — the two sticker PNGs
