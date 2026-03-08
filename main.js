// Select the track
const track = document.querySelector('.carousel-track');
let scrollAmount = 0;        // how much the track has moved
const speed = 1;             // pixels per frame, adjust for faster/slower

// Duplicate the track content for seamless looping
track.innerHTML += track.innerHTML;  // duplicate all carousel items

function loopCarousel() {
  scrollAmount += speed;

  // reset scroll when it reaches half of the duplicated track
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }

  track.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(loopCarousel); // call next frame
}

// Start the loop
loopCarousel();


// Only run on archives page
if (document.querySelector(".archive-list")) {

    const archiveData = [
        {
            title: "January 2026 – Vinyl Night",
            image: "../assets/vinyl-night.jpg",
            description: "An intimate evening featuring local DJs spinning rare soul and jazz records."
        },
        {
            title: "December 2025 – Espresso Workshop",
            image: "../assets/espresso-workshop.jpg",
            description: "A hands-on workshop exploring extraction techniques and latte art fundamentals."
        },
        {
            title: "November 2025 – Poetry Evening",
            image: "../assets/poetry-night.jpg",
            description: "Local writers gathered for a candle-lit reading surrounded by soft jazz and coffee."
        }
    ];

    const titleElement = document.getElementById("archive-title");
    const imageElement = document.getElementById("archive-image");
    const descriptionElement = document.getElementById("archive-description");

    const listItems = document.querySelectorAll(".archive-list li");

    listItems.forEach(item => {
        item.addEventListener("click", () => {

            const id = item.getAttribute("data-id");
            const selected = archiveData[id];

            titleElement.textContent = selected.title;
            imageElement.src = selected.image;
            descriptionElement.textContent = selected.description;

        });
    });

}