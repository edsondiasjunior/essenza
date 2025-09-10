 document.addEventListener('DOMContentLoaded', function() {
            // Verificar se Swiper está disponível
            if (typeof Swiper !== 'undefined') {
                initializeSwiper();
            } else {
                // Fallback sem Swiper
                document.querySelector('.swiper').classList.add('no-swiper');
                console.warn('Swiper não disponível, usando layout em grid');
            }
        });

        function initializeSwiper() {
            const swiper = new Swiper('.swiper', {
                slidesPerView: 1.2,
                spaceBetween: 25,
                centeredSlides: false,
                
                // Navegação
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // Teclado
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                
                // Acessibilidade
                a11y: {
                    enabled: true,
                    prevSlideMessage: 'Slide anterior',
                    nextSlideMessage: 'Próximo slide',
                    firstSlideMessage: 'Este é o primeiro slide',
                    lastSlideMessage: 'Este é o último slide',
                },
                
                // Breakpoints responsivos
                breakpoints: {
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 120,
                    },
                },
                
                // Eventos para acessibilidade
                on: {
                    slideChange: function () {
                        announceSlideChange(this.activeIndex + 1, this.slides.length);
                    },
                    reachBeginning: function () {
                        updateNavigationState(this);
                    },
                    reachEnd: function () {
                        updateNavigationState(this);
                    },
                }
            });

            // Melhorar navegação por teclado nos cards
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        // Simular hover para mostrar conteúdo
                        this.classList.toggle('keyboard-active');
                    }
                });

                card.addEventListener('focus', function() {
                    // Garantir que o slide esteja visível
                    swiper.slideTo(index);
                });
            });
        }

        function announceSlideChange(current, total) {
            const message = `Slide ${current} de ${total}`;
            announceToScreenReader(message);
        }

        function updateNavigationState(swiper) {
            const prevBtn = document.querySelector('.swiper-button-prev');
            const nextBtn = document.querySelector('.swiper-button-next');
            
            if (swiper.isBeginning) {
                prevBtn.setAttribute('aria-disabled', 'true');
            } else {
                prevBtn.removeAttribute('aria-disabled');
            }
            
            if (swiper.isEnd) {
                nextBtn.setAttribute('aria-disabled', 'true');
            } else {
                nextBtn.removeAttribute('aria-disabled');
            }
        }

        function announceToScreenReader(message) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }

        // CSS adicional para estado de teclado
        const style = document.createElement('style');
        style.textContent = `
            .card.keyboard-active .card_content {
                transform: translateY(0);
            }
            .card.keyboard-active .descriptio_card {
                opacity: 1;
                visibility: visible;
            }
        `;
        document.head.appendChild(style);