# AAA Duplication - Vercel Deployment Guide

This website is **100% ready for Vercel deployment**. Follow these simple steps to deploy your website.

## 🚀 Quick Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Create/Login to Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or login with GitHub, GitLab, or Bitbucket

2. **Push Code to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AAA Duplication website"
   git remote add origin https://github.com/yourusername/aaa-duplication.git
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "New Project" in Vercel dashboard
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

4. **Configure & Deploy**
   - Project Name: `aaa-duplication`
   - Framework Preset: Select "Other" (Static Site)
   - Root Directory: `./` (leave as default)
   - Build Command: Leave empty (no build needed)
   - Output Directory: Leave empty (root directory)
   - Click "Deploy"

5. **Wait for Deployment**
   - Vercel will deploy your site in ~30-60 seconds
   - You'll get a URL like: `https://aaa-duplication.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /path/to/aaa-duplication
   vercel
   ```

4. **Follow Prompts**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: aaa-duplication
   - Directory: ./ (press Enter)
   - Want to override settings: No

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## 🌐 Custom Domain Setup

After deployment, add your custom domain:

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., `aaaduplication.com`)

2. **Update DNS Records**
   - Add CNAME record pointing to Vercel
   - Follow Vercel's DNS instructions
   - Wait for DNS propagation (5-60 minutes)

3. **Update URLs in Code**
   - Replace `https://aaaduplication.com` in:
     - `index.html` (canonical URL, schema markup)
     - `services.html` (canonical URL)
     - `pricing.html` (canonical URL)
     - `locations.html` (canonical URL)
     - `contact.html` (canonical URL)
     - `sitemap.xml` (all URLs)
     - `robots.txt` (sitemap URL)

## ✅ Pre-Deployment Checklist

The website includes everything needed for Vercel:

- ✅ `index.html` - Home page (entry point)
- ✅ All HTML pages properly linked
- ✅ `css/style.css` - Stylesheet
- ✅ `js/main.js` - JavaScript functionality
- ✅ `images/` - All images (5 files)
- ✅ `sitemap.xml` - SEO sitemap
- ✅ `robots.txt` - Search engine instructions
- ✅ `vercel.json` - Vercel configuration
- ✅ `.gitignore` - Git ignore rules
- ✅ `README.md` - Documentation
- ✅ No build process required (static site)
- ✅ No dependencies to install
- ✅ SEO fully optimized
- ✅ Mobile responsive
- ✅ All links functional

## 🔧 Vercel Configuration

The included `vercel.json` provides:

- **Security Headers**: XSS protection, content sniffing prevention
- **Caching**: Optimized cache headers for static assets
- **Clean URLs**: Removes .html extensions automatically
- **Redirects**: Handles common URL variations

## 📊 Post-Deployment Tasks

After your site is live:

### 1. Update Contact Information (if needed)
If you need to change addresses or contact details:
- Edit the HTML files
- Commit changes to Git
- Push to repository
- Vercel will auto-deploy updates

### 2. SEO Setup
- **Google Search Console**:
  - Add property: Your Vercel URL or custom domain
  - Verify ownership
  - Submit sitemap: `https://yourdomain.com/sitemap.xml`

- **Google My Business**:
  - Create listings for Sydney, Melbourne, Brisbane locations
  - Use exact addresses from website
  - Add photos and business hours

- **Bing Webmaster Tools**:
  - Add site
  - Submit sitemap

### 3. Analytics Setup
Add Google Analytics to track visitors:

```html
<!-- Add before closing </head> tag in all HTML files -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Email Configuration
The contact email (aaaduplication@gmail.com) should be set up and monitored for enquiries.

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to your repository:

```bash
# Make changes to files
git add .
git commit -m "Update content"
git push origin main
# Vercel auto-deploys in ~30 seconds
```

## 🌟 Expected Performance

Once deployed, expect:

- **Load Time**: < 2 seconds (first visit)
- **Performance Score**: 90+ (Lighthouse)
- **SEO Score**: 100 (Lighthouse)
- **Accessibility**: 95+ (Lighthouse)
- **Global CDN**: Fast loading worldwide
- **SSL Certificate**: Automatic HTTPS
- **99.99% Uptime**: Vercel reliability

## 📱 Testing Deployed Site

After deployment, test:

1. **All Pages Load**: index, services, pricing, locations, contact
2. **Mobile Responsive**: Test on phone, tablet
3. **Forms Work**: Contact information displays correctly
4. **Phone Links**: Click-to-call works on mobile
5. **Email Links**: Opens email client
6. **Images Load**: All 5 images display
7. **Navigation**: All menu items work
8. **External Link**: Footer link to nationalvideo.com.au works

## 🆘 Troubleshooting

**Issue**: Site not deploying
- **Solution**: Check Vercel build logs, ensure Git repository is connected

**Issue**: Images not loading
- **Solution**: Check image paths are relative (not absolute)

**Issue**: 404 errors on pages
- **Solution**: Ensure all HTML files are in root directory

**Issue**: Custom domain not working
- **Solution**: Check DNS propagation, verify CNAME record

## 📞 Support

For deployment issues:
- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

## 🎉 You're Ready!

Your AAA Duplication website is fully prepared for Vercel deployment. Just follow the steps above and your professional video digitisation website will be live in minutes!

**Estimated Deployment Time**: 2-5 minutes
**Cost**: Free (Vercel hobby plan supports this static site perfectly)
