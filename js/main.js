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
    if (!nav) return;

    function updateNav() {
        const ctaSection = document.querySelector('#contact');
        const darkEnd = ctaSection ? ctaSection.offsetTop - 50 : Infinity;
        const overDarkSection = window.scrollY < darkEnd;
        if (overDarkSection) {
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

/* --- Homepage hero: Abstract_bg4 & bg5 layers move on scroll (seamless, no borders) --- */
function initHeroParallax() {
    const layers = document.querySelectorAll('.hero-parallax-layer');
    if (!layers.length) return;

    let ticking = false;
    function update() {
        const scrollY = window.scrollY;
        layers.forEach((layer) => {
            const speed = parseFloat(layer.dataset.speed) || 0.15;
            const y = scrollY * speed * 0.35;
            layer.style.transform = `translate3d(0, ${y}px, 0)`;
        });
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    update();
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
