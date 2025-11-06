
var typed = new Typed(".text", {
    strings: ["Data Analysis" , "Web Development" , "Programming"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

// Add animation when the project section comes into view
document.addEventListener("scroll", () => {
    const projectSection = document.querySelector("#Projects");
    const projectCards = document.querySelectorAll(".project-card");
    const sectionPosition = projectSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 200); // Staggered animation
        });
    }
});

// Initial state for animations
document.querySelectorAll(".project-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease-in-out";
});
