const lazyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Generate `src` dynamically
            img.removeAttribute("data-src"); // Clean up
            lazyObserver.unobserve(img); // Stop observing after loading
        }
    });
});

document.querySelectorAll("img[data-src]").forEach(img => lazyObserver.observe(img));