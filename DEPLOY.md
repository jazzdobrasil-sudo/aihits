# 🚀 Deployment Guide for aihits.online

## Quick Start - Deploy to Vercel in 5 Minutes

### Step 1: Prepare Your Files
All files are ready to deploy. The project structure is:
```
aihits-online/
├── index.html          (Homepage)
├── about.html          (About Art Found)
├── README.md           (Project documentation)
├── DEPLOY.md           (This file)
├── css/
│   └── style.css      (All styles)
├── js/
│   └── main.js        (All JavaScript)
└── images/
    ├── album-cover.jpeg        (Album artwork)
    ├── hero-banner.jpeg        (Hero background)
    ├── art-found.jpeg          (Curator profile)
    └── texture-bg.jpeg         (Background texture)
```

### Step 2: Deploy to Vercel

#### Method 1: Via Vercel Dashboard (Easiest)

1. **Create GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository named `aihits-online`
   - Keep it public or private (your choice)
   - Don't initialize with README (we already have one)

2. **Upload Files to GitHub**
   - Download all files from this project
   - Open terminal in the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Best of AI Music 2025"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aihits-online.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your `aihits-online` repository
   - Configure:
     - **Framework Preset**: Other
     - **Root Directory**: `./`
     - **Build Command**: (leave empty)
     - **Output Directory**: `./`
   - Click "Deploy"
   - Wait 30 seconds - Done! ✅

4. **Configure Custom Domain**
   - In Vercel project settings, go to "Domains"
   - Add domain: `aihits.online`
   - Follow DNS configuration:
     - Add A record: `76.76.21.21`
     - Or CNAME: `cname.vercel-dns.com`
   - Wait for DNS propagation (can take up to 48 hours, usually 15 minutes)

#### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Add domain
vercel domains add aihits.online
```

### Step 3: Post-Deployment Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] About page loads correctly
- [ ] All images display properly
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] All external links open correctly
- [ ] Bandcamp link works
- [ ] Facebook group link works
- [ ] HTTPS is active (Vercel does this automatically)

### Step 4: Domain Configuration for aihits.online

#### At Your Domain Registrar:

**Option A: Using A Records (Recommended)**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**Option B: Using CNAME**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

Then redirect `aihits.online` → `www.aihits.online`

## Alternative Deployment Options

### Option 2: Netlify

1. **Via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the entire project folder
   - Custom domain: Site settings → Domain management

2. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from branch `main`
4. Folder: `/ (root)`
5. Save
6. Custom domain: Add `aihits.online` in custom domain field
7. Add CNAME file with content: `aihits.online`

### Option 4: Cloudflare Pages

1. Connect GitHub repository
2. Build settings:
   - Build command: (none)
   - Build output directory: `/`
3. Deploy
4. Custom domain automatically configured if using Cloudflare DNS

## DNS Configuration Examples

### Cloudflare DNS
```
Type: A
Name: @
Content: 76.76.21.21 (Vercel's IP)
Proxy: Enabled (Orange cloud)
TTL: Auto
```

### Namecheap DNS
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

### GoDaddy DNS
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 Hour
```

## Troubleshooting

### Images Not Loading
- Check file paths in HTML (should be `images/filename.jpeg`)
- Verify all images are in the `images/` folder
- Check browser console for 404 errors

### Custom Domain Not Working
- Wait 15-30 minutes for DNS propagation
- Use [DNS Checker](https://dnschecker.org) to verify propagation
- Clear browser cache
- Try incognito/private browsing mode

### Mobile Menu Not Working
- Check that `js/main.js` is loaded
- Open browser console for JavaScript errors
- Verify Font Awesome icons are loading

### Styles Not Applying
- Clear browser cache
- Check `css/style.css` is in the correct location
- Verify the CSS link in HTML is correct
- Check browser console for CSS errors

## Performance Optimization

After deployment, you can improve performance:

1. **Enable Compression** (usually automatic on Vercel)
2. **Image Optimization**:
   ```bash
   # Convert to WebP for better compression
   cwebp -q 80 images/album-cover.jpeg -o images/album-cover.webp
   ```

3. **Add `vercel.json` for caching**:
   ```json
   {
     "headers": [
       {
         "source": "/images/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }
   ```

## Security Headers

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Analytics Setup

### Google Analytics
Add to `<head>` in both HTML files:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-Friendly)
```html
<script defer data-domain="aihits.online" src="https://plausible.io/js/script.js"></script>
```

## Monitoring Setup

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) - Free, checks every 5 minutes
- [Pingdom](https://pingdom.com) - More detailed monitoring
- [StatusCake](https://www.statuscake.com) - Free tier available

### Error Tracking
- [Sentry](https://sentry.io) - Real-time error tracking
- [LogRocket](https://logrocket.com) - Session replay

## SEO Post-Deployment

1. **Submit Sitemap**
   - Google Search Console: Add property → Submit sitemap.xml
   - Bing Webmaster Tools: Same process

2. **Verify Social Sharing**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Test Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

## Backup Strategy

### Automated Backups
```bash
# Daily backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
git clone https://github.com/YOUR_USERNAME/aihits-online.git backup-$DATE
zip -r aihits-online-backup-$DATE.zip backup-$DATE
rm -rf backup-$DATE
```

## Support

If you encounter issues:
1. Check the README.md for detailed documentation
2. Review Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
3. Check browser console for errors
4. Verify all files are uploaded correctly

---

**Estimated Deployment Time**: 5-10 minutes
**Domain Propagation Time**: 15 minutes - 48 hours
**Total Setup Time**: < 1 hour

🎵 **Good luck with your launch!** 🎵