# Kahyrah Marketing Website

Standalone public marketing website for Kahyrah and its flagship Council Revenue Platform.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The deployable static output is generated in `dist/`.

## Deployment

The project includes SPA routing fallbacks for Vercel (`vercel.json`) and Netlify-compatible static hosts (`public/_redirects`). Point `www.kahyrah.com` to the chosen host after deployment.

The contact form is intentionally static for V1 and prepares an email to `pilots@kahyrah.com` in the visitor's email client.
