const requestURL = "https://dragonball-api.com/api/characters/?limit=58"

async function fetchCharactersJson() {
    let response = await fetch(requestURL)
    let data = await response.json()
    let characters = data.items
    return characters
}

let container = document.getElementById("container")
    fetchCharactersJson().then(characters =>{
        characters.forEach(element => {
            container.innerHTML +=`
            <div class="imageCharacter">
                <img src="${element.image}" class="image" alt="${element.name}>
                <div class="name">
                    <h4 class="card-name">${element.name}</h4>
                    <h6 class="card-name">${element.race}</h4>
                </div>

                <div class="reverso">
                    <ul class="list-detail">
                        <li>KI: ${element.ki}</li>
                        <li>MaxKI: ${element.maxki}</li>
                        <li>Affiliation: ${element.affiliation}</li>
                    </ul>
                </div>
  
            </div>    
            `
            
        });
    })

