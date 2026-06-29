document.addEventListener("DOMContentLoaded", function() {
    // Menyeleksi semua elemen yang ingin diberi efek animasi muncul
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15, // Animasi terpicu saat 15% elemen sudah masuk ke layar
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Lewati jika belum masuk layar
            } else {
                entry.target.classList.add("active");
                // Hentikan observasi agar animasi hanya jalan satu kali (saat pertama scroll)
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
