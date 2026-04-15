# Fix Vercel Deployment (Base Path Issue)

## Plan Breakdown:
- [x] 1. Edit vite.config.js → base: '/' (root untuk Vercel baru portofolio-dwi-nu.vercel.app)
- [x] 2. Run `npm run build` → regenerate dist/ with root paths (base '/')
- [x] 3. Test `npm run preview` (http://localhost:4173/portofolio/ ✅ running)
- [ ] 4. `git add/commit/push` → Vercel redeploy
- [ ] 5. Verify site live
