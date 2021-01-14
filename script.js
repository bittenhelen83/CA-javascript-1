const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=all";

const resultsContainer = document.querySelector(".container");

async function fetchDrink() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        const results = json.drinks;

        resultsContainer.innerHTML = "";

        results.forEach(function (result) {
            resultsContainer.innerHTML += `<a href="details.html?id=${result.idDrink}" />
                                            <h1>${result.strDrink}</h1 >
                                            <p>Id: ${result.idDrink}</p>
                                            <p>Alcoholic: ${result.strAlcoholic}</p>
                                            </a> `
        })
    } catch (error) {
        resultsContainer.innerHTML = message("error", error);
    }
}

fetchDrink();

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(subject.value, 3) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateEmail(email.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}