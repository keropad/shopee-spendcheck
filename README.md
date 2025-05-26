
# ShopeeSpendCheck 🛍️💸

Track how much you've spent on Shopee — without having to guess. This lightweight browser extension displays your total visible purchase amount directly on the page.

## Features

- ✅ Instantly shows your total Shopee spend
- 🔁 Refreshes as you scroll (auto-updating)
- 🎯 Bulletproof detection using `aria-label="Order Total"`
- 🧠 Doesn't rely on fragile class names
- 🖱️ Floating, draggable UI
- 🌐 Works in Chrome, Edge, Brave, and other Chromium-based browsers

## Installation

1. Download or clone this repo.
2. Go to:
   - `chrome://extensions` (for Chrome)
   - `edge://extensions` (for Edge)
3. Toggle **Developer Mode**
4. Click **Load Unpacked**
5. Select the `shopee-spendcheck` folder

That's it! Head to [shopee.ph/user/purchase](https://shopee.ph/user/purchase), scroll down your order history, and your total should show up.

## Notes

- Totals reflect only the orders currently loaded in the DOM.
- For accuracy, scroll all the way down in your order tab ("To Receive", "Completed", etc).
- Calculations are based on `aria-label` content like `Order Total: ₱xxx`, so it's resilient to class name changes.

## Future Features

- 📥 Export to CSV
- 📋 Copy to clipboard
- 📊 Monthly and seller-based breakdowns

## License

MIT
