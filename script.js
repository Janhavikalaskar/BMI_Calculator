const heightInput = document.getElementById('height');
const heightUnitSelect = document.getElementById('heightUnit');
const weightInput = document.getElementById('weight');
const weightUnitSelect = document.getElementById('weightUnit');
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', calculateBMI);
resetButton.addEventListener('click', resetCalculator);

function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = 'Please enter valid height and weight.';
        return;
    }

    const heightUnit = heightUnitSelect.value;
    const weightUnit = weightUnitSelect.value;

    let bmi;

    if (heightUnit === 'ft') {
        // Convert feet and inches to meters
        const heightInMeters = height * 0.3048;
        bmi = calculateBMIForKgM(weight, heightInMeters);
    } else {
        bmi = calculateBMIForKgM(weight, height);
    }

    displayBMIResult(bmi);
}

function calculateBMIForKgM(weightKg, heightM) {
    return (weightKg / (heightM * heightM)).toFixed(2);
}

function displayBMIResult(bmi) {
    let message = 'BMI: ' + bmi + ' - ';

    if (bmi < 18.5) {
        message += 'Underweight';
    } else if (bmi < 24.9) {
        message += 'Normal Weight';
    } else if (bmi < 29.9) {
        message += 'Overweight';
    } else {
        message += 'Obese';
    }

    resultDiv.textContent = message;
}

function resetCalculator() {
    heightInput.value = '';
    weightInput.value = '';
    resultDiv.textContent = '';
}