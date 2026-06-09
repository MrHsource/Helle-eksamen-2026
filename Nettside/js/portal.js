// =============================================
// PORTALLOGIKK
// Denne filen kjøres når kundeportalen åpnes
// =============================================

// Sjekker om brukeren faktisk er innlogget.
// Vi sjekker sessionStorage – samme sted vi lagret "innlogget: ja" ved innlogging.
var erInnlogget = sessionStorage.getItem("innlogget");

// Hvis brukeren IKKE er innlogget (f.eks. prøver å gå direkte til portal.html),
// sendes de tilbake til innloggingssiden
if (erInnlogget !== "ja") {
  window.location.href = "login.html";
}

// =============================================
// LOGG UT-FUNKSJON
// Kjøres når brukeren trykker "Logg ut"-knappen
// =============================================

function loggUt() {

  // Fjerner "innlogget"-verdien fra sessionStorage
  sessionStorage.removeItem("innlogget");

  // Sender brukeren tilbake til forsiden
  window.location.href = "index.html";
}
