const requestDBZPlanetsURL = "https://dragonball-api.com/api/planets/?limit=20"
const requestDBZCharactersURL =
  "https://dragonball-api.com/api/characters/?limit=58"

  

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


/*
    for (let index = 0; index < items.length; index++) {
        let idPlanet = items.dbzPlanets[index].id
        let namePlanet = items.dbzPlanets[index].name
        let isDestroyedPlanet = items.dbzPlanets[index].isDestroyed
        let descriptionPlanet = items.dbzPlanets[index].description
        let imagePlanet = items.dbzPlanets[index].image
        let dbzPlanet = [idPlanet,namePlanet,isDestroyedPlanet,descriptionPlanet,imagePlanet]
    }


    let container = document.getElementById("container")
    })
*/

