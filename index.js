window.addEventListener("load", function () {
    CreaMatrice();
   
});

function CreaMatrice() {

    const wrapper = document.getElementById("wrapper");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div-${i / 4}-${i % 4}`;
            wrapper.appendChild(div);
        }
    }

}


function divClick() {
    const i = parseInt(this.id.split('-')[1]);
    const j = parseInt(this.id.split('-')[2]);

    //Cella sopra
    if (i - 1 >= 0) {
        const sopra = document.getElementById(`div-${i - 1}-${j}`);

        if(sopra.textContent == ""){
            scambiaDiv(this,sopra);
            return;
        }
    }

    //cella destra
    if (j + 1 < 4) {
        const destra = document.getElementById(`div-${i}-${j + 1}`);

        if(destra.textContent == ""){
            scambiaDiv(this,destra);
            return;
        }
    }

    //cella sotto
    if (i + 1 >= 0) {
        const sotto = document.getElementById(`div-${i + 1}-${j}`);

        if(sotto.textContent == ""){
            scambiaDiv(this,sotto);
            return;
        }
    }

    //cella sinistra
    if (j - 1 >= 0) {
        const sinistra = document.getElementById(`div-${i}-${j - 1}`);

        if(sinistra.textContent == ""){
            scambiaDiv(this,sinistra);
            return;
        }
    }
}

function scambiaDiv(piena,vuota){
    vuota.textContent = piena.textContent;
    vuota.style.backgroundColor = "blue";

    piena.textContent = "";
    piena.style.backgroundColor = null;
}

function caricaMatrice() {

    for (let cont = 1; cont <= 15; cont++) {
        let divRnd;
        do {
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);

            divRnd = document.getElementById(`div-${i}-${j}`);

        } while (divRnd.textContent != "");
        div.style.backgroundColor = "blue";
        divRnd.textContent = cont;
    }

}