# Commercialization foundation — draft and test-only

This change adds a reusable **client-side helper**, not a subscription checkout. It does not affect the current DailyDesk landing page, prices, links or production environment.

- Four product IDs: chatsweep, ai-bridge, ai-daily-hub and dailydesk.
- Target *future* rates: ₹69/month and ₹499/year, stored in integer paise.
- Product-scoped, time-limited entitlement helper. **Client checks are UX hints, not security. Always enforce protected actions on the backend.**
- Node tests: `node --test commercialization/entitlements.test.mjs`.

## Integration blocked

ChatSweep, AI Bridge and AI Daily Hub repositories are not accessible through the connected GitHub account. This DailyDesk repository currently contains a public landing page, not the DailyDesk extension source.

**Existing live pricing requires review:** The current DailyDesk website advertises ₹49/month, a quarterly tier, and contains Razorpay links. It has intentionally NOT been changed pending merchant confirmation and extension/backend integration.

The standalone test-only Python backend, admin console and unpacked MV3 companion are separately provided as a downloadable ZIP in the sprint handoff. The repository currently contains only this tested helper to avoid exposing an incomplete checkout to public users. No merge or deployment is authorized.

This PR does not represent completion of product-specific integrations, live payments, publisher account verification or release QA.
