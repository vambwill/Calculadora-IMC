


const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('name').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    

    if(nome !== ''  && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(2);
        let classificação = '';

        if(valorImc < 18) {
            classificação = 'abaixo do peso.';
        } else if (valorImc >= 18 && valorImc < 25 ) {
            classificação = 'com peso normal.';
        } else if (valorImc >= 25 && valorImc < 30) {
            classificação = 'acima do peso.';
        } else {
            classificação = 'obeso.';
        }

        resultado.textContent = `Seu IMC é ${valorImc} e você está ${classificação}`

         } else {
        resultado.textContent = 'Por favor, preencha todos os campos.';
    }
        
}

calcular.addEventListener('click', imc);

