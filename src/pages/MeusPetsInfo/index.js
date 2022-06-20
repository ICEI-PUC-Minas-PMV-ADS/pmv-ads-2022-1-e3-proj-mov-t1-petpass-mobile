import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import api from "../../api/api";
import PetContext from "../../Hooks/pets";

export default function MeusPetsInfo(){
    const { informacaoPet } = useContext(PetContext);

    const [pet, setPet] = useState({});
    const [vacina, setVacina] = useState({});
    
    useEffect(() => {
      api.get(`/pets/${informacaoPet}`).then((res) => setPet(res.data));
      api.get(`/vacinas/${informacaoPet}`).then((res) => setVacina(res.data));
    }, [informacaoPet]);
    
        const dateNascimento = new Date(pet.dataNascimento);
        const formatDataNascimento = dateNascimento.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        const dateRegistro = new Date(pet.dataRegistro);
        const formatDataRegistro = dateRegistro.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        const dateAplicacao = new Date(vacina.dataAplicacao);
        const formatDataAplicacao = dateAplicacao.toLocaleDateString('pt-BR', {timeZone: 'UTC'});



   return (
       <>
        <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={require("../../assets/Golden.jpg")}/>

                <View style={styles.infoContainer}>
                    <View style={styles.petInfo}>
                        <Text style={styles.name}>Nome: {pet.name}</Text>
                        <Text style={styles.raca}>Raça: {pet.raca}</Text>
                    </View>
                        <Text style={styles.restInfo}>Tipo: {pet.tipo}</Text>
                        <Text style={styles.restInfo}>Peso: {pet.peso}Kg</Text>
                        <Text style={styles.restInfo}>Idade: {pet.tipo}</Text>
                        <Text style={styles.restInfo}>Data Nasc: {formatDataNascimento}</Text>
                        <Text style={styles.restInfo}>Data de Cadastro: {formatDataRegistro}</Text>
                </View>


        </TouchableOpacity>
            
                    {vacina !== 0 ? ( 
                       <View style={styles.cardVac}>
                            <Image
                              style={styles.imgVac}
                              source={require("../../assets/ImagemVacina.png")}
                            />
                        <View style={styles.infoVac}>
                            <View>
                              <Text style={styles.name}>Vacina: {vacina.vacina}</Text>
                              <Text style={styles.restInfo}>Dose: {vacina.dose}</Text>
                              <Text style={styles.restInfo}>
                                Data Aplicação: {formatDataAplicacao}
                              </Text>
                            </View>
                        </View>
                     </View>
                    ) : (
                        <Text>Não tem vacinas cadastradas</Text>
                    )
                  }
           
       </>
   );
}

const styles = StyleSheet.create({
    card: {
        flexDirection:"row",
        marginVertical:20,
        marginHorizontal:10,
        backgroundColor: "#fff",
        borderRadius:15, 
        height:250
    },
    cardVac:{
      marginVertical:20,
      marginHorizontal:10,
      backgroundColor: "#fff",
      borderRadius:15, 
      height:200
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 50,
        margin: 10,
      },
      infoContainer:{
        padding:0.5
      },
      petInfo:{
        flexDirection:"column",
        justifyContent:"space-between",
        marginBottom:5,
        paddingVertical:20
      },
      name:{
        fontSize:20,
        fontFamily: "Roboto",
        fontWeight: "bold",
      },
      raca:{
        fontSize:18,
        fontWeight: "700",
        fontFamily: "Roboto",
      },
      restInfo:{
        fontSize:17,
        fontWeight: "400",
        color: "#787878"
      },

      infoVac: {
        paddingHorizontal:20,
      },
      imgVac: {
        width: 100,
        height: 100,
        borderRadius: 30,
        margin: 10,
      },


     
})
