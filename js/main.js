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
        const overDarkHero = heroWrap && window.scrollY < window.innerHeight * 0.75;
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

/* --- Homepage Hero: Multi-Layer Parallax --- */
function initHeroParallax() {
    const container = document.querySelector('.hero-parallax');
    const layers = document.querySelectorAll('.parallax-layer');
    if (!container || !layers.length) return;

    let ticking = false;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    function updateParallax() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseFactor = 0.02;

        layers.forEach((layer) => {
            const speed = parseFloat(layer.dataset.speed) || 0.2;
            const scrollOffset = scrollY * speed * 0.5;
            const mouseOffsetX = (mouseX - centerX) * mouseFactor * (speed * 20);
            const mouseOffsetY = (mouseY - centerY) * mouseFactor * (speed * 20);

            layer.style.transform = `translate3d(${mouseOffsetX}px, ${scrollOffset + mouseOffsetY}px, 0)`;
        });
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateParallax);
        }
    }

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        requestTick();
    }, { passive: true });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        requestTick();
    }, { passive: true });

    updateParallax();
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
