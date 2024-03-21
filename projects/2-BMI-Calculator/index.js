const form = document.querySelector("form");
const result = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value) / 100;
  const weight = parseInt(document.querySelector("#weight").value);

  const bmi = weight / (height * height);
  if (isNaN(height) || height < 0 || height === "") {
    result.innerHTML = "Invalid Height Provided!";
  } else if (isNaN(weight) || weight < 0 || weight === "")
    result.innerHTML = "Invalid weight Provided!";
  else result.innerHTML = `Result: ${bmi}`;
});
