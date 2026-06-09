// =============================================
// INNLOGGINGSLOGIKK
// Denne filen sjekker om brukernavn og passord er riktig
// =============================================

// Her definerer vi brukernavn og passord direkte i koden.
// I en ekte løsning ville dette ligget i en database,
// men til eksamen er dette godt nok.
var BRUKERNAVN = "kunde";
var PASSORD = "passord123";

// Denne funksjonen kjøres når brukeren trykker "Logg inn"
function sjekkLogin(event) {

  // Hindrer siden fra å laste på nytt (standard oppførsel for skjemaer)
  event.preventDefault();

  // Henter det brukeren har skrevet inn i feltene
  var brukernavn = document.getElementById("brukernavn").value;
  var passord = document.getElementById("passord").value;

  // Sammenligner det brukeren skrev med de riktige verdiene
  if (brukernavn === BRUKERNAVN && passord === PASSORD) {

    // Innlogging vellykket:
    // Lagrer i sessionStorage at brukeren er innlogget.
    // sessionStorage er en midlertidig lagring i nettleseren –
    // den slettes automatisk når brukeren lukker fanen.
    sessionStorage.setItem("innlogget", "ja");

    // Sender brukeren videre til kundeportalen
    window.location.href = "portal.html";

  } else {

    // Feil brukernavn eller passord:
    // Viser feilmeldingen som er skjult i HTML-en
    var feilmelding = document.getElementById("feilmelding");
    feilmelding.style.display = "block";

  }
}
