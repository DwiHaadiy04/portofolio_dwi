# Fix Vercel Deployment (Base Path Issue)

## Plan Breakdown:
- [x] 1. Edit vite.config.js → set base: '/portofolio/'
- [x] 2. Run `npm run build` → regenerate dist/ with correct paths
- [x] 3. Test `npm run preview` (http://localhost:4173/portofolio/ ✅ running)
- [ ] 4. `git add/commit/push` → Vercel redeploy
- [ ] 5. Verify site live
