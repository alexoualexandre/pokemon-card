import PropTypes from 'prop-types';



function PokemonCard({name,imgSrc}){
  
 return (<figure>
        <figcaption> {name} </figcaption>
        {imgSrc? <img src= {imgSrc} /> : <p>???</p>}
        
    </figure>)

}

PokemonCard.propTypes={
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export default PokemonCard;