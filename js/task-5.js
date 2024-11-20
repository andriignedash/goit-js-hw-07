function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;

  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = newColor;
  colorSpan.style.color = newColor;
});
