alert (`the project has begun`)

class Pokemon {
    constructor(name, type, weight, moves) {
      this.name = name;
      this.type = type;
      this.weight = weight;
      this.moves = moves;
    }
  }
  
  const pokemonContainer = document.getElementById('pokemon-container');
  const searchInput = document.getElementById('search');
  
  fetch(' https://pokeapi.co/api/v2/pokemon/ditto.json')
    .then(response => response.json())
    .then(data => {
      const pokemons = data.map(pokemon => new Pokemon(pokemon.name, pokemon.type, pokemon.weight, pokemon.moves));
      displayPokemons(pokemons);
      searchInput.addEventListener('input', () => filterPokemons(pokemons));
    });
  
  const displayPokemons = (pokemons) => {
    pokemonContainer.innerHTML = pokemons.map(pokemon => `
      <div class="pokemon-card" onclick="showPokemonDetails('${pokemon.name}')">
        <h3>${pokemon.name}</h3>
        <p>${pokemon.type}</p>
      </div>
    `).join('');
  }
  
  const filterPokemons = (pokemons) => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
    displayPokemons(filteredPokemons);
  }
  
  const showPokemonDetails = (name) => {
    const pokemon = pokemons.find(pokemon => pokemon.name === name);
    // Show details in modal
  }



// const navbar = document.getElementById("navbar")
// const logo = document.getElementById("logo")
// const images = logo.querySelectorAll('img')
// const select = document.getElementById("slct")
// const container= document.getElementById('contenedor-pokemones')
// const search = document.getElementById('search')
// const btnSearch = document.getElementById('btn-search')
// const form = document.getElementById('form')

// /*
// // Crea una instancia de observer
// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     console.log(mutation.type);
//   });
// });
// // Configura el observer:
// var config = { attributes: true, childList: true, characterData: true };

// // pasa al observer el nodo y la configuracion
// observer.observe(contenedor, config);
// const comprobarHijos = () =>{  
//     console.log(contenedor.getAttribute('value'))
// }*/
// form.addEventListener('change',(e)=>{
//     e.preventDefault()
// })

// btnSearch.addEventListener('click',(e)=>{
//     e.preventDefault()
// })
// search.addEventListener('keyup',(e)=>{
//     comprobarVacio()
//     e.preventDefault()
//     if (e.target.value) {
//         limpiarContenedor()
//         const searchString = e.target.value
//         getSearchData(searchString.toLowerCase())
        
//     }
// })
// const comprobarVacio = () =>{
//     if (search.value) {
//         console.log("hay algo en el input text")
//     }else{
//         getInitialData()
//     }
// }

// const getSearchData = (string) =>{
//         fetch(`https://pokeapi.co/api/v2/pokemon?limit=897`)//897
//         .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//         .then(res=>res.json())
//         .then(res=>{
//             res.results.map((pokemon)=>{
//                 if (pokemon.name.startsWith(string) && pokemon.url!='https://pokeapi.co/api/v2/pokemon/5/' ) {
//                     //console.log(pokemon.url)
//                     fetch(pokemon.url)
//                     .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//                     .then(res=>res.json())
//                     .then(res=>{
//                         const fragment = document.createDocumentFragment()
//                         const div1 = document.createElement('div')
//                         div1.innerHTML = `
//                         <h1>${res.forms[0].name}</h1>
//                         <img width='140px' src='${res.sprites.front_default}'></img>
//                         <p>${res.stats[0].stat.name} = ${res.stats[0].base_stat}</p>
//                         <p>${res.stats[1].stat.name} = ${res.stats[1].base_stat}</p>
//                         <p>${res.stats[2].stat.name} = ${res.stats[2].base_stat}</p>
//                         <p>${res.stats[3].stat.name} = ${res.stats[3].base_stat}</p>
//                         <p>${res.stats[4].stat.name} = ${res.stats[4].base_stat}</p>
//                         `
//                         div1.classList.add('card-pokemon')
//                         fragment.appendChild(div1)
//                         contenedor.appendChild(fragment)
//                         contenedor.setAttribute('value','1')

//                     })
//                 }
//             })
//         }) 
// }

// window.addEventListener('scroll',()=>{
//     let scrollPosition = window.scrollY
//     if(scrollPosition>=170){
//         navbar.classList.replace('navbar-1','navbar-2')
//         imagenes[0].classList.replace('imagen-logo','imagen-logo-sm')
//         imagenes[1].classList.replace('imagen-logo-2','imagen-logo-2-sm')
//     }else{
//         navbar.classList.replace('navbar-2','navbar-1')
//         imagenes[0].classList.replace('imagen-logo-sm','imagen-logo')
//         imagenes[1].classList.replace('imagen-logo-2-sm','imagen-logo-2')
//     }
// })

