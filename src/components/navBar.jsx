function NavBar(props) {
    return (
        <>
            {props.pokemonIndex < props.pokemonList.length - 1 ? <button onClick={props.next}>suivant</button> : ""}
            {props.pokemonIndex > 0 ? <button onClick={props.previous}>précédent</button> : ""}
        </>
    )
}
export default NavBar;







