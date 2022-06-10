import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import api from "../../api/api";
import PetContext from "../../Hooks/pets";

export default function MeusPetsInfo(){
    const { seila } = useContext(PetContext);

    const [pet, setPet] = useState({});
    console.log(pet);
    
    useEffect(() => {
        api.get(`/pets/${seila}`).then((res) => setPet(res.data));
    }, []);
    
        const dateNascimento = new Date(pet.dataNascimento);
        const formatDataNascimento = dateNascimento.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        const dateRegistro = new Date(pet.dataRegistro);
        const formatDataRegistro = dateRegistro.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

   return (
       <>
            <Text>{pet.name}</Text>
            <Text>{pet.raca}</Text>
            <Text>{pet.tipo}</Text>
            <Text>{pet.idade}</Text>
            <Text>{pet.peso}</Text>
            <Text>{formatDataNascimento}</Text>
            <Text>{formatDataRegistro}</Text>
       
       </>
   );
}
