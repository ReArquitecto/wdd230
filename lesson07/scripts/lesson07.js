// Select all images with the class "lazy"
const images = document.querySelectorAll("img");

// Define the options for the IntersectionObserver
const options = {
  rootMargin: "0px",
  threshold: 0.35
};

// Create the IntersectionObserver object
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Replace the placeholder image with the real image
      entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
      entry.target.classList.add("lazy-loaded");
      // Stop observing the image
      observer.unobserve(entry.target);
    }
  });
}, options);

// Loop through each image and observe it
images.forEach(function(image) {
  observer.observe(image);
});
