function auswerten() {
  const ergebnis = document.getElementById("auswertung");
  let punkte = 0;

  // Map der richtigen Antworten
 const richtigeAntworten = {
  frage1: "B",
  frage2: "C",
  frage3: "A",
  frage4: "B",
  frage5: "C",
  frage6: "B",
  frage7: "B",
  frage8: "A",
  frage9: "B",
  frage10: "B"
};

  let alleBeantwortet = true;

  for (let frage in richtigeAntworten) {
    const richtige = richtigeAntworten[frage];
    const ausgewaehlt = document.querySelector(`input[name="${frage}"]:checked`);

    const labels = document.querySelectorAll(`input[name="${frage}"]`);

    // Labels zurücksetzen (Farbe entfernen)
    labels.forEach(input => {
      input.parentElement.style.color = ""; // reset Farbe
    });

    if (!ausgewaehlt) {
      alleBeantwortet = false;
      continue;
    }

    if (ausgewaehlt.value === richtige) {
      punkte++;
      ausgewaehlt.parentElement.style.color = "green"; 
    } else {
      ausgewaehlt.parentElement.style.color = "red";   

      // Richtige Antwort grün hervorheben
      const richtigeInput = document.querySelector(`input[name="${frage}"][value="${richtige}"]`);
      if (richtigeInput) {
        richtigeInput.parentElement.style.color = "green";
      }
    }
  }

  if (!alleBeantwortet) {
    ergebnis.textContent = "Bitte beantworte alle Fragen.";
    ergebnis.style.color = "orange";
    return;
  }

  ergebnis.style.color = punkte === 10 ? "green" : "darkorange";
  ergebnis.textContent = `Du hast ${punkte}0% der Punkte erreicht.`;
}

