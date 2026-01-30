document.addEventListener('DOMContentLoaded', function() {
    
    // ১. মোবাইল মেনু টগল (Mobile Menu Toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // মেনু খোলা থাকলে বডি স্ক্রল বন্ধ রাখবে
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // লিংকে ক্লিক করলে মেনু অটোমেটিক বন্ধ হবে
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ২. টাইপিং টেক্সট অ্যানিমেশন (Typing Text Animation)
    const typingText = document.querySelector(".typing-text");

    if (typingText) {
        const textArray = [
            "Professional IT Support Engineer", 
            "Network Specialist", 
            "Canva Designer", 
            "MS Office Expert",
            "NSDA Level 3 Certified"
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

            // টাইপিং স্পিড কন্ট্রোল
            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentString.length) {
                // শব্দ শেষ হলে ২ সেকেন্ড থামবে
                isDeleting = true;
                typeSpeed = 2000; 
            } else if (isDeleting && charIndex === 0) {
                // মোছা শেষ হলে পরের শব্দে যাবে
                isDeleting = false;
                arrayIndex++;
                if (arrayIndex >= textArray.length) arrayIndex = 0;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        
        // অ্যানিমেশন শুরু
        type();
    }

    // ৩. স্মুথ স্ক্রলিং (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // শুধু # থাকলে কিছু করবে না
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // হেডারের হাইট (80px) বাদ দিয়ে পজিশন ঠিক করা
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
