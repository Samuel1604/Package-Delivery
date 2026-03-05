const destinationZone = document.getElementById("destination");
const weight = document.getElementById("weight");
const baseCost = 1500;
const isExpressDelivery = document.getElementById("delivery");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let totalCost =
    destinationZone.value === "Ibadan"
      ? baseCost + 5000
      : destinationZone.value === "Lagos"
        ? baseCost + 1000
        : destinationZone.value === "Abeokuta"
          ? baseCost + 2000
          : baseCost;

  if (weight.value > 5) {
    totalCost += 1500;
  }

  if (isExpressDelivery.checked) {
    totalCost *= 1.5;
  }

  let sum = `The total shipping cost for your ${weight.value}kg package to Zone ${destinationZone.value} is N${totalCost}.`;
  if (destinationZone.value === "" || weight.value <= 0) {
    sum = `Enter destination, weight and select a delivery option`;
    document.getElementById("sum").textContent = sum;
  } else {
    document.getElementById("sum").textContent = sum;
  }
});
