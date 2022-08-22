import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useNoticias from '../hooks/useNoticias';

const Formulario = () => {

    const { categoria, handleChangeCategoria } = useNoticias()

    const categorias = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

  return (
   <form>
       <FormControl fullWidth>
         <InputLabel>Categotia</InputLabel>
         <Select 
            label="categoria"
            onChange={handleChangeCategoria}
            value={categoria}
            >
             {categorias.map(categoria =>(
                <MenuItem key={categoria.value} value={categoria.value}>
                    {categoria.label}
                </MenuItem>
             ))}
         </Select>
         {/* <Box sx={{marginTop:2}}>
         <Button fullWidth variant='contained' color='secondary'>Buscar</Button>
         </Box> */}
         
       </FormControl>
   </form>
  )
}

export default Formulario