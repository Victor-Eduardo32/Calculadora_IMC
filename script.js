function calculate () {
    let peso = document.querySelector(".weight").value;
    let altura = document.querySelector(".height").value;
    const span = document.querySelector("span");
    const textArea = document.querySelector("textarea");
    let imc = peso / (altura * altura);
    

    if (peso <= 400 && altura <= 3) {
        if (imc <= 18.5) {
            textArea.innerHTML = "Seu índice de massa corporal é de " + imc.toFixed(2) + "\n" + "Você está abaixo do peso";
        } else if (imc >= 18.6 & imc <= 24.9) {
            textArea.innerHTML = "Seu índice de massa corporal é de " + imc.toFixed(2) + "\n" + "Você está no peso ideal";
        } else if (imc >= 25 & imc <= 29.9) {
            textArea.innerHTML = "Seu índice de massa corporal é de " + imc.toFixed(2) + "\n" + "Você está levemente acima do peso";
        } else if (imc >= 30 & imc <= 34.9) {
            textArea.innerHTML = "Seu índice de massa corporal é de " + imc.toFixed(2) + "\n" + "Você está com obesidade grau I";
        } else if (imc >= 35 & imc <= 39.9) {
            textArea.innerHTML = "Seu índice de massa corporal é de " + imc.toFixed(2) + "\n" + "Você está com obesidade grau II (severa)";
        } else if (imc >= 40) {
            textArea.innerHTML = "Seu índice de massa corporal é de " + imc.toFixed(2) + "\n" + "Você está com obesidade grau III (mórbida)";
        } 
    } else {
        return errorCalculate();
    }

    function errorCalculate() {
        if (peso > 400 || altura > 3) {
            span.classList.add("error");
            span.innerHTML = "Digite um valor válido";
        } else {
            return true;
        }
    }
}
