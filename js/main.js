/* =============================================
   KEVIN MOYE - PORTFOLIO SCRIPTS (V2 Polished)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initNavScroll();
    initHeroParallax();
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
    const heroWrap = document.querySelector('.hero-wrap');
    if (!nav) return;

    function updateNav() {
        const parallaxHeight = heroWrap ? heroWrap.offsetHeight : 0;
        const overDarkHero = heroWrap && window.scrollY < parallaxHeight - 50;
        if (overDarkHero) {
            nav.classList.add('nav-over-hero');
            nav.style.background = 'transparent';
        } else {
            nav.classList.remove('nav-over-hero');
            nav.style.background = window.scrollY > 30 ? 'rgba(250, 250, 249, 0.96)' : 'transparent';
        }
    }

    window.addEventListener('scroll', () => updateNav(), { passive: true });
    updateNav();
}

/* --- Homepage: vertical parallax (scroll-through sections, no JS needed) --- */
function initHeroParallax() {
    /* Vertical scroll-through is handled by CSS (parallax-scroll-section + background-attachment: fixed) */
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
