// re-use with different const text and inner html text, and create more divs in html file
const successContainer = document.querySelector(".success-container");
const infoContainer = document.querySelector(".info-container");
const errorContainer = document.querySelector(".error-container");
const warningContainer = document.querySelector(".warning-container");


successContainer.innerHTML = createToaster("success", " file is uploaded successfully");
infoContainer.innerHTML = createToaster("info", " file need more info");
errorContainer.innerHTML = createToaster("error", " file is not uploaded");
warningContainer.innerHTML = createToaster("warning", " file can't be more than 5mb");


