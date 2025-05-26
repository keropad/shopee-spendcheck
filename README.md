
# ShopeeSpendCheck (K Padilla)

Track how much you've spent on Shopee — without having to guess. This lightweight browser extension displays your total visible purchase amount directly on the page.

## Features

- Instantly shows your total Shopee spend
- Refreshes as you scroll (auto-updating)
- Bulletproof detection using `aria-label="Order Total"`
- Doesn't rely on fragile class names
- Floating, draggable UI
- Works in Chrome, Edge, Brave, and other Chromium-based browsers

## Installation

1.  [Download Extension ZIP](https://github.com/keropad/shopee-spendcheck/releases/download/v1.0/shopee-spendcheck-github.zip)
2.  Unzip to a folder of your choice.
3. Go to:
   - `chrome://extensions` (for Chrome)
   - `edge://extensions` (for Edge)
4. Toggle **Developer Mode**
5. Click **Load Unpacked**
6. Select the `shopee-spendcheck` folder you unzipped earlier.

That's it! Head to [shopee.ph/user/purchase](https://shopee.ph/user/purchase), scroll down your order history, and your total should show up.

## Direct Download

You can download the ready-to-use ZIP version here:  
 [Download Extension ZIP](https://github.com/keropad/shopee-spendcheck/releases/download/v1.0/shopee-spendcheck-github.zip)

## Notes

- Totals reflect only the orders currently loaded in the DOM.
- For accuracy, scroll all the way down in your order tab ("To Receive", "Completed", etc).
- Calculations are based on `aria-label` content like `Order Total: ₱xxx`, so it's resilient to class name changes.

## Future Features

- Export to CSV
- Copy to clipboard
- Monthly and seller-based breakdowns

## License

MIT
