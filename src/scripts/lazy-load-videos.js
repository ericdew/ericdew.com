const videos = document.getElementsByTagName("video");

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
        .forEach(video => video.preload = "metadata");
});
