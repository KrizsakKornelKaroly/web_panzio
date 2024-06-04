let agyar = 1;
let szallashossz = 1;
let ellatasar = 1;
let szolgar = 1;
let letszam = document.getElementById("fovalaszto").value;

let erkezdatum = document.getElementById("erkezes");
let tavozdatum = document.getElementById("tavozas");

function SzallasHossza() {
    let kulonbseg = Math.abs(new Date(tavozdatum.value) - new Date(erkezdatum.value));
    szallashossz = Math.floor(kulonbseg / (1000 * 60 * 60 * 24))
}

function Penzkalkulator(){
    return (
        (agyar*szallashossz)+(ellatasar*letszam*szallashossz)+(szolgar*letszam*szallashossz)
    )
}


function RadioFigyelo(radiok) {

    if (radiok == "agyak") {
        let agyakradio = document.getElementsByName("agyak")
        let agyszam;
        for (let i = 0; i < agyakradio.length; i++) {
            if (agyakradio[i].checked) {
                agyszam = agyakradio[i].id
            }
        }
        switch (agyszam) {
            case "egyagy":
                agyar = 9000;
                return "Egyágyas - 9.000 Ft/éj";
            case "ketagy":
                agyar = 15000;
                return "Kétágyas - 15.000 Ft/éj";
            case "ketegypot":
                agyar = 18000;
                return "Kétágyas 1 pótággyal - 18.000 Ft/éj";
            case "ketketpot":
                agyar = 21000;
                return "Kétágyas 2 pótággyal - 21.000 Ft/éj";
            default:
                agyar = 1;
                return "Nem választott ki szobatípust!";
        }
    }
    else if (radiok == "ellatas") {
        let ellatasradio = document.getElementsByName("ellatasv")
        let ellatastipus;
        for (let i = 0; i < ellatasradio.length; i++) {
            if (ellatasradio[i].checked) {
                ellatastipus = ellatasradio[i].id
            }
        }
        switch (ellatastipus) {
            case "reggeli":
                ellatasar = 900;
                return "Reggeli - 900 Ft/nap/fő";
            case "felpanz":
                ellatasar = 2900;
                return "Félpanzió - 2.900 Ft/nap/fő";
            case "teljespanz":
                ellatasar = 4900;
                return "Teljes panzíó - 4.900 Ft/nap/fő";
            default:
                ellatasar = 1;
                return "Nem adott meg ellátást!"
        }

    }
}
function CheckBoxok() {
    szolgar = 0;
    let belepokCB = document.getElementsByName("furdsz")
    let belepotipus = "";
    let belepok = "";
    for (let i = 0; i < belepokCB.length; i++) {
        if (belepokCB[i].checked) {
            belepotipus += belepokCB[i].id;
        }

    }

    if (belepotipus.includes("belter")) 
    {
        szolgar += 800;
        belepok += "Beltéri medencék, "
    }
    if (belepotipus.includes("kulter")) 
    {
        szolgar += 800;
        belepok += "Kültéri medencék, "
    }
    if (belepotipus.includes("szauna")) 
    {
        szolgar += 800;
        belepok += "Szauna belépő"
    }
    if (belepotipus.includes("belter") && belepotipus.includes("kulter") && belepotipus.includes("szauna") || belepotipus.includes("teljes")) {
        szolgar = 2000;
        belepok = "Teljes belépő"
    }

    return belepok;
}
function Adatbekeres() {
    adatok = [
        erkezdatum.value,
        tavozdatum.value,
        RadioFigyelo("agyak"),
        document.getElementById("fovalaszto").value,
        document.getElementById("fo1").value,
        document.getElementById("fo2").value,
        document.getElementById("fo3").value,
        document.getElementById("fo4").value,
        RadioFigyelo("ellatas"),
        CheckBoxok(),
        Penzkalkulator()
    ]
    Kiiras();
    SzallasHossza();
}
function Kiiras() {
    let kiirando = `Érkezés: ${adatok[0]}\nTávozás: ${adatok[1]}\nSzoba típusa: ${adatok[2]}\nVendégek száma: ${adatok[3]}\nEllátás típusa: ${adatok[8]}\nIgényelt szolgálatatások: ${adatok[9]}\nA teljes összeg: ${adatok[10]}`;
    alert(kiirando)
}