import {useState, useEffect} from 'react';
import getInfo from '../helpers/getInfo'


const usePeticionInfo = (personaje) => {

    const [estado, setEstado] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getInfo(personaje)
            .then(resp => {
                setEstado({
                    data: resp,
                    loading: false
                });
            });
    }, [personaje])

    return estado;

}

export default usePeticionInfo;