document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = [
    document.querySelector(".profile-picture"), // Foto profil
    document.querySelector(".name"), // Nama
    document.querySelector(".bio"), // Bio
    document.querySelector(".social-icons"), // Media sosial
    ...document.querySelectorAll(".link"), // Semua tautan
  ];

  // Set initial styles for elements
  elementsToAnimate.forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
  });

  // Fungsi untuk animasi fade-in dan slide-up
  function animateElements() {
    let start = null;
    const duration = 100; // Durasi animasi dalam milidetik (1 detik)

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      elementsToAnimate.forEach((element, index) => {
        // Hitung progres untuk setiap elemen dengan delay
        const elementProgress = Math.min(
          1,
          (progress - index * 200) / duration
        );
        if (elementProgress > 0) {
          element.style.opacity = elementProgress; // Fade-in
          element.style.transform = `translateY(${
            20 * (1 - elementProgress)
          }px)`; // Slide-up
        }
      });

      if (progress < duration + (elementsToAnimate.length - 1) * 200) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Jalankan animasi setelah halaman dimuat
  animateElements();
});
