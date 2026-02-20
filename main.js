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