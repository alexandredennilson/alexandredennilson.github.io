document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classe de animação aos elementos
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-fade-in');
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black');
        } else {
            navbar.classList.remove('bg-black');
        }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 600; // 1 segundo
                let start = null;

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Função de easing para suavizar a animação
                    const ease = t => t<.5 ? 2*t*t : -1+(4-2*t)*t;
                    
                    window.scrollTo(0, startPosition + distance * ease(progress));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        });
    });

    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Mensagem enviada com sucesso!');
            form.reset();
        });
    }
}); 