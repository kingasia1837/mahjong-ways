const symbols = ["🀄", "🀇", "🀈", "🀉", "🀊", "🔔"]; // 🔔 sebagai Scatter
const grid = document.getElementById("slotGrid");
const resultText = document.getElementById("resultText");

function generateSpin(scatterMode) {
  grid.innerHTML = "";
  let scatterCount = 0;
  for (let i = 0; i < 15; i++) {
    let symbol;
    if (scatterMode && scatterCount < 3 && Math.random() > 0.5) {
      symbol = "🔔";
      scatterCount++;
    } else {
      symbol = symbols[Math.floor(Math.random() * (symbols.length - 1))];
    }
    const cell = document.createElement("div");
    cell.className = "symbol";
    cell.textContent = symbol;
    grid.appendChild(cell);
  }

  if (scatterCount >= 3) {
    resultText.textContent = "🎉 Dapat SCATTER! Maxwin Mode Aktif!";
  } else {
    resultText.textContent = "Coba lagi!";
  }
}

document.getElementById("spinBtn").addEventListener("click", () => {
  const scatterMode = document.getElementById("scatterToggle").checked;
  generateSpin(scatterMode);
});
