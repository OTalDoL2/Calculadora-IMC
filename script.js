
const calcular =  document.getElementById('calculate');

function imc() {
    const nome = document.getElementById('nome');
    const peso = document.getElementById('weight');
    const altura = document.getElementById('size');
    const resultado =  document.getElementById('result');
    
    if(nome.value == '' || peso.value == '' || altura.value == ''){
        if(nome.value == ''){
            if(peso.value == ''){
                if(altura.value == ''){
                    alert('Informações inválidas \nVocê não digitou seu nome, peso e altura');
                }
                else{
                    alert('Informações inválidas \nVocê não digitou seu nome e peso');
                }

            }
            else if(altura.value == '')
                { alert('Informações inválidas \nVocê não digitou seu nome e altura'); }

            else
                { alert('Informação inválida \nVocê não digitou seu nome'); } 
        }

        else if(peso.value == ''){
            if(altura.value == ''){
                alert('Informações inválidas \nVocê não digitou seu peso e altura');
            }
            else{
                alert('Informação inválida \nVocê não digitou seu peso');
            }
        }
        
        else if(altura.value == ''){
            alert('Informação inválida \nVocê não digitou seu altura');
        }
    }

    else{
        const valorIMC = (peso / (altura*altura)).toFixed(2);

        resultado.textContent = valorIMC;
    }
}

calcular.addEventListener('click', imc);