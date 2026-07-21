# ShippingAndLogistics.co.uk

Freight comparison website — compare quotes across shipping and logistics providers for UK and international freight.

## Project structure

```
shippingandlogistics/
├── index.html          # Landing page
├── README.md           # This file
├── assets/
│   ├── css/            # Stylesheets (currently inlined in index.html)
│   ├── js/             # Scripts
│   └── images/         # Image assets
├── blog/               # SEO articles (future)
└── docs/               # Business plan notes
```

## Local development

The landing page is a single self-contained `index.html` (styles and scripts are currently inlined). To preview it locally:

```bash
# Open directly
open index.html

# or serve with a simple HTTP server
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Roadmap

- [ ] Extract inlined CSS/JS into `assets/` as the site grows
- [ ] Build out the freight quote comparison flow
- [ ] Publish SEO articles under `blog/`
- [ ] Set up custom domain (shippingandlogistics.co.uk) and hosting

## License

Proprietary — all rights reserved.
