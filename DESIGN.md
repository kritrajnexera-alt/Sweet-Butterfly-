# Design

## Theme

Dark botanical. Deep midnight forest green + antique gold + warm parchment. Magical garden at night.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--midnight` | `#0A1A0F` | Primary background |
| `--midnight-light` | `#111F14` | Card/surface background |
| `--gold` | `#D4AF37` | Primary accent, links, borders on hover |
| `--gold-dark` | `#B8942E` | Gold hover state |
| `--cream` | `#F5EDD6` | Headings, hero text |
| `--text` | `#F0EBE0` | Body text |
| `--text-muted` | `#A09888` | Secondary text, nav |

### Typography

| Role | Font | Size | Weight | Style |
|------|------|------|--------|-------|
| Hero heading | Cormorant Garamond | clamp(3rem,8vw,88px) | 300 (light) | italic |
| Section heading | Cormorant Garamond | clamp(2rem,5vw,44px) | 300 (light) | italic |
| Subheading/blockquote | Cormorant Garamond | clamp(1.5rem,5vw,48px) | 300 (light) | italic |
| Nav links | Space Grotesk | 12px | 500 (medium) | uppercase, 4px tracking |
| Body | Inter | 15px | 400 (regular) | — |

## Components

### Navigation
- Fixed top, transparent until scroll, then midnight/90 + backdrop-blur
- Gold butterfly icon + "Sweet Butterfly" in Cormorant Garamond italic
- 6 links: Home, Signature, Menu, Gallery, About, Contact
- Mobile: hamburger with animated bars → slide-down menu

### Hero Section
- Full viewport, midnight bg with radial gold glow
- "Where Every Dessert Tells A Story." — line-broken after "Every" and "Tells"
- Letter-by-letter word reveal animation
- Thin gold outlined CTA: "Explore our world →"
- Bottom left: "4.8 ★ · Ankleshwar's Finest Desserts"
- Bottom right: gold butterfly SVG watermark

### Signature Section
- Full-width dark, pull quote in cream + gold
- 3 items listed editorial style with gold gradient dividers
- Slide-in from left on scroll

### Menu Section
- Grid of dark cards (#111F14) with white/5 border
- Gold border glow on hover + scale 1.02
- 6 category cards with emoji icons
- Staggered reveal on scroll

### Gallery Section
- CSS columns masonry grid
- Unsplash dessert imagery
- Gold caption overlay on hover
- Instagram handle below

### About Section
- Split layout: left — 4.8 in 200px Cormorant italic gold
- Right — story paragraph
- No images needed

### Contact Section
- Location · Phone · Instagram listed
- Large gold WhatsApp CTA button
- Butterfly SVG decoration

### Floating WhatsApp Button
- Fixed bottom-right, gold circle with WhatsApp icon
- Scale animation on load, hover scale 1.1

## Motion

- Ease: [0.25, 0.1, 0.25, 1] (smooth custom ease)
- Hero words: stagger 0.08s per word, y: "100%" to 0
- Elements: fade + translateY on scroll via whileInView
- Staggered card reveals: 0.1s delay between each
- No bounce, no elastic

## Layout

- max-w-7xl content containers
- Sections: py-28 sm:py-36
- Grid: 1→2→3 columns responsive
- Overflow hidden on all sections
