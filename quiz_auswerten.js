function auswerten() {
  let punkte = 0;
  const ergebnis = document.getElementById("auswertung");

  const antwort1 = document.querySelector('input[name="frage1"]:checked');
  const antwort2 = document.querySelector('input[name="frage2"]:checked');
  const antwort3 = document.querySelector('input[name="frage3"]:checked');

  if (!antwort1 || !antwort2 || !antwort3) {
    ergebnis.textContent = "Bitte beantworte alle Fragen.";
    ergebnis.style.color = "orange";
    return;
  }

  if (antwort1.value === "B") punkte++;
  if (antwort2.value === "C") punkte++;
  if (antwort3.value === "A") punkte++;

  ergebnis.style.color = punkte === 3 ? "green" : "darkorange";
  ergebnis.textContent = `Du hast ${punkte} von 3 Punkten erreicht.`;
}
