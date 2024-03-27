



function PokemonCard({pokemon}){
  
 return <figure>
        <figcaption> {pokemon.name} </figcaption>
        {pokemon.imgSrc? <img src= {pokemon.imgSrc} /> : <p>???</p>}
        
    </figure>
}

export default PokemonCard;