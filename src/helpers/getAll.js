
const getAll = async() => {

    const url = 'https://rickandmortyapi.com/api/character'

    const peticion = await fetch(url);
    const {results, info} = await peticion.json();
    const respResults = results.map( res => {
        return {
            id: res.id,
            name: res.name,
            gender: res.gender,
            species: res.species,
            status: res.status,
            location: res.location.name,
            image: res.image
        }
    })
    console.log(results);
    console.log(info);

}
getAll();
export default getAll;