
const getInfo = async (busqueda) => {

    const query = busqueda;
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURI(query)}`;

    const peticion = await fetch(url);
    const {results} = await peticion.json();
    const respuesta = results.map( resp => {
        return {
            name: resp.name,
            gender: resp.gender,
            species: resp.species,
            status: resp.status,
            location: resp.location.name,
            image: resp.image
        }
    })
    return respuesta;
}

export default getInfo;