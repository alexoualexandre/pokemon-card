function NavBar(props) {
    const { pokemonList, next } = props;

    return (
        <>


            {pokemonList.map((elem, index) => (
                <button key={index} onClick={next} id={`img_${index}`} >{elem.name}</button>
            ))}




        </>

    )
    
}
export default NavBar;







