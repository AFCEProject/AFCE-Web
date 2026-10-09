# AFCE — Beyond Actions

Research project website for **Beyond Actions: Learning Future Operation Targets for Vision-Language-Action Models**.

Static site (HTML / CSS / JS). No build step. Figures, original PDFs, paper PDF, interactive DexJoCo summaries, image lightbox, and video placeholders.

## Structure

```
AFCE-Web/
├── index.html      # Page sections: hero, idea, method, results, demos
├── style.css       # Layout, typography, responsive styles
├── app.js          # Chart tabs, task table, lightbox
├── assets/         # Paper PDF, figure PNGs and source PDFs
├── .nojekyll       # Serve files as-is on GitHub Pages
└── README.md
```

## Local preview

```bash
python -m http.server 8000
```

Open http://localhost:8000.

## GitHub Pages

1. **Settings → Pages**
2. Deploy from branch `main`, folder `/ (root)`
3. Keep `.nojekyll` at the repository root

Asset paths are relative, so the site also works under a repository subpath.

## Add videos

Put MP4 files in `assets/videos/`. Replace a `.video-empty` block in `index.html` with:

```html
<video controls muted playsinline preload="metadata" style="width:100%;border-radius:8px">
  <source src="assets/videos/microwave.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>
```

## Add paper / code / arXiv links

When ready for public release, put an anonymized or camera-ready `assets/paper.pdf` back, then replace the disabled buttons in `.actions` and the header “Paper forthcoming” control:

```html
<a class="button primary" href="assets/paper.pdf" target="_blank" rel="noopener">Paper <span>PDF</span></a>
<a class="button" href="YOUR_REPOSITORY_URL" target="_blank" rel="noopener">Code</a>
<a class="button" href="YOUR_ARXIV_URL" target="_blank" rel="noopener">arXiv</a>
```

Do not put author names, affiliations, or emails on the page until the project is ready to deanonymize. Update values and notes in `app.js` if reported results change.
