const requestDBZPlanetsURL = "https://dragonball-api.com/api/planets/?limit=20"


async function fetchPlanetsJson() {
  const response = await fetch(requestDBZPlanetsURL)
  const data = await response.json()
  const dbzPlanets = data.items
  return dbzPlanets
}

  let container = document.getElementById("container")
  fetchPlanetsJson().then(dbzPlanets =>{
      dbzPlanets.forEach(element => {
        container.innerHTML += `
        <div id="dbzPlanetItem">
        <div class="${element.name}">id.${element.id} </div>
        <img src="${element.image}" class="image" alt="Foto de planeta">
        <p>${element.name}</p>
        <p>${element.description}</p>
        <a>${element.isDestroyed}</a>
        </div>
    `
      });
  })




