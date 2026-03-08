

# Making Your Portfolio Site SICK

Here's the plan to level up every section with premium interactions, visual flair, and polish -- all staying within the black & white theme.

## 1. Hero -- Magnetic cursor effect + staggered text reveal

- Add a custom cursor follower (a subtle circle that follows the mouse, grows on hover over interactive elements)
- Letter-by-letter staggered animation on "YUG VASHISTH" instead of a simple fade
- Add a noise/grain texture overlay for that editorial design feel
- Animated line that draws itself between the name and description
- Social links get a magnetic hover effect (slightly pull toward cursor)

## 2. Smooth page transitions + scroll progress

- Add a scroll progress bar at the top of the page (thin line)
- Smooth section reveal with parallax-like stagger effects
- Sticky nav that appears after scrolling past hero (slides down, minimal, blurred backdrop)

## 3. Experience -- Timeline with animated connector

- Replace the flat list with a vertical animated line that draws as you scroll
- Each experience card slides in from alternating sides
- Hover effect: card lifts with a subtle shadow and the logo scales up
- Add a "current" pulse indicator on active roles

## 4. Projects -- Full-width hover expansion

- On hover, project cards expand slightly and the image gets a subtle parallax shift
- Add a cursor-following "VIEW" label that appears on project hover
- Staggered grid entrance animation
- Glitch/distortion effect on project images on hover (CSS filter)

## 5. Skills -- Interactive grid with hover glow

- Replace plain list with a masonry-style grid of skill chips
- Each chip has a border that glows/pulses on hover
- Add skill proficiency indicators (subtle animated bars)
- The marquee gets a gradient fade on edges for polish

## 6. Education -- Animated counter for GPA

- GPA number counts up from 0.00 to 3.85 when scrolled into view
- Add subtle floating particles or dots around the crescent SVG
- Cards get a glass-morphism hover effect

## 7. Contact -- Magnetic link cards + typing effect

- "LET'S CONNECT" heading gets a typewriter/reveal effect
- Contact cards have magnetic hover (tilt toward cursor)
- Add an animated gradient border on hover

## 8. Global polish

- Custom cursor (circle + dot) that reacts to hoverable elements
- Noise texture overlay across the entire site (very subtle)
- Page load sequence: black screen → content reveals with a wipe
- Smooth locomotive-style scroll (CSS scroll-behavior is already there, enhance with framer-motion scroll)
- Add `cursor: none` on desktop with custom cursor component

## Technical approach

- **New components**: `CustomCursor.tsx`, `ScrollProgress.tsx`, `StickyNav.tsx`, `NoiseOverlay.tsx`, `AnimatedCounter.tsx`
- **CSS additions**: Noise texture, gradient fades for marquee, glass-morphism utilities, magnetic hover utilities
- **Framer Motion**: `useScroll`, `useTransform`, `useSpring` for parallax and scroll-linked animations
- **No new dependencies needed** -- everything uses framer-motion (already installed) and CSS

## Files to modify/create

| File | Action |
|------|--------|
| `src/components/CustomCursor.tsx` | Create -- custom cursor with magnetic effect |
| `src/components/ScrollProgress.tsx` | Create -- thin scroll progress bar |
| `src/components/StickyNav.tsx` | Create -- sticky nav appearing after hero |
| `src/components/NoiseOverlay.tsx` | Create -- subtle grain texture |
| `src/components/AnimatedCounter.tsx` | Create -- count-up animation util |
| `src/components/Hero.tsx` | Staggered letter animation, magnetic socials |
| `src/components/Experience.tsx` | Animated timeline line, alternating cards, pulse indicator |
| `src/components/Projects.tsx` | Parallax image hover, glitch effect, hover label |
| `src/components/Skills.tsx` | Chip grid layout, glow hover, marquee fade edges |
| `src/components/Education.tsx` | Animated GPA counter, floating particles |
| `src/components/Contact.tsx` | Typewriter heading, tilt cards |
| `src/pages/Index.tsx` | Add CustomCursor, ScrollProgress, NoiseOverlay, StickyNav |
| `src/index.css` | Noise texture, gradient masks, glass-morphism, custom cursor styles |

