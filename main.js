document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SPIDER WEB BACKGROUND (Updated for Premium Look)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f2ff" }, // Neon Cyan Color
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f2ff", // Web Lines
                    "opacity": 0.15,
                    "width": 1
                },
                "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }

    // 2. TYPING EFFECT (Hero Section)
    const typeTarget = document.querySelector('.typing-text');
    if(typeTarget) {
        const texts = ["IT Solutions", "Cyber Security", "Brand Identity"];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === texts.length) count = 0;
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            
            typeTarget.textContent = letter;
            
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); // Wait 2s
            } else {
                setTimeout(type, 100); // Typing speed
            }
        })();
    }

    // 3. MOBILE MENU
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Icon animation switch (Optional)
            const icon = menuIcon.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
