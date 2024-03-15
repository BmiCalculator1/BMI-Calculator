const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.textContent = 'Please enter valid height and weight.';
    return;
  }

  const bmi = weight / (height / 100) ** 2;

  const bmiInterpretation = interpretBMI(bmi);
  const bmiRecommendation = recommendAction(bmi);

  resultDiv.innerHTML = `
    <p>Your BMI is: ${bmi.toFixed(2)}</p>
    <p>${bmiInterpretation}</p>
    <p>${bmiRecommendation}</p>
  `;
});

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal weight';
  } else if (bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

function recommendAction(bmi) {
  if (bmi < 18.5) {
    return 'Here are some recommendations for people who are underweight: <br><br> Diet: <br><br> <ul> <li>Focus on nutrient-dense foods: Prioritize whole grains, fruits, vegetables, lean protein sources (fish, chicken, beans, lentils), and healthy fats (nuts, seeds, avocados). These foods provide essential vitamins, minerals, and calories for healthy weight gain. <br><br> <li>Increase calorie intake: Aim to consume slightly more calories than you burn each day to promote gradual weight gain. Consider adding calorie-dense snacks between meals, such as smoothies with whole milk and fruit, nut butter sandwiches on whole-wheat bread, or trail mix. <br><br> <li>Eat regular meals and snacks: Don\'t skip meals. Aim for three meals and two to three healthy snacks throughout the day to maintain consistent calorie intake. <br><br> <li>Consider meal replacements: If you struggle to eat enough throughout the day, consult a healthcare professional about high-calorie, nutrient-rich meal replacements. </ul>';
  } else if (bmi < 25) {
    return 'Your weight falls within a healthy range. Keep up the good work with your healthy habits!';
  } else if (bmi < 30) {
    return 'It might be beneficial to focus on incorporating more physical activity and balanced nutrition into your routine to maintain a healthier weight.';
  } else {
    return 'It\'s important to prioritize your health by making gradual changes to your lifestyle, such as adopting a balanced diet and increasing physical activity, to manage your weight and reduce health risks. Consulting a healthcare professional can provide personalized guidance and support.';
  }
}