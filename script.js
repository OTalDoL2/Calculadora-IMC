
const calcular =  document.getElementById('calculate');

function imc() {
    const nome = document.getElementById('name');
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
            alert('Informação inválida \nVocê não digitou sua altura');
        }
    }

    // else if(nome.value !== '' || peso.value !== '' || altura.value !== '')
    else { 
        const valorP = peso.value;
        const valorA = altura.value;
        
        const valorIMC = (valorP / (valorA * valorA)).toFixed(1);
        
        let classific = '';
        
        if(valorIMC < 18.5){
            classific = 'abaixo do peso'
        }

        else if(valorIMC < 25){
            classific = 'peso ideal, boa!'
        }
        else if(valorIMC < 30){
            classific = 'um pouco acima do peso!'
        }
        else if(valorIMC < 35){
            classific = 'obesidade grau I'
        }
        else if(valorIMC < 40){
            classific = 'obesidade grau II'
        }
        else{
            classific = 'obesidade grau III, cuidado!'
        }
        
        resultado.textContent = `${nome.value} seu IMC é de ${valorIMC}, e isso significa que ${classific}` ;
        
        
    }
    // else if(nome.value !== '' || peso.value !== '' || altura.value !== ''){
    //     const valorIMC = (peso / (altura*altura)).toFixed(2);
    //     resultado.textContent = valorIMC;
    // }
}

calcular.addEventListener('click', imc);