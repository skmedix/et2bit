document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxNext = document.querySelector(".lightbox-next");
    const lightboxPrev = document.querySelector(".lightbox-prev");
    const gallery = document.querySelector(".gallery");

    let currentIndex = 0;
    const images = gallery.querySelectorAll(".gallery-item");

    function openLightbox(index) {
        currentIndex = index;
        const imgSrc =
            gallery.querySelectorAll(".gallery-item")[index].dataset.full;
        const caption =
            gallery.querySelectorAll(".gallery-item")[index].dataset.caption;

        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    // Set up event listeners
    images.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxNext.addEventListener("click", nextImage);
    lightboxPrev.addEventListener("click", prevImage);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (e.key === "Escape") {
            closeLightbox();
        }
        if (e.key === "ArrowRight") {
            nextImage();
        }
        if (e.key === "ArrowLeft") {
            prevImage();
        }
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
