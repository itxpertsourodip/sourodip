document.addEventListener('DOMContentLoaded', function() {
    
    // 1. PARTICLES CONFIG (SPIDER WEB - SUBTLE & PRO)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f2ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f2ff",
                    "opacity": 0.15,
                    "width": 1
                },
                "move": { "enable": true, "speed": 1 }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" } }
            },
            "retina_detect": true
        });
    }

    // 2. MOBILE MENU
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. DYNAMIC CONTENT LOADING (PORTFOLIO PAGE)
    
    // Load Services
    const sGrid = document.getElementById('services-grid');
    if(sGrid && typeof servicesData !== 'undefined') {
        servicesData.forEach(item => {
            sGrid.innerHTML += `
                <div class="card">
                    <div class="icon-box"><i class="${item.icon}"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        });
    }

    // Load Projects
    const pGrid = document.getElementById('projects-grid');
    if(pGrid && typeof projectsData !== 'undefined') {
        projectsData.forEach(item => {
            pGrid.innerHTML += `
                <div class="card project-card">
                    <div class="project-img" style="background-image: url('${item.image}');"></div>
                    <div class="project-content">
                        <span class="cat-badge">${item.category}</span>
                        <h3 style="margin-top: 10px;">${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
    }

    // Load Experience
    const eGrid = document.getElementById('experience-grid');
    if(eGrid && typeof experienceData !== 'undefined') {
        experienceData.forEach(item => {
            eGrid.innerHTML += `
                <div class="card timeline-item">
                    <span class="year">${item.year}</span>
                    <h3>${item.role}</h3>
                    <p>${item.details}</p>
                </div>
            `;
        });
    }

    // Load Reviews (REVIEWS PAGE)
    const rGrid = document.getElementById('reviews-grid');
    if(rGrid && typeof reviewsData !== 'undefined') {
        reviewsData.forEach(item => {
            // Generate Stars
            let stars = '';
            for(let i=0; i<5; i++) stars += '<i class="fas fa-star" style="color: #00f2ff;"></i> ';
            
            rGrid.innerHTML += `
                <div class="card">
                    <div style="margin-bottom: 15px;">${stars}</div>
                    <p style="font-style: italic; margin-bottom: 20px;">"${item.review}"</p>
                    <h4 style="margin-bottom: 5px;">${item.name}</h4>
                    <span style="color: var(--text-muted); font-size: 0.9rem;">${item.country}</span>
                </div>
            `;
        });
    }
});
