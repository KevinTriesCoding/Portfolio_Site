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
    
    // Simpler, faster load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
            setTimeout(() => loader.remove(), 600);
        }, 800);
    });
}

/* --- Navigation Border Reveal --- */
function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(245, 244, 240, 0.95)';
        } else {
            nav.style.background = 'rgba(245, 244, 240, 0.85)';
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

    document.querySelectorAll('.fade-in, .stagger-children').forEach(el => observer.observe(el));
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
