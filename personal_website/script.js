var currentPath = window.location.pathname;


// HOME PAGE
if (currentPath == "/index.html") {
var resumeLink = document.getElementById("resume");
resumeLink.addEventListener("click", function() {
    window.open("Bhagwat_Riddhi_Resume_Su24.pdf", '_blank');
});

var linkedinLink = document.getElementById("linkedin");
linkedinLink.addEventListener("click", function() {
    window.open("http://linkedin.com/in/riddhibhagwat", '_blank');
});
}

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


// PROJECTS PAGE
if (currentPath == "/projects.html") {
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
    window.open("https://github.com/itmoon7/onconpc.git", '_blank');
});

var tonemeGithub = document.getElementById("toneme-git");
tonemeGithub.addEventListener("click", function(){
    window.open("https://github.com/tone-me/tone-me.git", '_blank');
});
}

if (currentPath == "/writing_speaking.html") {
    var substackBtn = document.getElementById("substack-btn");
    substackBtn.addEventListener("click", function() {
        window.open("https://riddhibhagwat.substack.com/", '_blank');
    });
}