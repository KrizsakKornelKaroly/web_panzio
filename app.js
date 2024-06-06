let erkezdatum = document.getElementById("erkezes");
let tavozdatum = document.getElementById("tavozas");
let fomezo1 = document.getElementById("fo1");
let fomezo2 = document.getElementById("fo2");
let fomezo3 = document.getElementById("fo3");
let fomezo4 = document.getElementById("fo4");
let szallashossz = 0;
let letszam = 1;

fomezo2.disabled = true;
fomezo3.disabled = true;
fomezo4.disabled = true;

function Adatbekeres() {
    adatok = [
        erkezdatum.value,
        tavozdatum.value,
        RadioFigyelo("agyak"),
        document.getElementById("fovalaszto").value,
        fomezo1.value,
        fomezo2.value,
        fomezo3.value,
        fomezo4.value,
        RadioFigyelo("ellatas"),
        CheckBoxok(),
        Penzkalkulator()
    ]
    SzallasHossza();
    letszam = document.getElementById("fovalaszto").value; 
    Kiiras();
}

function SzallasHossza() {
    let kulonbseg = Math.abs(new Date(tavozdatum.value) - new Date(erkezdatum.value));
    szallashossz = Math.floor(kulonbseg / (1000 * 60 * 60 * 24))
}


function IdopontEllenorzo(){
    let maidatum = new Date();
    let ev = maidatum.getFullYear();
    let honap = String(maidatum.getMonth()+1).padStart(2, '0');
    let nap = String(maidatum.getDate()).padStart(2, '0');
    maidatum = ev+'-'+honap+'-'+nap;

    erkezdatum.setAttribute("min", maidatum);
    tavozdatum.setAttribute("min", maidatum);
}

function LetSzamEllenorzo(){
    let letszam = document.getElementById("fovalaszto").value;
    switch(letszam){
        case "1":
            fomezo1.disabled = false;
            fomezo2.disabled = true;
            fomezo3.disabled = true;
            fomezo4.disabled = true;
            break;
        case "2":
            fomezo1.disabled = false;
            fomezo2.disabled = false;
            fomezo3.disabled = true;
            fomezo4.disabled = true;
            break;
        case "3": 
            fomezo1.disabled = false;
            fomezo2.disabled = false;
            fomezo3.disabled = false;
            fomezo4.disabled = true;
            break;
        case "4":
            fomezo1.disabled = false;
            fomezo2.disabled = false;
            fomezo3.disabled = false;
            fomezo4.disabled = false;
            break;
        default:
            break;
    }
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

function Kiiras() {
    let kiirando = 
    `Érkezés: ${adatok[0]}\nTávozás: ${adatok[1]}\nSzoba típusa: ${adatok[2]}\nVendégek száma: ${adatok[3]} fő\nEllátás típusa: ${adatok[8]}\nIgényelt szolgálatatások: ${adatok[9]}\nA teljes összeg: ${Penzkalkulator()}`;
    alert(kiirando)
}