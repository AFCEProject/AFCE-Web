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

## Demo videos

MP4 rollouts live in `assets/videos/`:

- `microwave.mp4`
- `photograph.mp4`
- `hammer-nail.mp4`

## Links

- Code: [AFCEProject/AFCE](https://github.com/AFCEProject/AFCE)
- Paper / arXiv: still forthcoming on the page

When ready, put an anonymized or camera-ready `assets/paper.pdf` back and wire Paper / arXiv buttons. Do not put author names, affiliations, or emails on the page until the project is ready to deanonymize.
