# LateHour

A concept website for a fictional premium menswear atelier: an
editorial product showcase with enquiry-based contact (no cart,
checkout, accounts, or backend).

## Run it

```bash
npm install
npm run dev        # local development
npm run build      # production build to dist/
npm run preview    # serve the production build
npm run lint       # oxlint
```

## What the client replaces

Everything brand-specific is deliberately isolated:

| What | Where |
| --- | --- |
| Brand name, WhatsApp number, email, studio, hours, social links, price switch | `src/config/site.js` |
| Product catalogue (name, slug, description, materials, colours, sizes, fit, images) | `src/data/products.js` |
| Collections and category filters | `src/data/collections.js` |
| Product photography (studio supplied, 3:4 crops) | `public/images/products/` |
| Logo: navbar, footer, favicon, touch icon | `public/images/logo.png`, `public/images/logo-light.png`, `public/favicon.png` |
| Editorial and atelier photography | `public/images/` |
| Fonts | `public/fonts/` (SIL OFL files) |
| Image credits | `public/CREDITS.md` |

Contact fields in `src/config/site.js` start empty on purpose. The UI
shows honest "will be published here" states until real details exist,
and the enquiry form never claims a message was sent: it opens WhatsApp
with the message pre-filled when a number is configured, and otherwise
writes the enquiry out for the visitor to copy.

Setting `features.showPrices: true` in `src/config/site.js` and adding a
`price` to any product displays it; until then every piece shows
"Price on request".

## Routes

- `/` homepage with hero, selected pieces, both collection editorials, atelier intro, enquiry CTA
- `/collections` filterable grid (`?category=Linen` etc. deep-links a filter)
- `/products/:slug` gallery, details, size selection, product enquiry
- `/atelier` studio philosophy
- `/contact` enquiry form and contact details (`?piece=<slug>&size=<size>` prefills a product enquiry)

## Stack

React 19, Vite, Tailwind CSS v4, Motion for React, React Router,
Lucide icons, oxlint. All fonts self-hosted as woff2.
