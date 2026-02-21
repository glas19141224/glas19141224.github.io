document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for section reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    // Handle mouse movement for subtle depth (optional)
    document.addEventListener('mousemove', (e) => {
        const title = document.querySelector('.hero-title');
        if (title) {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            title.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    console.log('AI Information Site Initialized: Typography Focus');
});
