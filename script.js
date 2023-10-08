const pokedex = document.getElementById('pokedex');

const getTypeColor = type => {
    const normal = '#F5F5F5'
    return {
      normal,
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      ice: '#DEF3FD',
      water: '#DEF3FD',
      ground: '#F4E7DA',
      rock: '#D5D5D4',
      fairy: '#FCEAFF',
      poison: '#98D7A5',
      bug: '#F8D5A3',
      ghost: '#CAC0F7',
      dragon: '#97B3E6',
      psychic: '#EAEDA1',
      fighting: '#E6E0D4'
    }[type] || normal
  }


const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <=300; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            weight: result.weight,
            height: result.height,
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};



const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card" style="width: 15rem; padding:10px; margin:20px; background-color: ${getTypeColor(pokeman.type)};">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <p class="card-subtitle">Taille: ${pokeman.height}</p>
            <p class="card-subtitle">Poids: ${pokeman.weight}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};
fetchPokemon();

const url = `https://pokeapi.co/api/v2/pokemon/2`;
fetch(url)
.then(res =>{
  return res.json();
})

.then(data => {
  console.log(data);
});