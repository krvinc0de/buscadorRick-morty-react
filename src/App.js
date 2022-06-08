import React, {useState} from 'react';
import AppBar from './components/AppBar';
import Buscador from './components/Buscador';
import Tarjetas from './components/Tarjetas';
import usePeticionInfo from './hooks/usePeticionInfo';

//https://rickandmortyapi.com/
const App = () => {

  const [personaje, setPersonaje] = useState('morty');

  const {data, loading} = usePeticionInfo(personaje);
  // console.log(data);
  const demo = ['morty', 'rick', 'president'];

  return (
    <div className="App">
        <AppBar titulo={'rick and morty database'}/>
        <div className='container'>
          <h1>Buscar personajes de rick and morty</h1>
          <h6>puedes buscar personajes como: {
              demo.map(pers => {
                return(
                  <ul>{pers}</ul>
                )
              })
            }</h6>
          <Buscador setPersonaje={setPersonaje}/>
          <h3>{personaje}</h3>
          {
            loading && <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
          }
          <div className='row'>
            {
              data.map( resp => (
                <div className='col mx-4' key={resp.name}>
                  <div className='card'>
                  <Tarjetas 
                    key={resp.name}
                    {...resp}
                  /> 
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  );
}

export default App;
