// Select the track
// Only run carousel if the carousel exists on the page
const track = document.querySelector('.carousel-track');
if (track) {
    track.innerHTML += track.innerHTML;

    let scrollAmount = 0;
    const speed = 1;

    function loopCarousel() {
        scrollAmount += speed;
        if (scrollAmount >= track.scrollWidth / 2) {
            scrollAmount = 0;
        }
        track.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(loopCarousel);
    }

    loopCarousel();
}


// Only run on archives page
if (document.querySelector(".archive-list")) {

    const archiveData = [
        {
            title: "black sesame",
            image: "../assets/Images/Archives Drinks/BlackSesame.jpg",
            description: "ADD description of black sesame drink"
        },
        {
            title: "peach americano",
            image: "../assets/Images/Archives Drinks/PeachAmericano.jpg",  // FIX: updated path
            description: "ADD description of peach americano drink"
        },
        {
            title: "rose matcha",
            image: "../assets/Images/Archives Drinks/RoseMatcha.jpg",       // FIX: updated path
            description: "ADD description of rose drink"
        },
        {
            title: "coconut pandan latte",
            image: "../assets/Images/poetry-night.jpg",       // FIX: updated path
            description: "ADD description of coconut pandan latte"
        }
    ];

    const titleElement = document.getElementById("archive-title");
    const imageElement = document.getElementById("archive-image");
    const descriptionElement = document.getElementById("archive-description");

    const listItems = document.querySelectorAll(".archive-list li");

    function setActive(item) {
        // Update list item states
        listItems.forEach(i => i.classList.remove("--is-active"));
        item.classList.add("--is-active");

        const id = parseInt(item.getAttribute("data-id"));
        const selected = archiveData[id];

        // Fade out
        titleElement.classList.add("--fade-out");
        imageElement.classList.add("--fade-out");
        descriptionElement.classList.add("--fade-out");

        setTimeout(() => {
            titleElement.textContent = selected.title;
            imageElement.src = selected.image;
            descriptionElement.textContent = selected.description;

            // Fade in
            titleElement.classList.remove("--fade-out");
            imageElement.classList.remove("--fade-out");
            descriptionElement.classList.remove("--fade-out");
        }, 250);
    }

    // Set first item active on load
    if (listItems.length > 0) {
        listItems[0].classList.add("--is-active");
    }

    listItems.forEach(item => {
        item.addEventListener("mouseenter", () => setActive(item));
    });

}