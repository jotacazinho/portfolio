// ========================================
// SPORTLIFE PORTFOLIO - JAVASCRIPT
// Designer: jotacazinho
// ========================================

// ========================================
// NAVBAR SCROLL & MOBILE MENU
// ========================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// GLITCH EFFECT
// ========================================

function createGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let iterations = 0;
            const originalText = element.getAttribute('data-text');
            
            const interval = setInterval(() => {
                element.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return String.fromCharCode(33 + Math.random() * 94);
                    })
                    .join('');
                
                iterations += 1/3;
                
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    element.textContent = originalText;
                }
            }, 30);
        });
    });
}

createGlitchEffect();

// ========================================
// INTERSECTION OBSERVER
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateOnScroll = document.querySelectorAll(
    '.project-card, .tech-item, .contact-card, .about-image'
);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========================================
// TERMINAL TYPING EFFECT
// ========================================

function typeTerminalText() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        
        setTimeout(() => {
            line.style.transition = 'opacity 0.3s ease';
            line.style.opacity = '1';
        }, index * 400);
    });
}

// Run terminal animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeTerminalText, 500);
});

// ========================================
// PARALLAX FLOATING SHAPES
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translateY(${scrolled * speed * 0.1}px) rotate(${scrolled * 0.05}deg)`;
    });
});

// ========================================
// CURSOR EFFECT (NEON TRAIL)
// ========================================

const cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
    });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ========================================
// STATS COUNTER ANIMATION
// ========================================

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                
                // Skip if it's not a number
                if (text === '∞') return;
                
                const number = parseInt(text.replace('+', ''));
                const duration = 2000;
                const step = number / (duration / 16);
                let current = 0;
                
                const counter = setInterval(() => {
                    current += step;
                    if (current >= number) {
                        target.textContent = text;
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
                    }
                }, 16);
                
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

animateCounters();

// ========================================
// RANDOM TECH ITEM GLOW
// ========================================

function randomTechGlow() {
    const techItems = document.querySelectorAll('.tech-item');
    
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * techItems.length);
        const item = techItems[randomIndex];
        
        item.style.transition = 'all 0.3s ease';
        item.style.borderColor = 'var(--neon-cyan)';
        item.style.boxShadow = 'var(--glow-cyan)';
        
        setTimeout(() => {
            item.style.borderColor = 'var(--border-color)';
            item.style.boxShadow = 'none';
        }, 1000);
    }, 3000);
}

randomTechGlow();

// ========================================
// PREVENT DEFAULT ON EMPTY LINKS
// ========================================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log(
    '%c👋 E aí! Bem-vindo ao meu portfólio urban style!',
    'color: #00f0ff; font-size: 18px; font-weight: bold;'
);

console.log(
    '%c💻 Desenvolvido por Calebi José Batista (@jotacazinho)',
    'color: #ff006e; font-size: 14px; font-weight: bold;'
);

console.log(
    '%c🚀 Interessado em trabalhar juntos? Vamos fazer algo incrível!',
    'color: #00f0ff; font-size: 14px;'
);

console.log(
    '%c⚡ Stack: HTML5 • CSS3 • JavaScript • React • Node.js',
    'color: #666; font-size: 12px;'
);

// ========================================
// EASTER EGG - KONAMI CODE
// ========================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Create neon explosion effect
    const colors = ['#00f0ff', '#ff006e', '#ffbe0b', '#39ff14'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.borderRadius = '50%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.zIndex = '9999';
            particle.style.pointerEvents = 'none';
            
            document.body.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 5 + Math.random() * 10;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let x = window.innerWidth / 2;
            let y = window.innerHeight / 2;
            
            const animate = () => {
                x += vx;
                y += vy;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.opacity = parseFloat(particle.style.opacity || 1) - 0.02;
                
                if (parseFloat(particle.style.opacity) > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            animate();
        }, i * 20);
    }
    
    console.log(
        '%c🎮 KONAMI CODE ATIVADO! 🎮',
        'color: #00f0ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00f0ff;'
    );
    
    console.log(
        '%c✨ Você desbloqueou o easter egg urbano! ✨',
        'color: #ff006e; font-size: 16px; font-weight: bold;'
    );
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// REDUCE MOTION FOR ACCESSIBILITY
// ========================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ========================================
// DEBUG MODE (type 'debug' in console)
// ========================================

window.debug = () => {
    console.log('🔧 DEBUG MODE ATIVADO');
    console.log('Viewport:', window.innerWidth + 'x' + window.innerHeight);
    console.log('Scroll Position:', window.scrollY);
    console.log('Active Section:', document.querySelector('.nav-link.active')?.textContent);
    console.log('Device:', /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop');
};

console.log('%cDigite "debug()" no console para ver informações de debug', 'color: #666; font-style: italic;');