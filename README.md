# AFCE — Beyond Actions

Research project website for **Beyond Actions: Learning Future Operation Targets for Vision-Language-Action Models**.

Static site (HTML / CSS / JS), with no build step. Includes a selectable rollout viewer, original research figures and PDFs, interactive DexJoCo results, and an image lightbox. Paper and arXiv links remain forthcoming.

## Structure

```
AFCE-Web/
├── index.html      # Paper title, rollout viewer, overview, method, results
├── style.css       # Typography, layout, responsive styles
├── app.js          # Rollout selection/playback, charts, task table, lightbox
├── assets/         # Original figures, PDFs, videos, and self-hosted fonts
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

Only the selected rollout plays. Videos pause when the viewer is off screen or the tab is hidden; reduced-motion preferences disable automatic playback. Native video controls remain available.

## Typography

Source Serif 4 and IBM Plex Sans are self-hosted in `assets/fonts/`. Their SIL Open Font License files are included in the same directory. The site does not require a font CDN.

## Links

- Code: [AFCEProject/AFCE](https://github.com/AFCEProject/AFCE)
- Paper / arXiv: still forthcoming on the page

When ready, put an anonymized or camera-ready `assets/paper.pdf` back and wire Paper / arXiv buttons. Do not put author names, affiliations, or emails on the page until the project is ready to deanonymize.
