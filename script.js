const currentInput = document.querySelector("input[name=current-value]");
const discountInput = document.querySelector("input[name=discount-value]");
const resultInput = document.querySelector("input[name=result-value]");

function onCurrentChange() {
  const resValue = parseInt(resultInput.value) || 0;
  const discValue = parseFloat(discountInput.value) || 0.0;

  if (resValue !== 0) {
    calculateByResult();
  } else if (discValue !== 0) {
    calculateByPercent();
  }
}

function calculateByResult() {
  const currentValue = parseInt(currentInput.value) || 0;
  const resValue = parseInt(resultInput.value) || 0;

  if (currentValue == 0) {
    discountInput.value = 0;
    return;
  }

  const result = ((resValue - currentValue) / currentValue) * 100;
  discountInput.value = result;
}

function calculateByPercent() {
  const currentValue = parseInt(currentInput.value) || 0;
  const discValue = parseFloat(discountInput.value) || 0.0;

  if (currentValue == 0) {
    discountInput.value = 0;
    return;
  }

  const result = currentValue + currentValue * (discValue / 100);
  resultInput.value = result;
}
