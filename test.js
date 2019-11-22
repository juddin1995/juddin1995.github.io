// Trainer class containing pokemons
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
  // Pokemon class with the main properties
  class Pokemon {
    constructor(name, sprite, hp, attack, defense, ability, page) {
      this.name= name;
      this.sprite= sprite;
      this.hp= hp;
      this.attack= attack;
      this.defense= defense;
      this.ability= ability;
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
  axios.get("https://fizal.me/pokeapi/api/v2/name/gengar.json")
    .then(function (answer){
    console.log(answer);
    let page = '1'
    let name = answer.data.name;
    let sprite = answer.data.sprites.front_default;
    let hp = answer.data.stats[5].base_stat;
    let attack =  answer.data.stats[4].base_stat;
    let defense = answer.data.stats[3].base_stat;
    let ability =answer.data.abilities[0].ability.name
    let Pangoro = new Pokemon( name, sprite, hp, attack ,defense, ability,page );
    Pangoro.display();
  })