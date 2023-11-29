const donateButton = document.getElementById("donateButton");
const mainHeading = document.getElementById("mainHeading"); 

donateButton.addEventListener("click", () => {
    let message = "Donate your spare limb";

    displayPopup(message);


    mainHeading.style.color = "#301934"; 
    mainHeading.style.fontSize = "67px"; 

});

function displayPopup(message) {
    const popupResult = window.confirm(message);
    if (popupResult) {
        alert("Thank you for your generosity! Repomen are on their way to take your donation ;)");
    }
}