// const getInitialData = () =>{
    
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)//897
//     .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//     .then(res=>res.json())
//     .then(res=>{
//         res.results.map((pokemon)=>{
//             //console.log(pokemon.url)
//             fetch(pokemon.url)
//             .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//             .then(res=>res.json())
//             .then(res=>{
//                 const fragment = document.createDocumentFragment()
//                 const div1 = document.createElement('div')
//                 div1.innerHTML = `
//                 <h1>${res.forms[0].name}</h1>
//                 <img width='140px' src='${res.sprites.front_default}'></img>
//                 <p>${res.stats[0].stat.name} = ${res.stats[0].base_stat}</p>
//                 <p>${res.stats[1].stat.name} = ${res.stats[1].base_stat}</p>
//                 <p>${res.stats[2].stat.name} = ${res.stats[2].base_stat}</p>
//                 <p>${res.stats[3].stat.name} = ${res.stats[3].base_stat}</p>
//                 <p>${res.stats[4].stat.name} = ${res.stats[4].base_stat}</p>
//                 `
//                 div1.classList.add('card-pokemon')
//                 fragment.appendChild(div1)
//                 contenedor.appendChild(fragment)
//                 contenedor.setAttribute('value','1')

//             })
        
//         })
//     }) 
//     /*
//     for (let index = 1; index <= 100; index++) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
//         .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//         .then(res=>res.json())
//         .then(res=>{
//             //console.log(res.stats[1])
//             //console.log(res.stats[0].stat.name)
            
//             const fragment = document.createDocumentFragment()
//             const div1 = document.createElement('div')
//             div1.innerHTML = `
//             <h1>${res.forms[0].name}</h1>
//             <img width='140px' src='${res.sprites.front_default}'></img>
//             <p>${res.stats[0].stat.name} = ${res.stats[0].base_stat}</p>
//             <p>${res.stats[1].stat.name} = ${res.stats[1].base_stat}</p>
//             <p>${res.stats[2].stat.name} = ${res.stats[2].base_stat}</p>
//             <p>${res.stats[3].stat.name} = ${res.stats[3].base_stat}</p>
//             <p>${res.stats[4].stat.name} = ${res.stats[4].base_stat}</p>
//             `
//             div1.classList.add('card-pokemon')
//             fragment.appendChild(div1)
            
//             contenedor.appendChild(fragment)
//         }) 
        
//     }*/
      
// }

// const cargarSelector = () =>{
//     fetch(`https://pokeapi.co/api/v2/type`)
//     .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//     .then(res=>res.json())
//     .then(res=>{
//         //console.log(res)
//         res.results.map((e,i=1)=>{
//             if (i<=17 ) {
//                 const option = document.createElement('option')
//                 option.setAttribute("value",i+1)
//                 option.innerText = e.name
//                 select.append(option)
//                 i++
//             }
//         })
//     })
// }

// select.addEventListener('change',(e)=>{
//     e.preventDefault()
    
//     limpiarContenedor()
//     //console.log(e.target.value)
//     for (let index = 1; index < 500; index++) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
//         .then(res=>res.ok==true ? Promise.resolve(res) : Promise.reject(res))
//         .then(res=>res.json())
//         .then(res=>{
//             const fragment = document.createDocumentFragment()
//             try {
//                 //console.log(res)
//                 res.types.map((em)=>{
//                     //console.log(em)
//                     if (em.type.url==`https://pokeapi.co/api/v2/type/${e.target.value}/`) {
//                         //console.log(res.types[0].type.url)
//                         const div1 = document.createElement('div')
//                         div1.innerHTML = `
//                         <h1>${res.forms[0].name}</h1>
//                         <img width='140px' src='${res.sprites.front_default}'></img>
//                         <p>${res.stats[0].stat.name} = ${res.stats[0].base_stat}</p>
//                         <p>${res.stats[1].stat.name} = ${res.stats[1].base_stat}</p>
//                         <p>${res.stats[2].stat.name} = ${res.stats[2].base_stat}</p>
//                         <p>${res.stats[3].stat.name} = ${res.stats[3].base_stat}</p>
//                         <p>${res.stats[4].stat.name} = ${res.stats[4].base_stat}</p>
//                         `
//                         div1.classList.add('card-pokemon')
//                         fragment.appendChild(div1)
//                         contenedor.appendChild(fragment)
//                     }
//                 })
                
//             } catch (error) {
//                 console.log(error)
//             } 
//         })
//     }
    
    
// })


// const limpiarContenedor =()=>{
//     contenedor.innerHTML = ''
// }
// cargarSelector()
// getInitialData()
