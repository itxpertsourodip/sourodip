document.addEventListener('DOMContentLoaded', function() {
    
    // 1. PARTICLES (SPIDER WEB)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00f2ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4 },
                "size": { "value": 3 },
                "line_linked": { "enable": true, "distance": 150, "color": "#00f2ff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1.5 }
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

    // 3. LOAD HOMEPAGE STATS
    const statsGrid = document.getElementById('stats-grid');
    if(statsGrid && typeof statsData !== 'undefined') {
        statsData.forEach(stat => {
            statsGrid.innerHTML += `
                <div class="stat-card" data-aos="zoom-in">
                    <h2 class="counter">${stat.value}</h2><span class="suffix">${stat.suffix}</span>
                    <p>${stat.label}</p>
                </div>
            `;
        });
        
        // Counter Animation Logic
        let counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            let target = +counter.innerText;
            let count = 0;
            let speed = target / 50; 
            
            let updateCount = () => {
                count += speed;
                if(count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });
    }

    // 4. LOAD PROFILE (PORTFOLIO PAGE)
    const profileContainer = document.getElementById('profile-container');
    if(profileContainer && typeof profileData !== 'undefined') {
        profileContainer.innerHTML = `
            <div class="profile-img-box">
                <img src="${profileData.image}" alt="${profileData.name}">
            </div>
            <div class="profile-info-box">
                <span class="badge-neon">${profileData.title}</span>
                <h2>${profileData.name}</h2>
                <p>${profileData.bio}</p>
                <div class="profile-meta">
                    <span><i class="fas fa-envelope"></i> ${profileData.email}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${profileData.location}</span>
                </div>
                <div style="margin-top: 20px;">
                    <a href="contact.html" class="btn-primary">Hire Me</a>
                    <a href="#" class="btn-outline" onclick="alert('CV downloading feature coming soon!')">Download CV</a>
                </div>
            </div>
        `;
    }

    // 5. LOAD SERVICES, PROJECTS, EXPERIENCE (Re-used logic)
    const sGrid = document.getElementById('services-grid');
    if(sGrid && typeof servicesData !== 'undefined') {
        servicesData.forEach(item => {
            sGrid.innerHTML += `
                <div class="card" data-aos="fade-up">
                    <div class="icon-box"><i class="${item.icon}"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        });
    }

    const pGrid = document.getElementById('projects-grid');
    if(pGrid && typeof projectsData !== 'undefined') {
        projectsData.forEach(item => {
            pGrid.innerHTML += `
                <div class="card project-card" data-aos="fade-up">
                    <div class="project-img" style="background-image: url('${item.image}');"></div>
                    <div class="project-content">
                        <span class="cat-badge">${item.category}</span>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
    }

    const eGrid = document.getElementById('experience-grid');
    if(eGrid && typeof experienceData !== 'undefined') {
        experienceData.forEach(item => {
            eGrid.innerHTML += `
                <div class="card timeline-item" data-aos="fade-left">
                    <span class="year">${item.year}</span>
                    <h3>${item.role}</h3>
                    <p>${item.details}</p>
                </div>
            `;
        });
    }
    
    // Reviews
    const rGrid = document.getElementById('reviews-grid');
    if(rGrid && typeof reviewsData !== 'undefined') {
        reviewsData.forEach(item => {
            let stars = '';
            for(let i=0; i<5; i++) stars += '<i class="fas fa-star" style="color: #00f2ff;"></i> ';
            rGrid.innerHTML += `
                <div class="card" data-aos="flip-up">
                    <div style="margin-bottom: 15px;">${stars}</div>
                    <p style="font-style: italic; margin-bottom: 20px;">"${item.review}"</p>
                    <h4>${item.name}</h4>
                    <span style="color: var(--text-muted); font-size: 0.9rem;">${item.country}</span>
                </div>
            `;
        });
    }
});
