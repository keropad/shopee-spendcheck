
(function() {
    function formatCurrency(amount) {
        return '₱' + amount.toLocaleString('en-PH', { minimumFractionDigits: 2 });
    }

    function extractTotalSpent() {
        const amountElements = Array.from(document.querySelectorAll('[aria-label^="Order Total: ₱"]'));
        console.log('[ShopeeSpendCheck] Found aria-label matches:', amountElements.length);

        let total = 0;

        amountElements.forEach(el => {
            const label = el.getAttribute('aria-label');
            const match = label.match(/₱\s?([\d,]+(?:\.\d{2})?)/);
            if (match) {
                const numeric = parseFloat(match[1].replace(/,/g, ''));
                if (!isNaN(numeric)) total += numeric;
            }
        });

        console.log('[ShopeeSpendCheck] Total from aria-labels:', total);
        return formatCurrency(total);
    }

    function updateTotal() {
        const box = document.querySelector('#spendCheckBox');
        if (!box) return;
        const totalText = box.querySelector('#spendTotal');
        if (totalText) {
            totalText.textContent = 'Shopee Total Spent: ' + extractTotalSpent();
        }
    }

    function createBox() {
        const box = document.createElement('div');
        box.id = 'spendCheckBox';

        Object.assign(box.style, {
            position: 'fixed',
            top: '20px',
            left: '20px',
            background: 'yellow',
            color: '#000',
            padding: '15px 20px',
            borderRadius: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            zIndex: 999999,
            border: '4px solid red',
            cursor: 'move'
        });

        const closeButton = document.createElement('span');
        closeButton.textContent = '×';
        Object.assign(closeButton.style, {
            marginLeft: '15px',
            cursor: 'pointer',
            fontWeight: 'bold',
            float: 'right',
            fontSize: '20px'
        });
        closeButton.onclick = () => box.remove();

        const totalText = document.createElement('div');
        totalText.id = 'spendTotal';
        totalText.textContent = 'Shopee Total Spent: ' + extractTotalSpent();

        box.appendChild(closeButton);
        box.appendChild(totalText);
        document.body.appendChild(box);
    }

    function setupAutoRefresh() {
        window.addEventListener('scroll', () => {
            setTimeout(updateTotal, 1000); // debounce
        });

        setInterval(updateTotal, 5000); // background refresh just in case
    }

    function tryUntilFound(retries = 10) {
        let attempts = 0;
        const interval = setInterval(() => {
            const found = document.querySelectorAll('[aria-label^="Order Total: ₱"]').length;
            if (found > 0 || attempts >= retries) {
                clearInterval(interval);
                createBox();
                setupAutoRefresh();
            }
            attempts++;
        }, 1000);
    }

    window.addEventListener('load', () => {
        tryUntilFound();
    });
})();
