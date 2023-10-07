document
  .querySelector(".fetch-activity")
  .addEventListener("click", function () {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".activity").textContent = data.activity;
        document.querySelector(".container").classList.add("border");

      });
  });
