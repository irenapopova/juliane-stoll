# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

npm install -g netlify-cli
netlify login
netlify deploy --prod
```bash
git add -A
git commit -m "Update site"
git push origin main
```

npm run build

npm run build
npm run preview
Deploy (if you use Netlify CLI)

npx netlify deploy --prod --dir=dist

Clear local DNS cache

sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

Speed / Performance (lab + waterfall)

WebPageTest — deep waterfall + filmstrip/video and global test locations for detailed load diagnostics. (catchpoint.com)
GTmetrix — runs Lighthouse metrics and Web Vitals, includes a waterfall and location/device options. (gtmetrix.com)
SEO / Indexing

Google Search Console – URL Inspection — checks index status for a specific URL in Google’s index. (developers.google.com)
Bing Webmaster Tools – URL Inspection — shows index details plus SEO diagnostics and markup checks. (blogs.bing.com)
Bing Webmaster Tools – Site Explorer — gives a broader view of indexed/known URLs and health signals. (blogs.bing.com)