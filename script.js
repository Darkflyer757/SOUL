const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(158,11,15,.12),
        transparent 60%)`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "transparent";
    });

});