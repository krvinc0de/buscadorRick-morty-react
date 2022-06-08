import React from 'react';
import '../style.css'

const Tarjetas = ({name, gender, species, status, location, image}) => {
    return (
        <> 
            <img src={image} alt={name} className='card-img-top'/>
            <div className='card-body'>
                <h4>{name}</h4>
                <h6>Genero: {gender}</h6>
                <h6>Especie: {species}</h6>
                <h6>estado: {status}</h6>
                <h6>Ubicacion: {location}</h6>
            </div>
        </>
    );
}

export default Tarjetas;