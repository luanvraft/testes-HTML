const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () =>{
    let qrValue = qrInput.value;
    if (!qrValue) {
        alert('Insira uma URL ou texto para gerar um QRCode')
        return;
    }
    generateBtn.innerText = "Gerando um QRCode...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data${qrValue}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QRCode";
        container.classList.add('active');
    });
});

qrImg.addEventListener('keyup', () => {
    if (!qrImg.value) {
        container.classList.remove('active');
    };
});