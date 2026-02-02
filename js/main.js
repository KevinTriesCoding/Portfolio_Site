/* =============================================
   KEVIN MOYE - PORTFOLIO SCRIPTS (V2 Polished)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initNavScroll();
    initScrollAnimations();
    initSmoothScroll();
});

/* --- Clean Page Loader --- */
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    function hideLoader() {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        setTimeout(() => loader.remove(), 600);
    }

    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 400);
    } else {
        window.addEventListener('load', () => setTimeout(hideLoader, 400));
    }
}

/* --- Navigation Border Reveal --- */
function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(250, 248, 245, 0.98)';
        } else {
            nav.style.background = 'rgba(250, 248, 245, 0.92)';
        }
    }, { passive: true });
}

/* --- Intersection Observer (Fade Ins) --- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger-children').forEach(el => observer.observe(el));
}

/* --- Smooth Anchor Scroll --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
