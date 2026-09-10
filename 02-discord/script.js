let erabiltzaileak = [
  { id: 1, izena: "Markel", puntuak: 30, rol: "Lurker" },
  { id: 2, izena: "Irune", puntuak: 80, rol: "Member" },
  { id: 3, izena: "Aratz", puntuak: 15, rol: "Lurker" },
  { id: 4, izena: "Ekaitz", puntuak: 120, rol: "VIP" },
];
function erakutsiErabiltzaileak() {
  for (let erabiltzaile of erabiltzaileak) {
    console.log(erabiltzaile);
  }
}
function erakutsiErabiltzailea(id) {
  for (let erabiltzaile of erabiltzaileak) {
    if (erabiltzaile.id === id) {
      console.log(erabiltzaile);
    }
  }
}
function kontsultatuRola(puntos) {
  if (puntos <= 50) {
    return "Lurker";
  } else if (puntos > 100) {
    return "VIP";
  } else {
    return "Member";
  }
}
function emanPuntuak(id, puntos) {
  for (let erabiltzaile of erabiltzaileak) {
    if (erabiltzaile.id === id) {
      erabiltzaile.puntuak += puntos;
      erabiltzaile.rol = kontsultatuRola(erabiltzaile.puntuak);
      console.log(`Punto kantitate berria: ${erabiltzaile.puntuak}`);
    }
  }
}
