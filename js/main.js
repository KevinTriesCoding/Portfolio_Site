/* =============================================
   KEVIN MOYE - PORTFOLIO SCRIPTS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initNavScroll();
    initScrollAnimations();
    initParallax();
    initTiltCards();
    initSmoothScroll();
});

/* =============================================
   PAGE LOADER
   ============================================= */
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    // Minimum display time for the loader animation to complete
    const minLoadTime = 2600; // matches CSS animation timing
    const startTime = Date.now();

    window.addEventListener('load', () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadTime - elapsed);

        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
            
            // Remove loader from DOM after transition
            setTimeout(() => {
                loader.remove();
            }, 600);
        }, remaining);
    });
}

/* =============================================
   NAVIGATION SCROLL EFFECT
   ============================================= */
function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

/* =============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================= */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-left, .fade-in-right, .stagger-children'
    );

    animatedElements.forEach(el => observer.observe(el));
}

/* =============================================
   PARALLAX EFFECTS
   ============================================= */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    // Also handle floating shapes
    const floatingShapes = document.querySelectorAll('.floating-shape');
    const bgShapes = document.querySelectorAll('.about-bg-shape, .process-bg-circle');

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;

                // Parallax elements with data attribute
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.dataset.parallax) || 0.5;
                    const rect = el.getBoundingClientRect();
                    const centerY = rect.top + rect.height / 2;
                    const offset = (window.innerHeight / 2 - centerY) * speed;
                    
                    el.style.transform = `translateY(${offset}px)`;
                });

                // Floating shapes in hero
                floatingShapes.forEach((shape, index) => {
                    const speed = 0.1 + (index * 0.05);
                    const yOffset = scrolled * speed;
                    const baseTransform = shape.classList.contains('shape-1') 
                        ? 'translateY' : 'translateY';
                    shape.style.transform = `${baseTransform}(${-yOffset}px)`;
                });

                // Background shapes
                bgShapes.forEach((shape, index) => {
                    const rect = shape.parentElement.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const speed = 0.08 + (index * 0.03);
                        const offset = (window.innerHeight - rect.top) * speed;
                        shape.style.transform = `translateY(${-offset}px)`;
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* =============================================
   TILT CARD EFFECT
   ============================================= */
function initTiltCards() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    if (!tiltCards.length) return;

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
                translateZ(10px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `
                perspective(1000px) 
                rotateX(0deg) 
                rotateY(0deg)
                translateZ(0)
            `;
        });
    });
}

/* =============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* =============================================
   VIDEO PLAYER (for future implementation)
   ============================================= */
function initVideoPlayer() {
    const playButtons = document.querySelectorAll('.video-placeholder-icon');
    
    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const container = btn.closest('.video-container');
            const placeholder = container.querySelector('.video-placeholder');
            const videoUrl = container.dataset.videoUrl;
            
            if (videoUrl) {
                // Create iframe for embedded video
                const iframe = document.createElement('iframe');
                iframe.src = videoUrl;
                iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                
                placeholder.style.display = 'none';
                container.appendChild(iframe);
            }
        });
    });
}

/* =============================================
   MAGNETIC BUTTONS (Bonus effect)
   ============================================= */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-magnetic');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

/* =============================================
   COUNTER ANIMATION (for stats)
   ============================================= */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

/* =============================================
   PAGE TRANSITION (for multi-page navigation)
   ============================================= */
function initPageTransitions() {
    // Add transition overlay to body if not exists
    if (!document.querySelector('.page-transition')) {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition';
        overlay.innerHTML = `
            <div class="loader-initials">
                <span>K</span>
                <span>M</span>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    // Intercept internal links
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        
        // Only handle internal HTML links
        if (href && 
            href.endsWith('.html') && 
            !href.startsWith('http') && 
            !href.startsWith('mailto:')) {
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const transition = document.querySelector('.page-transition');
                transition.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 600);
            });
        }
    });
}

// Initialize page transitions after DOM load
document.addEventListener('DOMContentLoaded', initPageTransitions);
