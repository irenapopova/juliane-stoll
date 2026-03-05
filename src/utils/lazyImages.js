export function setupLazyImages({
  selector = "img[data-src]",
  rootMargin = "200px 0px",
  threshold = 0.01,
} = {}) {
  const images = document.querySelectorAll(selector);

  if (!images.length) {
    return () => {};
  }

  if (!("IntersectionObserver" in window)) {
    images.forEach((img) => {
      if (img.dataset.src) img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
      img.classList.add("is-loaded");
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
        img.onload = () => img.classList.add("is-loaded");
        observer.unobserve(img);
      });
    },
    { rootMargin, threshold },
  );

  images.forEach((img) => observer.observe(img));

  return () => observer.disconnect();
}
