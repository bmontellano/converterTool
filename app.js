const calculateBMIButton = document.getElementById("calculate-BMI-Button"),
      resetBMIButton = document.getElementById("reset-BMI"),
      heightInput = document.getElementById("height-input"),
      weightInput = document.getElementById("weight-input");

const resetBMI = () => {
heightInput.value = '';
weightInput.value = '';
}

const calculateBMI = () => {
  var enteredHeight = +heightInput.value,
      enteredWeight = +weightInput.value,
      bmi = enteredWeight / (Math.pow(enteredHeight,2));
      console.log(bmi);
}

calculateBMIButton.addEventListener('click', calculateBMI);
resetBMIButton.addEventListener('click', resetBMI);
