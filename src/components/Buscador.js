import React, {useState} from 'react';

const Buscador = ({setPersonaje}) => {
    
    const [entrada, setEntrada] = useState('');

    const cambioTeclado = (evento) => {
        setEntrada(evento.target.value);
    }

    const enviar = (evento) => {
        evento.preventDefault();
        setPersonaje(entrada);
        setEntrada('');
    }

    return(
        <>
            <form onSubmit={ enviar }>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">personaje: </span>
                    <input 
                        type="text" 
                        value={ entrada }
                        onChange={ cambioTeclado }
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"
                        />
                </div>
            </form>
        </>
    );
}

export default Buscador;