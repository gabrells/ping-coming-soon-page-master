const inputEmail = document.getElementById('email')
const form = document.getElementById('form')
const errorMsg = document.getElementById('errorMsg')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    //Campo de validação
    if (inputEmail.value === '') {
        inputEmail.classList.add('input_error')
        inputEmail.classList.add('margin_bottom')
        errorMsg.innerHTML = 'Email cannot be empty'
        return

    } else if (inputEmail.value.indexOf("@") < 0) {
        inputEmail.classList.add('input_error')
        inputEmail.classList.add('margin_bottom')
        errorMsg.innerHTML = 'Please provide a valid email address'
        return
     
    } else if (inputEmail.value.indexOf(".com") < 0) {
        inputEmail.classList.add('input_error')
        inputEmail.classList.add('margin_bottom')
        errorMsg.innerHTML = 'Please provide a valid email address'
        return
    } else {
        inputEmail.classList.remove('input_error')
        errorMsg.classList.add('ok_msg')
        errorMsg.innerHTML = 'Email has been entered ok'
        inputEmail.value = ''
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }
}) 


/* function imgGrafic(grafico1, grafico2) {
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

     document.querySelector('#layout').innerHTML = createGrafic(imgGrafic("1", "2") + imgGrafic("3", "4"))*/
