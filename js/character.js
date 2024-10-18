const requestURL = "https://dragonball-api.com/api/characters/?limit=58"

async function fetchCharactersJson(params) {
    let response = await fetch(requestURL)
    let data = await response.json()
    let characters = data.items
    console.log(characters)
}

