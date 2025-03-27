
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome,
            this.preco = preco,
            this.alturaCacamba = alturaCacamba,
            this.alturaVeiculo = alturaVeiculo,
            this.alturaSolo = alturaSolo,
            this.capacidadeCarga = capacidadeCarga,
            this.motor = motor,
            this.potencia = potencia,
            this.volumeCacamba = volumeCacamba,
            this.roda = roda,
            this.image = image
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw new Error("Você precisa passar um objeto da classe Car.");
    }
    if (el.checked) {
        if (carArr.length >= 2) {
            alert('Você só pode comparar dois carros!');
            el.checked = false;
            return;
        }
        carArr.push(carClass);
    } else {
        let i = GetCarArrPosition(carArr, carClass)
        if (i !== -1) {
            carArr.splice(i, 1);
        }
    }
}

function ShowCompare() {
    if (carArr.length != 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    carArr.slice(0, 2).map((car, i) => {
        document.getElementById(`compare_image_${i}`).innerHTML = (`<img src="${car.image}"width='200'>`);
        document.getElementById(`compare_modelo_${i}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `${car.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    });
}
