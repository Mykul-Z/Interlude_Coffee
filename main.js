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
            title: "January 2026 – Vinyl Night",
            image: "../assets/Images/vinyl-night.jpg",        // FIX: updated path
            description: "An intimate evening featuring local DJs spinning rare soul and jazz records."
        },
        {
            title: "December 2025 – Espresso Workshop",
            image: "../assets/Images/espresso-workshop.jpg",  // FIX: updated path
            description: "A hands-on workshop exploring extraction techniques and latte art fundamentals."
        },
        {
            title: "November 2025 – Poetry Evening",
            image: "../assets/Images/poetry-night.jpg",       // FIX: updated path
            description: "Local writers gathered for a candle-lit reading surrounded by soft jazz and coffee."
        }
    ];

    const titleElement = document.getElementById("archive-title");
    const imageElement = document.getElementById("archive-image");
    const descriptionElement = document.getElementById("archive-description");

    const listItems = document.querySelectorAll(".archive-list li");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const id = parseInt(item.getAttribute("data-id")); // FIX: parseInt
            const selected = archiveData[id];
            titleElement.textContent = selected.title;
            imageElement.src = selected.image;
            descriptionElement.textContent = selected.description;
        });
    });

}