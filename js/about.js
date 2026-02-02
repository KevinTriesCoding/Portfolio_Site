/* =============================================
   ABOUT PAGE — Hover quote tooltip & code snippet
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    initQuoteTooltip();
    initCodeSnippet();
});

function initQuoteTooltip() {
    const trigger = document.querySelector('.hover-quote');
    const tooltip = document.getElementById('quote-tooltip');
    if (!trigger || !tooltip) return;

    function showTooltip() {
        const quote = trigger.getAttribute('data-quote');
        if (!quote) return;
        tooltip.textContent = quote;
        tooltip.setAttribute('aria-hidden', 'false');
        positionTooltip();
    }

    function hideTooltip() {
        tooltip.setAttribute('aria-hidden', 'true');
    }

    function positionTooltip() {
        const rect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const padding = 8;
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - padding;
        if (left < padding) left = padding;
        if (left + tooltipRect.width > window.innerWidth - padding) left = window.innerWidth - tooltipRect.width - padding;
        if (top < padding) top = rect.bottom + padding;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
    trigger.addEventListener('focus', showTooltip);
    trigger.addEventListener('blur', hideTooltip);
}

function initCodeSnippet() {
    const trigger = document.querySelector('.code-snippet-trigger');
    const popover = document.getElementById('code-snippet-popover');
    const codeEl = document.getElementById('code-snippet-content');
    if (!trigger || !popover || !codeEl) return;

    const rawCode = trigger.getAttribute('data-code') || '';
    const code = rawCode
        .replace(/&quot;/g, '"')
        .replace(/&#10;/g, '\n')
        .replace(/&gt;/g, '>');

    function showPopover() {
        codeEl.textContent = code;
        popover.setAttribute('aria-hidden', 'false');
        requestAnimationFrame(() => {
            positionPopover();
        });
    }

    function hidePopover() {
        popover.setAttribute('aria-hidden', 'true');
        codeEl.textContent = '';
    }

    function positionPopover() {
        const rect = trigger.getBoundingClientRect();
        const popoverRect = popover.getBoundingClientRect();
        const padding = 8;
        let left = rect.left;
        let top = rect.top - popoverRect.height - padding;
        if (left + popoverRect.width > window.innerWidth - padding) left = window.innerWidth - popoverRect.width - padding;
        if (left < padding) left = padding;
        if (top < padding) top = rect.bottom + padding;
        popover.style.left = left + 'px';
        popover.style.top = top + 'px';
    }

    trigger.addEventListener('mouseenter', showPopover);
    trigger.addEventListener('mouseleave', hidePopover);
    trigger.addEventListener('focus', showPopover);
    trigger.addEventListener('blur', hidePopover);
}
