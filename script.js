function mensaje() {
    let precio = document.forms.formulario.total.value;
    /*let numero=document.getElementById("gente").value;*/
    let gente = document.forms.formulario.gente.value;
    /*let area=document.getElementById("resultado");*/
    let area = document.forms.formulario.resultado;
    /*
    factura = precio * propina / gente
    numero*gente= total
    if opinion=Horrible descuento 0% de total
    else if opinion=Aceptable descuento 5% de total
    else opinion=Genial descuento 10% de total */
    /*let opinion=document.getElementById("opinion");*/
    let opinion = document.forms.formulario.opinion.value;
    let propina;
    let factura;
    if (gente == "") {
        gente = 1;
    }
    if (opinion == "1") {
        propina = 0.5;
    }
    else if (opinion == "2") {
        propina = 0.05;
    }
    else{
        propina = 0.10;
    }
    if (propina <= 0.5) {
        propina = 0.5;
    }
    factura = (precio * propina) * gente;
    //area.value = "El total es: " + parseFloat(factura).toFixed(2) + " € de propina";

    //let factura = precio * propina / numero;
   // area.innerHTML = opinion + "\tEl total es: " + factura + " €";
    let resultado;
    do {
    resultado = window.confirm("El total es: " + parseFloat(factura).toFixed(2) + " € de propina")
    } while (!resultado)
return false;
    }
