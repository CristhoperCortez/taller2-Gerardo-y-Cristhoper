var pedido = new Object();
pedido.supercombo = 7.25;
pedido.comboperso = 5.75;
pedido.comboinfantil= 3.50;
pedido.cantcombo=1;

pedido.ensalada = 1.50;
pedido.papas = 1.25;
pedido.pgrande = 1.75;
pedido.pmedia = 1.50;
pedido.ppequeña = 1.25;
pedido.bgrande = 1.50;
pedido.bmedia = 1.25;
pedido.bpequeña = 1;
pedido.cafe = 0.50;
pedido.postre = 1.25;

pedido.totalEnsalada = 0;
pedido.totalPapas = 0;
pedido.totalPgrande = 0;
pedido.totalPmedia = 0;
pedido.totalPpequeña = 0;
pedido.totalBgrande = 0;
pedido.totalBmedia = 0;
pedido.totalBpequeña = 0;
pedido.totalCafe = 0;
pedido.totalPostre = 0;

pedido.totalCombo = 0;
pedido.totalProducto = 0;
pedido.totalFinal = 0;

var opcionCombo = document.getElementById("opCombo");
var cantidadcombos = document.getElementById("cantcombo");

var nombre = document.getElementById("comboSeleccionado");
var comboC = document.getElementById("comboCant");
var comboP = document.getElementById("presio");
var comboCP = document.getElementById("combossPresio");
var final = document.getElementById("presiofinal");

function actuprecios(){
    if (opcionCombo.value == "combo-1"){
        nombre.innerHTML = "Super Combo";
        comboC.innerHTML = `selecciono ${pedido.cantcombo} combos`;
        comboP.innerHTML = `$${pedido.supercombo}`;
        comboCP.SubtotalCombo =  pedido.supercombo * pedido.cantcombo;
        final.innerHTML = "$" + pedido.totalCombo;
    } else if(ComboElegido.value == "combo-2"){
        nombre.innerHTML = "Combo personal";
        comboC.innerHTML = `selecciono ${pedido.cantcombo} combos`;
        comboP.innerHTML = `$${pedido.comboperso}`;
        comboCP.SubtotalCombo =  pedido.comboperso * pedido.cantcombo;
        final.innerHTML = "$" + pedido.totalCombo;
    }else if(ComboElegido.value == "combo-3"){
        nombre.innerHTML = "Combo infantil";
        comboC.innerHTML = `selecciono ${pedido.cantcombo} combos`;
        comboP.innerHTML = `$${pedido.comboinfantil}`;
        comboCP.SubtotalCombo =  pedido.comboinfantil * pedido.cantcombo;
        final.innerHTML = "$" + pedido.totalCombo;
    }

    pedido.totalFinal = pedido.totalCombo + pedido.totalProducto;
    final.innerHTML=pedido.totalFinal;
}

window.onload = actuprecios();

opCombo.onchange = CambioCombo => {
    actuprecios();
};

cantcombo.onchange = CambioCantiCombo =>{
    Orden.cantidadCombo = cantiCombito.value;
    actuprecios();
}


