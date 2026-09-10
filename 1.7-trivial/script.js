let puntuak = 0;

let zuzenak = 0;

let okerrak = 0;

let kategoriaOkerrak = []

let galderak = [
    {
        kategoria: "Geografia",
        enuntziatua: "Zein da Frantziako hiriburua?",
        erantzunZuzena: "Paris",
        erantzunak: ["Niza", "Lyon", "Elche", "Paris"]
    },

    {
        kategoria: "Historia",
        enuntziatua: "Zein urtetan hasi zen Bigarren Mundu Gerra?",
        erantzunZuzena: "1939",
        erantzunak: ["1938", "1940", "1939", "1941"]
    },

    {
        kategoria: "Artea",
        enuntziatua: "Nork margotu zuen Gau izartsua?",
        erantzunZuzena: "Van Gogh",
        erantzunak: ["Picasso", "Monet", "Dali", "Van Gogh"]
    },

    {
        kategoria: "Zientziak",
        enuntziatua: "Zein da Eguzki Sistemako planetarik handiena?",
        erantzunZuzena: "Jupiter",
        erantzunak: ["Jupiter", "Eguzkia", "Urano", "Neptuno"]
    },

    {
        kategoria: "Kirolak",
        enuntziatua: "Zenbat jokalari daude futbol talde batean?",
        erantzunZuzena: "11",
        erantzunak: ["10", "12", "11", "1"]
    },

    {
        kategoria: "Ikuskizunak",
        enuntziatua: "Nork zuzendu zuen Titanic filma?",
        erantzunZuzena: "James Cameron",
        erantzunak: ["Steven Spielberg", "James Cameron", "Eder Bilbao", "Christopher Nolan"]
    }
];

function erakutsiGaldera(galdera) {
    let erantzuna = prompt(
        `${galdera.enuntziatua} 
        Aukeratu zenbaki bat:
        1. ${galdera.erantzunak[0]}
        2. ${galdera.erantzunak[1]}
        3. ${galdera.erantzunak[2]}
        4. ${galdera.erantzunak[3]}`);

    let aukeratutakoErantzuna = galdera.erantzunak[erantzuna - 1];

    if (aukeratutakoErantzuna === galdera.erantzunZuzena) {
        alert("Erantzun zuzena!");
        puntuak++;
        zuzenak++;
    } else {
        alert("Erantzun okerra!");
        okerrak++;
        kategoriaOkerrak.push(galdera.kategoria);
    }

}

function jokatu() {
    puntuak = 0;
    zuzenak = 0;
    okerrak = 0;
    kategoriaOkerrak = [];
    let geratzenDira = [...galderak];
    while (zuzenak < 4 && okerrak < 3 && geratzenDira.length > 0) {
        let galderaRandom = Math.floor(Math.random() * geratzenDira.length);
        erakutsiGaldera(geratzenDira[galderaRandom]);
        geratzenDira.splice(galderaRandom, 1);
    }
    alert(`Hau da zure resumena:
        Puntuak: ${puntuak}
        Zuzenak: ${zuzenak}
        Okerrak: ${okerrak}
        Falladutako kategoriak: ${kategoriaOkerrak.join(", ")}`)
}