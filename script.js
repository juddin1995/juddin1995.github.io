for (let i = ; i <= 3; i++) {
    const url = `https://fizal.me/pokeapi/api/v2/id/${i}.json`
    fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon);
        });
}