let housing = document.querySelector("#housing");
let transport = document.querySelector("#transport");
let food = document.querySelector("#food");
let utilities = document.querySelector("#utilities");
let insurance = document.querySelector("#insurance");
let medicals = document.querySelector("#medicals");
let invest = document.querySelector("#invest");
let savings = document.querySelector("#savings");
let entertainment = document.querySelector("#entertainment");
let emergency = document.querySelector("#emergency");

let totalExpense = 0;
let totalIncome = 0;

// on submit of the form
document.querySelector("#expenseForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (totalIncome > 0) {
    document.getElementById("my-budget").style.display = "grid";
    document.getElementById("incomeError").style.display = "none";
  } else document.getElementById("incomeError").style.display = "flex";
});

document.querySelector("#set-expense").addEventListener("submit", function (e) {
  e.preventDefault();
  if (totalIncome > 0) {
    document.getElementById("my-budget").style.display = "grid";
    document.getElementById("incomeError").style.display = "none";
    document.getElementById("income-wrapper").classList.remove("hide");
  } else document.getElementById("incomeError").style.display = "flex";


  let housingIncome = (20 * totalIncome) / 100;
  let utilitiesIncome = (7 * totalIncome) / 100;
  let foodIncome = (13 * totalIncome) / 100;
  let medicalsIncome = (8 * totalIncome) / 100;
  let transportIncome = (7 * totalIncome) / 100;
  let insuranceIncome = (7 * totalIncome) / 100;
  let investIncome = (15 * totalIncome) / 100;
  let savingsIncome = (10 * totalIncome) / 100;
  let entertainmentIncome = (8 * totalIncome) / 100;
  let emergencyIncome = (5 * totalIncome) / 100;

  housing.value = housingIncome;
  utilities.value = utilitiesIncome;
  food.value = foodIncome;
  medicals.value = medicalsIncome;
  transport.value = transportIncome;
  insurance.value = insuranceIncome;
  invest.value = investIncome;
  savings.value = savingsIncome;
  entertainment.value = entertainmentIncome;
  emergency.value = emergencyIncome;

  expense.value =
    Number(housing.value) +
    Number(transport.value) +
    Number(food.value) +
    Number(utilities.value) +
    Number(insurance.value) +
    Number(medicals.value) +
    Number(invest.value) +
    Number(savings.value) +
    Number(entertainment.value) +
    Number(emergency.value);

  totalExpense = Number(expense.value);
  totalIncome = Number(income.value);

  budget.value = totalIncome - totalExpense;
  console.log(Number(budget.value));

  if (Number(budget.value) == 0)
    document.getElementById("expense-button").style.display = "flex";
  else document.getElementById("expense-button").style.display = "none";

  document.querySelector("#calcHousingIncome").innerHTML = "N" + housingIncome;

  document.querySelector("#calcTransportIncome").innerHTML =
    "N" + transportIncome;

  document.querySelector("#calcFoodIncome").innerHTML = "N" + foodIncome;

  document.querySelector("#calcUtilitiesIncome").innerHTML =
    "N" + utilitiesIncome;

  document.querySelector("#calcInsuranceIncome").innerHTML =
    "N" + insuranceIncome;

  document.querySelector("#calcMedicalIncome").innerHTML = "N" + medicalsIncome;

  document.querySelector("#calcInvestIncome").innerHTML = "N" + investIncome;

  document.querySelector("#calcSavingIncome").innerHTML = "N" + savingsIncome;

  document.querySelector("#calcEntertainIncome").innerHTML =
    "N" + entertainmentIncome;

  document.querySelector("#calcEmergencyIncome").innerHTML =
    "N" + emergencyIncome;

  // calculation of the percentages
  document.querySelector("#percHousing").innerHTML =
    (housingIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percTransport").innerHTML =
    (transportIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percFood").innerHTML =
    (foodIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percUtility").innerHTML =
    (utilitiesIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percInsurance").innerHTML =
    (insuranceIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percMedical").innerHTML =
    (medicalsIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percInvest").innerHTML =
    (investIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percSaving").innerHTML =
    (savingsIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percEntertainment").innerHTML =
    (entertainmentIncome * 100) / totalIncome.toFixed(2) + "%";

  document.querySelector("#percEmergency").innerHTML =
    (emergencyIncome * 100) / totalIncome.toFixed(2) + "%";
});

const setExpenseCalculator = () => {
  let expense = document.querySelector("#expense");
  let income = document.getElementById("income");
  let budget = document.querySelector("#budget");

  expense.value =
    Number(housing.value) +
    Number(transport.value) +
    Number(food.value) +
    Number(utilities.value) +
    Number(insurance.value) +
    Number(medicals.value) +
    Number(invest.value) +
    Number(savings.value) +
    Number(entertainment.value) +
    Number(emergency.value);

  housingIncome = housing.value;
  utilitiesIncome = utilities.value;
  foodIncome = food.value;
  medicalsIncome = medicals.value;
  transportIncome = transport.value;
  insuranceIncome = insurance.value;
  investIncome = invest.value;
  savingsIncome = savings.value;
  entertainmentIncome = entertainment.value;
  emergencyIncome = emergency.value;

  document.querySelector("#calcHousingIncome").innerHTML = "N" + housingIncome;

  document.querySelector("#calcTransportIncome").innerHTML =
    "N" + transportIncome;

  document.querySelector("#calcFoodIncome").innerHTML = "N" + foodIncome;

  document.querySelector("#calcUtilitiesIncome").innerHTML =
    "N" + utilitiesIncome;

  document.querySelector("#calcInsuranceIncome").innerHTML =
    "N" + insuranceIncome;

  document.querySelector("#calcMedicalIncome").innerHTML = "N" + medicalsIncome;

  document.querySelector("#calcInvestIncome").innerHTML = "N" + investIncome;

  document.querySelector("#calcSavingIncome").innerHTML = "N" + savingsIncome;

  document.querySelector("#calcEntertainIncome").innerHTML =
    "N" + entertainmentIncome;

  document.querySelector("#calcEmergencyIncome").innerHTML =
    "N" + emergencyIncome;

  // calculation of the percentages
  document.querySelector("#percHousing").innerHTML =
    ((housingIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percTransport").innerHTML =
    ((transportIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percFood").innerHTML =
    ((foodIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percUtility").innerHTML =
    ((utilitiesIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percInsurance").innerHTML =
    ((insuranceIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percMedical").innerHTML =
    ((medicalsIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percInvest").innerHTML =
    ((investIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percSaving").innerHTML =
    ((savingsIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percEntertainment").innerHTML =
    ((entertainmentIncome * 100) / totalIncome).toFixed(2) + "%";

  document.querySelector("#percEmergency").innerHTML =
    ((emergencyIncome * 100) / totalIncome).toFixed(2) + "%";

  totalExpense = Number(expense.value);
  totalIncome = Number(income.value);

  budget.value = totalIncome - totalExpense;

  if (Number(budget.value) == 0) {
    document.getElementById("expense-button").style.display = "flex";
  } else {
    document.getElementById("expense-button").style.display = "none";
  }
};

// CLOSE BUDGET FORM
const closeBudget = () => {
  document.getElementById("my-budget").style.display = "none";
};

// DISPLAYING USERS INCOME
const setIncome = () => {
  document.getElementById("incomeValue").value =
    document.getElementById("income").value;
  let income = document.getElementById("income");
  totalIncome = Number(income.value);

  console.log(document.getElementById("income").value);

  //   setExpenseCalculator();
};
