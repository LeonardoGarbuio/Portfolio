// ===== MAIN JAVASCRIPT FILE =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===== LOADING SCREEN =====
    const loadingScreen = document.getElementById('loadingScreen');

    // Hide loading screen after page loads
    window.addEventListener('load', function () {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // ===== NAVIGATION =====
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== AOS ANIMATION LIBRARY =====
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ===== PARTICLES.JS CONFIGURATION =====
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#FFD700'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#FFD700',
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // ===== TERMINAL TYPING ANIMATION =====
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        const terminalLines = terminalBody.querySelectorAll('.terminal-line');

        // Hide all lines initially
        terminalLines.forEach(line => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
        });

        // Animate lines one by one after loading screen
        setTimeout(() => {
            let delay = 0;
            terminalLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';

                    // Type effect for commands
                    const command = line.querySelector('.terminal-command');
                    const success = line.querySelector('.terminal-success');

                    if (command && command.textContent) {
                        const text = command.textContent;
                        command.textContent = '';
                        typeTerminalText(command, text, 70);
                    }

                    if (success && success.textContent) {
                        const text = success.textContent;
                        success.textContent = '';
                        typeTerminalText(success, text, 50);
                    }
                }, delay);

                delay += 600; // Delay between lines
            });
        }, 1800);
    }

    function typeTerminalText(element, text, speed) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }

    // ===== ANIMATED COUNTER FOR STATS =====
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const isPercentage = element.textContent.includes('%');
        const hasPlus = element.textContent.includes('+');

        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + (isPercentage ? '%' : '') + (hasPlus ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (isPercentage ? '%' : '') + (hasPlus ? '+' : '');
            }
        };

        updateCounter();
    };

    // Observe stats section for counter animation
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const text = stat.textContent;
                        const number = parseInt(text.replace(/\D/g, ''));
                        if (number) {
                            stat.textContent = '0';
                            animateCounter(stat, number, 1500);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // ===== SKILL BARS ANIMATION =====
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';

            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    };

    // Trigger skill bars animation when skills section is in view
    const skillsSection = document.querySelector('.skills');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Enviando mensagem...', 'info');

            // Simulate API call
            setTimeout(() => {
                showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                contactForm.reset();

                // Reset floating labels
                const labels = contactForm.querySelectorAll('label');
                labels.forEach(label => {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--text-secondary)';
                });
            }, 2000);
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===== FLOATING LABELS =====
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        const label = input.nextElementSibling;

        // Check if input has value on page load
        if (input.value) {
            label.style.top = '-0.5rem';
            label.style.fontSize = '0.8rem';
            label.style.color = 'var(--primary-color)';
        }

        input.addEventListener('focus', function () {
            label.style.top = '-0.5rem';
            label.style.fontSize = '0.8rem';
            label.style.color = 'var(--primary-color)';
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                label.style.top = '1rem';
                label.style.fontSize = '1rem';
                label.style.color = 'var(--text-secondary)';
            }
        });

        input.addEventListener('input', function () {
            if (this.value) {
                label.style.top = '-0.5rem';
                label.style.fontSize = '0.8rem';
                label.style.color = 'var(--primary-color)';
            } else {
                label.style.top = '1rem';
                label.style.fontSize = '1rem';
                label.style.color = 'var(--text-secondary)';
            }
        });
    });

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    function getNotificationIcon(type) {
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    function getNotificationColor(type) {
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        return colors[type] || colors.info;
    }

    // ===== PARALLAX EFFECT =====
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-card');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ===== TYPING EFFECT =====
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Apply typing effect to hero title
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';

        // Start typing effect after loading screen
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1500);
    }

    // ===== PROJECT CARDS HOVER EFFECT =====
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== SCROLL PROGRESS INDICATOR =====
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // ===== LAZY LOADING FOR IMAGES =====
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', function (e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }

        // Arrow keys for navigation
        if (e.key === 'ArrowUp' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function () {
        // Scroll-based animations and effects
    }, 16); // ~60fps

    window.addEventListener('scroll', debouncedScrollHandler);

    // ===== ACCESSIBILITY IMPROVEMENTS =====
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');

    focusableElements.forEach(element => {
        element.addEventListener('focus', function () {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function () {
            this.style.outline = 'none';
        });
    });

    // ===== CONSOLE GREETING =====
    console.log(`
    🚀 Bem-vindo ao portfólio de Leonardo Garbuio!
    
    👨‍💻 Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras
    
    📧 Contato: leonardogarbuiocavalheiro@gmail.com
    🌐 GitHub: https://github.com/LeonardoGarbuio
    
    💡 Dica: Pressione Ctrl + ↑ para voltar ao topo da página
    `);

});

// ===== UTILITY FUNCTIONS =====

// Smooth scroll to element
function smoothScrollTo(element, offset = 0) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado para a área de transferência!', 'success');
    }).catch(() => {
        showNotification('Erro ao copiar texto.', 'error');
    });
}

// ===== THEME TOGGLE (FUTURE FEATURE) =====
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    showNotification(`Tema alterado para ${newTheme === 'dark' ? 'escuro' : 'claro'}`, 'info');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

// Initialize theme
loadTheme(); 