document.addEventListener('DOMContentLoaded', function() {
    
    // 1. PARTICLES (SPIDER WEB)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 60 },
                "color": { "value": "#00f2ff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4 },
                "size": { "value": 3 },
                "line_linked": { "enable": true, "distance": 150, "color": "#00f2ff", "opacity": 0.15, "width": 1 },
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
        menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // 3. LOAD DATA FROM DATABASE.JS
    
    // Profile
    const pContainer = document.getElementById('profile-container');
    if(pContainer && typeof profileData !== 'undefined') {
        pContainer.innerHTML = `
            <div class="profile-img-box"><img src="${profileData.image}" alt="Profile"></div>
            <div class="profile-info-box">
                <span class="badge-neon">${profileData.title}</span>
                <h2>${profileData.name}</h2>
                <p class="lead">${profileData.bio}</p>
                <div style="margin-top: 20px; color: var(--text-muted);">
                    <i class="fas fa-map-marker-alt"></i> ${profileData.location}
                </div>
            </div>
        `;
    }

    // Stats
    const statsGrid = document.getElementById('stats-grid');
    if(statsGrid && typeof statsData !== 'undefined') {
        statsData.forEach(stat => {
            statsGrid.innerHTML += `
                <div class="stat-card" data-aos="zoom-in">
                    <h2 class="counter">${stat.value}</h2><span style="font-size: 2rem; color: var(--primary);">${stat.suffix}</span>
                    <p>${stat.label}</p>
                </div>
            `;
        });
        // Simple Counter Animation
        document.querySelectorAll('.counter').forEach(c => {
            let target = +c.innerText; c.innerText = 0;
            let update = () => {
                let count = +c.innerText;
                let inc = target / 50;
                if(count < target) { c.innerText = Math.ceil(count + inc); setTimeout(update, 30); }
                else c.innerText = target;
            }; update();
        });
    }

    // Services
    const sGrid = document.getElementById('services-grid');
    if(sGrid && typeof servicesData !== 'undefined') {
        servicesData.forEach(item => {
            sGrid.innerHTML += `<div class="card" data-aos="fade-up"><div class="icon-box"><i class="${item.icon}"></i></div><h3>${item.title}</h3><p>${item.description}</p></div>`;
        });
    }

    // Projects
    const prGrid = document.getElementById('projects-grid');
    if(prGrid && typeof projectsData !== 'undefined') {
        projectsData.forEach(item => {
            prGrid.innerHTML += `
                <div class="card" style="padding:0; overflow:hidden;" data-aos="fade-up">
                    <div class="project-img" style="background-image: url('${item.image}'); margin:0;"></div>
                    <div style="padding:25px;">
                        <span class="cat-badge">${item.category}</span>
                        <h3 style="margin-top:10px;">${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>`;
        });
    }

    // Experience
    const eGrid = document.getElementById('experience-grid');
    if(eGrid && typeof experienceData !== 'undefined') {
        experienceData.forEach(item => {
            eGrid.innerHTML += `<div class="timeline-item" data-aos="fade-left"><span style="color:var(--primary); font-weight:700;">${item.year}</span><h3>${item.role}</h3><p>${item.details}</p></div>`;
        });
    }

    // Reviews
    const rGrid = document.getElementById('reviews-grid');
    if(rGrid && typeof reviewsData !== 'undefined') {
        reviewsData.forEach(item => {
            let stars = ''; for(let i=0; i<5; i++) stars += '<i class="fas fa-star" style="color: #ffd700;"></i> ';
            const sBadge = item.service ? `<span class="cat-badge" style="margin-bottom:10px; display:inline-block;">${item.service}</span>` : '';
            rGrid.innerHTML += `
                <div class="card" data-aos="flip-up">
                    <div style="margin-bottom:10px;">${stars}</div>
                    ${sBadge}
                    <p style="font-style:italic; margin-bottom:20px;">"${item.review}"</p>
                    <h4>${item.name}</h4>
                    <span style="color:var(--text-muted); font-size:0.9rem;">${item.country}</span>
                </div>`;
        });
    }
});
