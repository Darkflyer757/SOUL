javascript
const bg = document.querySelector(".bg-image");

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 15;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 15;

    bg.style.transform =
        `translate(${x}px, ${y}px) scale(1.05)`;

});

const enterBtn =
document.querySelector(".enter-btn");

enterBtn.addEventListener("mouseenter", () => {
    enterBtn.textContent = "ENTER →";
});

enterBtn.addEventListener("mouseleave", () => {
    enterBtn.textContent = "ENTER";
});

