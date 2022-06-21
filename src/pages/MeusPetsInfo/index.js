import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import api from "../../api/api";
import { useIsFocused } from "@react-navigation/native";
import PetContext from "../../Hooks/pets";

export default function MeusPetsInfo(){
    const { informacaoPet } = useContext(PetContext);

    const isFocused = useIsFocused();

    const [pet, setPet] = useState({});
    const [vacina, setVacina] = useState({});
    
    useEffect(() => {
      api.get(`/pets/${informacaoPet}/?_embed=vacinas`).then((res) => setPet(res.data));
    }, [isFocused]);
    
    const formatarData = (data) => {
      return new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    };

   return (
       <>
       <ScrollView>
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
                        <Text style={styles.restInfo}>Data Nasc: {formatarData(pet.dataNascimento)}</Text>
                        <Text style={styles.restInfo}>Data de Cadastro: {formatarData(pet.dataRegistro)}</Text>
                </View>

        </TouchableOpacity>
            
        <View style={styles.vac}>
            {pet.vacinas?.length !== 0 ? (
              <>
                {pet.vacinas?.map((item, key) => (
                  <View style={styles.box} key={key}>
                    <Image
                      style={styles.imgVac}
                      source={require("../../assets/ImagemVacina.png")}
                    />
                    <View>
                      <Text style={styles.dados}>Vacina: {item.vacina}</Text>
                      <Text style={styles.dados}>Dose: {item.dose}</Text>
                      <Text style={styles.dados}>
                        Data Aplicação: {formatarData(item.dataAplicacao)}
                      </Text>
                    </View>
                  </View>
                ))}
              </>
            ) : (
              <Text>Você não tem nenhuma vacina</Text>
            )}
          </View>
          </ScrollView>  
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
