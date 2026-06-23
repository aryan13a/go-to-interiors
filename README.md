# Go to Interiors — Editorial Interior Design Portfolio

A single-page, responsive, and editorial portfolio website built for **Go to Interiors**, a high-end interior architecture and bespoke window treatment studio based in Jaipur, Rajasthan.

## Project Structure

```text
go-to-interiors/
├── index.html     # HTML structure and semantic markup
├── styles.css     # Responsive layouts, editorial typography, and transitions
├── app.js         # Navigation, project detail modal, testimonials slider, and scroll animations
├── images/        # Local high-quality project showcase and brand assets
└── README.md      # Project documentation
```

## Setup & Running Instructions

### Option 1: Direct File Launch
Double-click `index.html` to open it in your browser. Since the project uses vanilla HTML, CSS, and JS, no compilation or bundlers are required.

### Option 2: Live Local Server
Run a local development server in the root of the project directory:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx live-server
```

Then visit [http://localhost:8000](http://localhost:8000) in your web browser.

---

## Design Details

- **Color Palette:** Off-white (`#F7F5F0`), deep charcoal (`#1C1C1A`), warm bronze/copper (`#B07D5B`), and muted sage (`#8A9B8A`).
- **Typography:** Classical serif (*Cormorant Garamond*) for headlines; clean geometric sans-serif (*Jost*) for body.
- **Asymmetric Grid:** A visually interesting asymmetrical layout for project cards on desktop, adding a luxury print magazine aesthetic.
- **Micro-interactions:** Smooth scroll offsets, scroll-triggered fade-ins, sliding project details in modal overlays, and sticky navigation that switches styling on scroll down.
- **Google Reviews Badge:** Editorial-styled proof displaying their 4.9 rating and 34 reviews.
