var currentPath = window.location.pathname;

app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(self), microphone=()');
    next();
  });

// HOME PAGE


if (currentPath == "/index.html") {
    const text = "Hello, my name is Riddhi"; 
    const delay = 100; 
    const pauseBeforeRestart = 5000;

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            document.getElementById('title-hello').textContent += text.charAt(charIndex);
            charIndex++;
            typingTimeout = setTimeout(type, delay);
        } else {
            setTimeout(resetTyping, pauseBeforeRestart);
        }
        }
        
        function resetTyping() {
        charIndex = 0;
        document.getElementById('title-hello').textContent = '';
        type(); 
        }
    type();
    var resumeLink = document.getElementById("resume");
    resumeLink.addEventListener("click", function() {
        window.open("Bhagwat_Riddhi_Resume_Fall24 copy.pdf", '_blank');
    });

    var linkedinLink = document.getElementById("linkedin");
    linkedinLink.addEventListener("click", function() {
        window.open("http://linkedin.com/in/riddhibhagwat", '_blank');
    });

    document.addEventListener('DOMContentLoaded', () => {
        const aboutWrapper = document.querySelector('.about-wrapper');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutWrapper.classList.add('visible'); // Add the 'visible' class to trigger animations
                    observer.unobserve(aboutWrapper); // Stop observing once the animation is triggered
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the section is visible
        });

        observer.observe(aboutWrapper);
    });

    window.onload = function() {
        const image = document.getElementById('intro-image');
        image.classList.add('active');
    };

    let currentSlide = 0;

    function moveSlide() {
        const carousel = document.querySelector('.carousel');
        const totalSlides = carousel.children.length;
        const slidesToShow = 3;
        
        const maxSlideIndex = totalSlides - slidesToShow;
    
        currentSlide = (currentSlide + 1) % totalSlides;
    
        if (currentSlide > maxSlideIndex) {
        currentSlide = 0;
        }
    
        const offset = -currentSlide * (100 / slidesToShow);
        carousel.style.transform = `translateX(${offset}%)`;
    }
    

    setInterval(moveSlide, 3000);
}


// PROJECTS PAGE

if (currentPath == "/projects.html") {
    const projectsText = "Projects & Experiences"; 
    const projectsDelay = 100; 
    const pauseBeforeRestart = 10000;
    let charIndex = 0;

    function projectsType() {
        if (charIndex < projectsText.length) {
            document.getElementById('title-projects').textContent += projectsText.charAt(charIndex);
            charIndex++;
            setTimeout(projectsType, projectsDelay);
        } else {
            setTimeout(resetTypingProjects, pauseBeforeRestart);
        }
    }

    function resetTypingProjects() {
        charIndex = 0;
        document.getElementById('title-projects').textContent = '';
        projectsType(); 
    }

    projectsType();
    var ongoingBtn = document.getElementById("ongoing-btn");
    ongoingBtn.addEventListener("click", function() {
        window.open("contact.html");
    });

    var fracnetGithub = document.getElementById("fracnet-git");
    fracnetGithub.addEventListener("click", function() {
        window.open("https://github.mit.edu/lsalo/FracNet.git", '_blank');
    });

    var onconpcGithub = document.getElementById("onconpc-git");
    onconpcGithub.addEventListener("click", function() {
        window.open("https://www.nature.com/articles/s41591-023-02482-6", '_blank');
    });

    var tonemeGithub = document.getElementById("toneme-git");
    tonemeGithub.addEventListener("click", function(){
        window.open("https://github.com/tone-me/tone-me.git", '_blank');
    });
}

// WRITING AND SPEAKING PAGE
if (currentPath == "/writing_speaking.html") {
    const writingText = "Writing, Speaking, & Blogging"; 
    const delay = 100; 
    const pauseBeforeRestart = 10000;
    let charIndex = 0;

    function writingType() {
        if (charIndex < writingText.length) {
            document.getElementById('title-writing').textContent += writingText.charAt(charIndex);
            charIndex++;
            setTimeout(writingType, delay);
        } else {
            setTimeout(resetTypingProjects, pauseBeforeRestart);
        }
    }

    function resetTypingProjects() {
        charIndex = 0;
        document.getElementById('title-writing').textContent = '';
        writingType(); 
    }

    writingType();
    
    var substackBtn = document.getElementById("substack-btn");
    substackBtn.addEventListener("click", function() {
        window.open("https://riddhibhagwat.substack.com/", '_blank');
    });
}