//for contact.html accordian cards!
const accordionCards = document.querySelectorAll(".accordion-card");

for (let i = 0; i < accordionCards.length; i++) {
  accordionCards[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionContainer = this.parentElement;
    if (accordionContainer.classList.contains("accordion-card-container")) {
      accordionContainer.style.background = this.classList.contains("active")
        ? `linear-gradient(
              180deg,
              #ff5722 0%,
              rgba(255, 255, 255, 0.16) 100%
            )`
        : `linear-gradient(
            180deg,
            rgba(255, 87, 34, 0.26) 0%,
            rgba(255, 255, 255, 0.16) 100%
          )`;
      // استایل‌های دیگر را اینجا اضافه کنید
    }
  });
}
