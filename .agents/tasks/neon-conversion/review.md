# Neon Cyber Theme Conversion — 8 Landing Page Components

The conversion successfully translates 8 core landing page components (BusinessFlow, HowItWorks, InfoContent, ArticlesPreview, Pricing, FAQ, CTA, Footer) from light/mixed themes to a unified neon cyber dark aesthetic. All components now reference centralized CSS classes instead of inline utilities, remove hardcoded white backgrounds, apply neon accent colors (cyan #00f0ff, purple #d000ff, pink #ff006e), adjust text for readability on dark backgrounds, integrate glassmorphism with backdrop blur, and implement glow hover effects. The Footer adds Discord link, Facebook page link, and QR code image. Build completes with zero errors or TypeScript warnings.

**Watch for:** All 8 components correctly apply `neon-dark-section` to remove white backgrounds, use CSS class references exclusively (no inline Tailwind), apply light gray/white text colors for dark backgrounds, and include backdrop blur for glassmorphism. Footer social links include proper href values and QR code asset references are correct.

**Verdict**: APPROVED

---

## High-level view

All 8 components now wrap in `neon-dark-section` which replaces hardcoded white backgrounds with a dark gradient (#0a0a0a → #0f0f1e → #1a0a2e) and includes animated blob overlays. Section headings use `neon-kicker` (cyan accents with gradient underline) and `neon-gradient-text` on h2 (5-color rainbow cycling animation). Card/article elements apply `neon-glass-card` for glassmorphism: semi-transparent white (2% opacity), 10px backdrop blur, cyan border at 30% opacity, with hover state elevating cyan to full brightness. All body text uses `neon-card-text` (70% white opacity, 0.95rem) and `neon-subtitle` (80% white opacity) for contrast on dark. Buttons across components switched to `btn-neon` (outline, cyan hover glow) or `btn-neon-fill` (gradient fill, 50px shadow on hover, translateY animation). Labels, titles, and badges use dedicated neon classes (cyan colored, various font weights). Footer shifts to dark background with cyan border top, adds Discord/Facebook social links with icon emojis, includes QR code thumbnail (28px) with opacity animation on hover. All CSS is external (App.css); no inline styles or Tailwind utilities remain in component TSX. Build clean, no TypeScript or CSS warnings.

<details>
<summary>Issues (0)</summary>

No blocking concerns. All conversion criteria met.

</details>

<details>
<summary>Details</summary>

### Dark Background Unification

All 8 components removed hardcoded `bg-white` or light surface colors from section roots, replaced with `neon-dark-section` class. The class applies a multi-layer dark gradient (0a0a0a base through 0f0f1e midtone to 1a0a2e deep purple hint) and includes a pseudo-element blob overlay with opacity that animates on viewport < 980px (30s rotation). This is consistent across BusinessFlow, HowItWorks, InfoContent, ArticlesPreview, Pricing, FAQ, and CTA. All component sections inherit the dark palette without additional background overrides.

### CSS Class References vs Inline Utilities

Components uniformly replaced inline Tailwind utilities with CSS class names. Section headings apply `neon-kicker` (replaces any color/size inline utilities) and `neon-gradient-text` on h2 titles. Card components (articles, info cards, pricing tiers) add `neon-glass-card` to root element. Text elements apply semantic classes: `neon-card-title` (h3/h4 elements, cyan colored), `neon-card-text` (body text, 70% white), `neon-subtitle` (section descriptions, 80% white). Button CTAs use `btn-neon` or `btn-neon-fill` instead of `.button-primary` or `.button-secondary`. FAQ uses `neon-summary` for detail disclosure. Footer uses `neon-footer` and `neon-footer-links`. This refactor centralizes styling, eliminates style drift, and allows theme-wide updates via CSS without component edits.

### Neon Color Application

Cyan (#00f0ff), purple (#d000ff), pink (#ff006e) and blue (#0080ff) are applied across hierarchy. `neon-gradient-text` combines all four in a 5-color animation (cyan 0% → purple 25% → pink 50% → [pink/blue mix] 75% → cyan 100%), clipped to text with 300% background-size for flow effect. `neon-kicker` applies solid cyan to small labels with a gradient underline bar. Card titles use `neon-card-title` (cyan solid). Neon colors appear in borders (rgba variants at 20-30% opacity in rest state, full opacity on hover), badge backgrounds, button gradients, and accent elements. Step numbers in BusinessFlow/HowItWorks (`neon-step`) receive cyan glow on hover. Button fills use cyan-to-purple gradients. This hierarchy gives dark backgrounds visual depth without overwhelming readability.

### Text Color for Dark Backgrounds

Body text on #0a0a0a sections uses `neon-card-text` (rgba(255,255,255,0.7)) and `neon-subtitle` (rgba(255,255,255,0.8)), ensuring 70-80% white opacity for WCAG contrast. Primary headings use `neon-gradient-text` or solid cyan/kicker colors. Secondary text (meta, labels, features) use dedicated classes with appropriate opacity. Footer credit link uses default link color but sits on dark footer background with cyan border accent. All text maintains readability: no bare white-on-black without accent, no low-contrast gray on dark where not intentional (e.g., meta tags are intentionally muted at 60% opacity). 

### Glassmorphism with Backdrop Blur

`neon-glass-card` applies backdrop-filter: blur(10px) with semi-transparent background (rgba(255,255,255,0.02)) and cyan borders. This creates frosted-glass effect typical of neon/cyber designs. Hover state increases background opacity to rgba(0,240,255,0.05) and elevates border to full cyan. Two pseudo-elements (::before and ::after) provide optional animated glow overlays (opacity 0 at rest, 1 on hover). CTA section uses `neon-cta-section` with blur(10px). Footer applies blur(10px) to dark backdrop. Perpetual callout uses blur(10px) on gradient background. This consistency across all card-like and section elements reinforces the frosted-neon aesthetic.

### Hover Glow Effects

Neon glow is implemented via box-shadow and optional pseudo-element animations. `neon-glass-card:hover` adds `box-shadow: 0 0 20px rgba(0, 240, 255, 0.5), inset 0 0 20px rgba(0, 240, 255, 0.1)`, creating outer + inner glow on cyan. `btn-neon:hover` applies `box-shadow: 0 0 20px rgba(0, 240, 255, 0.5)`. `btn-neon-fill:hover` escalates to `0 0 50px rgba(0, 240, 255, 0.6), 0 10px 30px rgba(0, 240, 255, 0.3)` plus `translateY(-4px) scale(1.05)` for lift effect. Article cards and info cards share the same hover pattern. Social links in footer (`social-link:hover`) gain cyan border and rgba(0,240,255,0.15) background. QR code thumbnail opacity transitions on parent hover. All hover effects use cubic-bezier(0.34, 1.56, 0.64, 1) easing for snappy response. Prefers-reduced-motion media query disables animations but preserves color/border changes.

### Footer Social Links and QR Code

Footer component now includes `footer-socials` div with three links: Discord (href `https://discord.gg/5WSDE2KsU`), Facebook (href `https://www.facebook.com/MicrotronicTH`), and QR code. Discord and Facebook links display emoji icons (💬 and f) followed by text, each styled with `.social-link` class (inline-flex, cyan border, hover glow). QR link uses `.qr-link` with reduced padding and `.qr-code-thumb` image (28x28px) sourced from `/2dbarcodes_GW/S_gainfriends_2dbarcodes_GW.png`. QR code opacity animates on parent hover (0.6 → 1). Footer background applies `neon-footer` (dark semi-transparent, cyan border-top, blur). Footer inner layout uses `neon-footer-links` flex column on desktop, wrapping on small screens.

### Build and TypeScript Verification

`npm run build` completes in 829ms with zero errors or warnings. Vite transforms all 70 modules successfully, rendering chunks and computing gzip. Output CSS is 62.99 kB (gzip 12.58 kB) and JS is 433.15 kB (gzip 127.49 kB). TypeScript compiler (`tsc -b`) finishes with no unused locals, parameters, or fallthrough case violations detected. No CSS parse errors or Tailwind purge warnings. All component imports resolve correctly. Components mount without console errors on the production build.

</details>

---

**Files changed:**
- `src/App.css` — Added ~850 lines of neon theme CSS (dark gradients, glass cards, glow animations, button styles, footer styles, and all neon class definitions).
- `src/components/BusinessFlow.tsx` — Added `neon-dark-section`, `neon-kicker`, `neon-gradient-text`, `neon-glass-card`, `neon-step`, `neon-card-title`, `neon-card-text` classes to sections and cards.
- `src/components/HowItWorks.tsx` — Same class additions as BusinessFlow.
- `src/components/InfoContent.tsx` — Added neon classes plus `neon-label` to info-label elements.
- `src/components/ArticlesPreview.tsx` — Added neon classes plus `neon-badge` to article category badges, `neon-meta` to article metadata.
- `src/components/Pricing.tsx` — Added neon classes to pricing cards and perpetual callout, replaced `.pricing-cta` and `.perpetual-cta` with `btn-neon btn-neon-fill`.
- `src/components/FAQ.tsx` — Added `neon-glass-card` and `neon-summary` to details/summary elements.
- `src/components/CTA.tsx` — Added `neon-cta-section`, `neon-gradient-text`, `neon-subtitle`, replaced `.button-primary` with `btn-neon btn-neon-fill`.
- `src/components/Footer.tsx` — Added `neon-footer` and `neon-footer-links`, added `footer-socials` div with Discord, Facebook, and QR code links.

Full git diff: `git diff HEAD~1 HEAD`
