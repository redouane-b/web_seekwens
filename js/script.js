
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const navBar = document.getElementById("mainNav");
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 500) {
            navBar.style.top = "0";
    } else {
        navBar.style.top = `-${navBar.clientHeight}px`;
    }
};


document.addEventListener('DOMContentLoaded', function () {
    const definitionSection = document.querySelector('.definition-section');
    let initialBackgroundPosition = 500;

    console.log(initialBackgroundPosition)
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const newBackgroundPosition = initialBackgroundPosition + scrollPosition * 0.5;
        console.log(newBackgroundPosition)


        definitionSection.style.backgroundPositionY = `${newBackgroundPosition}px`;
    });
});






// Example: Log a message to the console when the page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded!');
});


