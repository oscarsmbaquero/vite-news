import { useContext } from 'react';
import NoticiasContext, { NoticiasProvider } from '../context/NoticiasProvider';

const useNoticias = () => {

    return useContext(NoticiasContext)
}

export default useNoticias;