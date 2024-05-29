function RadioFigyelo(radiok){

    if(radiok == "agyak")
    {
        let agyakradio = document.getElementsByName("agyak")
        let agyszam;
        for(let i = 0; i < agyakradio.length; i++)
        {
            if(agyakradio[i].checked)
            {
                agyszam = agyakradio[i].id
            }
        }
        switch(agyszam)
        {
            case "egyagy":
                return "Egyágyas - 9.000 Ft/éj";
            case "ketagy":
                return "Kétágyas - 15.000 Ft/éj";
            case "ketegypot":
                return "Kétágyas 1 pótággyal - 18.000 Ft/éj";
            case "ketketpot":
                return "Kétágyas 2 pótággyal - 21.000 Ft/éj";
            default:
                return "Nem választott ki szobatípust!";
        }
    }
    else if(radiok == "ellatas")
    {
        let ellatasradio = document.getElementsByName("ellatasv")
        let ellatastipus;
        for(let i = 0; i < ellatasradio.length; i++)
        {
            if(ellatasradio[i].checked)
            {
                ellatastipus = ellatasradio[i].id
            }
        }
        switch(ellatastipus)
        {
            case "reggeli":
                return "Reggeli - 900 Ft/nap/fő";
            case "felpanz":
                return "Félpanzió - 2.900 Ft/nap/fő";
            case "teljespanz":
                return "Teljes panzíó - 4.900 Ft/nap/fő";
            default:
                return "Nem adott meg ellátást!"
        }

    }
}
function CheckBoxok()
{
    let belepokCB = document.getElementsByName("furdsz")
    let belepotipus = "";
    let belepok = "";
    for(let i = 0; i < belepokCB.length; i++){
        if(belepokCB[i].checked)
        {
            belepotipus += belepokCB[i].id;
        }

    }

    if(belepotipus.includes("belter"))
    {
        belepok += "Beltéri medencék, "
    }
    if(belepotipus.includes("kulter"))
    {
        belepok += "Kültéri medencék, "
    }
    if(belepotipus.includes("szauna"))
    {
        belepok += "Szauna belépő"
    }
    if(belepotipus.includes("belter") && belepotipus.includes("kulter") && belepotipus.includes("szauna") || belepotipus.includes("teljes")) 
    {
        belepok = "Teljes belépő"
    }

    return belepok;
}
function Adatbekeres()
{
    adatok = [
        document.getElementById("erkezes").value,
        document.getElementById("tavozas").value,
        RadioFigyelo("agyak"),
        document.getElementById("fovalaszto").value,
        document.getElementById("fo1").value,
        document.getElementById("fo2").value,
        document.getElementById("fo3").value,
        document.getElementById("fo4").value,
        RadioFigyelo("ellatas"),
        CheckBoxok(), 
    ]
    Kiiras();
}
function Kiiras(){
    let kiirando = `Érkezés: ${adatok[0]}\nTávozás: ${adatok[1]}\nSzoba típusa: ${adatok[2]}\nVendégek száma: ${adatok[3]}\nEllátás típusa: ${adatok[8]}\nIgényelt szolgálatatások: ${adatok[9]}`;
    alert(kiirando)
}