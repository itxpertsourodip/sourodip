document.addEventListener('DOMContentLoaded', function() {
    
    // ১. SPIDER WEB PARTICLES CONFIGURATION
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80, // কতগুলো বিন্দু থাকবে
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#00f2ea" }, // বিন্দুর কালার (Cyan)
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.5,
                    "random": true
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": { // এই অংশটি স্পাইডার নেট এফেক্ট তৈরি করে
                    "enable": true,
                    "distance": 150,
                    "color": "#00f2ea",
                    "opacity": 0.2, // লাইনের স্বচ্ছতা
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, // চলার গতি
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }, // মাউস নিলেও লাইন কানেক্ট হবে
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    // ২. TYPING TEXT ANIMATION (প্রফেশনাল টেক্সট)
    const typingText = document.querySelector(".typing-text");

    if (typingText) {
        const textArray = [
            "Seamless IT Solutions.", 
            "Secure Networking.", 
            "Creative Branding.", 
            "Digital Excellence."
        ];
        let arrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentString = textArray[arrayIndex];
            
            if (isDeleting) {
                typingText.textContent = currentString.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentString.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentString.length) {
                isDeleting = true;
                typeSpeed = 2000; 
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                arrayIndex++;
                if (arrayIndex >= textArray.length) arrayIndex = 0;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // ৩. MOBILE MENU TOGGLE
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // আইকন এনিমেশন (যদি থাকে)
            menuToggle.classList.toggle('active'); 
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
});
