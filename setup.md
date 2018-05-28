---
title: Setting up Zero
---

# Zero Setup

## Web

In `[zero]/web/package.json`, set

```json
"homepage": "http://example.com"
```

### GitHub Pages

This option is better than you think! You'll still need a server for the API.

In `[zero]/web`

```bash
npm run deploy
# Enter your GitHub credentials
```

### Server

#### Building

In `[zero]/web`

```bash
npm run build
```

A folder named `/build` will be generated. This folder contains the public site.

#### Serving

##### Node

```bash
# Install serve
npm install -g serve

# Serve site
serve -s ./build
```

##### Apache

```bash
cp -R ./build/. /var/www/html/
```

## API

This **must** use **SSL**. HTTPS is essential for security!

In `[zero]/api`

```bash
npm install
npm run start
```

This will run the API on port 9000.

If not configured manually, the frontend will assume the API is running in the
root directory on port 9000.
