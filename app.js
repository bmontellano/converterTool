const calculateBMIButton = document.getElementById("calculate-BMI-Button"),
      heightInput = document.getElementById("height-input"),
      weightInput = document.getElementById("weight-input");

const calculateBMI = () => {
  var enteredHeight = +heightInput.value,
      enteredWeight = +weightInput.value,
      bmi = enteredWeight / (Math.pow(enteredHeight,2));
      console.log(bmi);
}

calculateBMIButton.addEventListener('click', calculateBMI);
