const teclas = document.querySelectorAll(".botao");
const paragrafo = document.getElementById("resultado");

// Insere digitos no parágrafo
for (let i = 0; i < teclas.length; i++){
    teclas[i].addEventListener('click', () => {
        const teclaTxtContent = teclas[i].textContent;
        let digitos = paragrafo.innerHTML;
        paragrafo.innerHTML = digitos + teclaTxtContent;

        if(teclaTxtContent == "C"){
            paragrafo.innerHTML = "";
        }

        if(teclaTxtContent == "<"){
            paragrafo.innerHTML = digitos.substring(0, digitos.length -1);   
        }

        if(teclaTxtContent == "="){
            if(digitos){
                paragrafo.innerHTML = eval(digitos);
            }
            else{
                paragrafo.innerHTML = "0";
            }
        }
    })
}
