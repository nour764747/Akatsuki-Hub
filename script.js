// ✦ Scroll Animation Observer ✦
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// ✦ Rank cards stagger animation ✦
const rankCards = document.querySelectorAll('.rank-card');
rankCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
});

// ✦ Floating particles (lightweight) ✦
function createParticle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 5 + 2}px;
        height: ${Math.random() * 5 + 2}px;
        background: rgba(201, 168, 76, ${Math.random() * 0.4 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        bottom: -10px;
        pointer-events: none;
        z-index: 1;
        animation: riseUp ${Math.random() * 6 + 6}s ease-in forwards;
    `;

    hero.appendChild(particle);
    setTimeout(() => particle.remove(), 12000);
}

// Add keyframe for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes riseUp {
        0%   { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-${window.innerHeight}px) scale(0.3); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Create particles every 1.5s
setInterval(createParticle, 1500);