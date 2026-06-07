document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animation
    const tl = gsap.timeline();

    tl.from("nav", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.5")
    .from(".hero-image-container", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8");

    // Scroll animations for sections
    const sections = gsap.utils.toArray('.section-animate');
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Timeline items animation
    const timelineItems = gsap.utils.toArray('.timeline-item');
    
    timelineItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1
        });
    });

    // Project cards individual animation
    const projectCards = gsap.utils.toArray('.glass-card.project-card');
    projectCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });
    });

    // Initialize Vanta.js Interactive WebGL Background
    if (typeof VANTA !== 'undefined') {
        VANTA.WAVES({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x01131a,       // Very dark cyan/blue base representing a sleek ocean/surface plot
            shininess: 60.00,      // High shine for premium feel
            waveHeight: 15.00,
            waveSpeed: 0.50,       // Slow and elegant
            zoom: 0.75
        });
    }
});
