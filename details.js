const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14195l";

const detailsContainer = document.querySelector(".detailsContainer");

async function fetchDrink() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        console.log(json);

        const details = json.drinks;

        detailsContainer.innerHTML = "";

        details.forEach(function (details) {
            detailsContainer.innerHTML += `<div>
                                            <h1>${details.strDrink}</h1 >
                                            <p>Id: ${result.idDrink}</p>
                                            <p>Alcoholic: ${result.strAlcoholic}</p>
                                            </div>`
        })
    } catch (error) {
        detailsContainer.innerHTML = message("error", error);
    }
}

fetchDrink();