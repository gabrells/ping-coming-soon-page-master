function imgGrafic(grafico1, grafico2) {
    return `
        <li class="grafico">
            <img src="./assets/grafico-${grafico1}.svg">
            <img src="./assets/grafico-${grafico2}.svg">
        </li>
    `
}

let delay = -0.4;
function createGrafic(painel) {
    delay = delay + 0.4;
     return `
         <div class="painel" style="animation-delay: ${delay}s;";>
             <ul>
                 ${painel}

            </ul>
         </div>
     `
   }

    document.querySelector('#layout').innerHTML = createGrafic(imgGrafic("1", "2") + imgGrafic("3", "4"))
