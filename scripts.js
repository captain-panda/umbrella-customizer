document.addEventListener("DOMContentLoaded", function () {
  const colorButtons = document.querySelectorAll(".color-btn");
  const umbrella = document.getElementById("umbrella");
  const logoUpload = document.getElementById("logo-upload");
  const logoPreview = document.getElementById("logo-preview");

  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const color = button.getAttribute("data-color");
      umbrella.src = `assets/${color}_umbrella.png`;
      document.body.style.backgroundColor =
        getComputedStyle(button).backgroundColor;
    });
  });

  logoUpload.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        logoPreview.src = e.target.result;
        logoPreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });
});
