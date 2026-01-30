document.addEventListener('DOMContentLoaded', function() {
    
    // 1. PARTICLES (SPIDER WEB)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 50 },
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

    // 2. MOBILE MENU (FIXED)
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuBtn ? menuBtn.querySelector('i') : null;

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Icon Switch
            if(navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close on Link Click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // 3. LOAD PROFILE (WITH CLICKABLE EMAIL)
    const pContainer = document.getElementById('profile-container');
    if(pContainer && typeof profileData !== 'undefined') {
        pContainer.innerHTML = `
            <div class="profile-img-box"><img src="${profileData.image}" alt="Profile"></div>
            <div class="profile-info-box">
                <span class="badge-neon">${profileData.title}</span>
                <h2>${profileData.name}</h2>
                <p class="lead">${profileData.bio}</p>
                <div class="profile-meta">
                    <span><i class="fas fa-envelope"></i> <a href="mailto:${profileData.email}">${profileData.email}</a></span>
                    <span><i class="fas fa-map-marker-alt"></i> ${profileData.location}</span>
                </div>
                <div style="margin-top: 25px;">
                    <a href="contact.html" class="btn-primary">Hire Me</a>
                </div>
            </div>
        `;
    }

    // 4. LOAD STATS
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

    // 5. SERVICES
    const sGrid = document.getElementById('services-grid');
    if(sGrid && typeof servicesData !== 'undefined') {
        servicesData.forEach(item => {
            sGrid.innerHTML += `<div class="card" data-aos="fade-up"><div class="icon-box"><i class="${item.icon}"></i></div><h3>${item.title}</h3><p>${item.description}</p></div>`;
        });
    }

    // 6. PROJECTS
    const prGrid = document.getElementById('projects-grid');
    if(prGrid && typeof projectsData !== 'undefined') {
        projectsData.forEach(item => {
            prGrid.innerHTML += `
                <div class="card project-card" data-aos="fade-up">
                    <div class="project-img" style="background-image: url('${item.image}');"></div>
                    <div style="padding:25px;">
                        <span class="cat-badge">${item.category}</span>
                        <h3 style="margin-top:10px;">${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>`;
        });
    }

    // 7. EXPERIENCE
    const eGrid = document.getElementById('experience-grid');
    if(eGrid && typeof experienceData !== 'undefined') {
        experienceData.forEach(item => {
            eGrid.innerHTML += `<div class="timeline-item" data-aos="fade-left"><span class="year">${item.year}</span><h3>${item.role}</h3><p>${item.details}</p></div>`;
        });
    }

    // 8. REVIEWS
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
