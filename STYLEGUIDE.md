# Kerala Unani Wellness - Website Style Guide

## Brand Direction
- Tone: luxury wellness, trustworthy, calm, premium clinical.
- Voice: clear, compassionate, confident, non-technical.

## Typography
- Heading font: `Playfair Display`
- Body/UI font: `Source Sans 3`
- Use heading hierarchy consistently: one `h1` per page, then `h2` sections, then `h3` cards.

## Core Colors
- Primary brown: `#5B241C` (`--maroon`)
- Primary hover: `#7A3328` (`--maroon-light`)
- Accent gold: `#BC8E4E` (`--gold`)
- Accent gold light: `#D6AA68` (`--gold-light`)
- Background warm: `#FBF8F3` (`--cream`)
- Body text: `#4C3D34` (`--text-body`)

## Buttons and CTAs
- Primary CTA label standard: `Book Consultation`
- Secondary WhatsApp label standard: `WhatsApp Chat`
- Use pill shape buttons (already in `shared.css`).
- Primary CTA action should appear in hero and end-of-page CTA.

## Section Rhythm
- Section spacing uses `--section-pad` from `shared.css`.
- Keep one short intro paragraph under each section heading.
- Avoid long uninterrupted text blocks; prefer cards or bullet groups.

## Cards and Components
- Keep rounded corners and soft shadows from shared styles.
- Prefer consistent card paddings and avoid inline style overrides unless necessary.
- FAQ pattern: accordion with single item open at a time.

## Imagery Rules
- Use real clinic/treatment photos where possible.
- Keep descriptive alt text with location/treatment context.
- Use lazy loading for non-hero images.

## Motion Rules
- Keep animations subtle and purposeful.
- Use short easing transitions only (buttons, nav underline, accordions, reveal).
- Avoid decorative/parallax effects that feel template-like.

## SEO Consistency
- Keep title/description focused on Gerrards Cross and service intent.
- Use schema where relevant (`MedicalClinic`, `FAQPage`, `VideoObject`).
# Kerala Unani Website Style Guide

## Brand Direction
- Tone: luxury wellness with clinical trust.
- Visual mood: calm, premium, warm, and clean.

## Color Tokens
- Primary brown: `#5B241C` (`--maroon`)
- Hover brown: `#7A3328` (`--maroon-light`)
- Accent gold: `#BC8E4E` (`--gold`)
- Light gold: `#D6AA68` (`--gold-light`)
- Off-white background: `#FBF8F3` (`--cream`)
- Main text: `#4C3D34` (`--text-body`)
- Strong heading text: `#211711` (`--text-dark`)

## Typography
- Headings: `Playfair Display`
- Body and UI text: `Source Sans 3`
- Keep italics off for all website copy.

## Spacing and Shapes
- Section spacing: `--section-pad` from `shared.css`.
- Card radius: 12-14px.
- Button radius: pill style (`999px`).

## Buttons and CTA Rules
- Primary action label: `Book Consultation`
- Secondary action label for WhatsApp: `WhatsApp Chat`
- Use one primary and one secondary button in CTA groups.

## Interaction Rules
- Subtle reveal animations only.
- Avoid heavy motion, parallax, or gimmicky effects.
- Use fast transitions (about 200-400ms).

## Consistency Checklist
- Keep navigation CTA text as `Book Consultation`.
- Keep footer, card shadows, and hero gradients consistent.
- Reuse `shared.css` classes before adding page-specific styles.
