const videos = document.getElementsByTagName("video");

// intersection observer approach for supporting browsers

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!entry.target.poster) {
        entry.target.poster = entry.target.getAttribute("poster-src");
      }
      
      observer.unobserve(entry.target);
    }
  });
}, options);

Array.from(videos).forEach((video) => {
  observer.observe(video);
});

// scroll/viewport approach for supporting browsers

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) ||
    rect.bottom >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

window.addEventListener("scroll", () => {
  Array.from(videos)
    .filter(isInViewport)
    .forEach((video) => {
      if (!video.poster) video.poster = video.getAttribute("poster-src");
    });
}, { passive: true });

if (mediaPlaybackRequiresUserGesture()) {
  window.addEventListener("keydown", removeBehaviorsRestrictions);
  window.addEventListener("mousedown", removeBehaviorsRestrictions);
  window.addEventListener("touchstart", removeBehaviorsRestrictions);
}

function mediaPlaybackRequiresUserGesture() {
  // test if play() is ignored when not called from an input event handler
  const video = document.createElement("video");
  video.play();
  return video.paused;
}

function removeBehaviorsRestrictions() {
  Array.from(document.getElementsByTagName("video")).forEach((video) => video.load());

  window.removeEventListener("keydown", removeBehaviorsRestrictions);
  window.removeEventListener("mousedown", removeBehaviorsRestrictions);
  window.removeEventListener("touchstart", removeBehaviorsRestrictions);
}
