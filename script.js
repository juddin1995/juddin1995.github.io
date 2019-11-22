class Trainer{
    constructor(){
      this.pokemon=[];
    }
    all(){
      return this.pokemon;
    }
    add(pokemons){
      this.pokemon.push(pokemons);
    }
    get(name){
      for(let i=0; i<this.pokemon.length; i++){
        if (name === this.pokemon[i].name){
          return this.pokemon[i];
        }
      }
    }
}

class Pokemon {
    constructor(data) {
      this.name = name;
      this.sprite = sprite;
      this.hp= hp;
      this.attack = attack;
      this.defense = defense;
      this.ability = ability;
      this.page = page
      this.container = document.querySelector('#pokemonStats'+page);
      this.element = document.createElement("div")
    }
    display(){
      let pokeImage = document.getElementById('Img'+ this.page);
      pokeImage.src = this.sprite;
      let name = document.createElement('h2')
      name.innerHTML = "Name: " + this.name
      this.element.appendChild(name)
      this.container.appendChild(this.element)
      let hp = document.createElement('h3')
      hp.innerHTML = "HP: " + this.hp
      this.element.appendChild(hp)
      this.container.appendChild(this.element)
      let attack = document.createElement('h3')
      attack.innerHTML = "Attack: " + this.attack
      this.element.appendChild(attack)
      this.container.appendChild(this.element)
      let defense = document.createElement('h3')
      defense.innerHTML = "Defense: " + this.defense
      this.element.appendChild(defense);
      this.container.appendChild(this.element)
      let ability = document.createElement('h3')
      ability.innerHTML = "Ability: " + this.ability
      this.element.appendChild(ability)
      this.container.appendChild(this.element)
      console.log(this.ability);
    }
}

const pokedex = document.getElementById("pokedex");

console.log(pokedex)

var i = document.getElementById("search")

// number randomizer

queryPokemonAPI = () => {
    for(let i = 1; i <= 3; i++){
        var x = parseInt(prompt("Enter a pokemon id"))
        fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`)
        .then((resp) => { return resp.json()})
        .then((data => {
            console.log(data)
        }
    ))
}
}




// class Pokemon {
//     constructor(name, id, image, type) {
//         this.name = name
//         this.id = id
//         this.image = image
//         this.type = type
//     }
//     getName() {
//         return this.name
//     }
//     setName(name) {
//         this.name = name
//     }
// }

// class Trainer {
//     constructor(name) {

//     }
// }
// let pkmn = new Pokemon()
// };


/* fetchPokemon();

const fetchPokemon = () => {
    const promises = [];
    for(let i = 1; i <= 3; i++){
        x = Math.floor(Math.random() * 802) + 1;
        const url = `http://pokeapi.co/api/v2/pokemon/${x}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then( results => {
        const pokemon = results.map( data => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map( type => type.type.name).join(", "),
            // abilities: data.abilities.map( abilities => )
        }));
        console.log(pokemon)
        let pokemon1 = new Pokemon(pokemon.name, pokemon.id, pokemon.image, pokemon.type)
            pkmn = pokemon1 

        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;*/