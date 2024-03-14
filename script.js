document.addEventListener("DOMContentLoaded", function() {
  const textContainer = document.getElementById("text-container");
  const text = textContainer.textContent;
  let html = "";
  
  for (let i = 0; i < text.length; i++) {
    const fontSize = 40 - i; // Decreasing font size from big to small
    html += `<span style="font-size: ${fontSize}px">${text[i]}</span>`;
  }

  textContainer.innerHTML = html;
});