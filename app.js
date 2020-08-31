const calculateBMIButton = document.getElementById("calculate-BMI-Button"),
      resetBMIButton = document.getElementById("reset-BMI"),
      heightInput = document.getElementById("height-input"),
      weightInput = document.getElementById("weight-input"),
      bmiResultArea = document.getElementById("bmi-result");

const resetBMI = () => {
heightInput.value = '';
weightInput.value = '';
}

const calculateBMI = () => {
  var enteredHeight = +heightInput.value,
      enteredWeight = +weightInput.value,
      bmi = enteredWeight / (Math.pow(enteredHeight,2));

      if(isNaN(bmi)) {
        alert('Input not number');
      } else {
        const resultElement = document.createElement('ion-card');
        resultElement.innerHTML = `
        <ion-card-content>
        <h2>${bmi}</h2>
        </ion-card-content>
        `;
        bmiResultArea.innerHTML = '';
        bmiResultArea.appendChild(resultElement);
      }
}

calculateBMIButton.addEventListener('click', calculateBMI);
resetBMIButton.addEventListener('click', resetBMI);
