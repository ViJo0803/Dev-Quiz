import React,{useState} from "react";
import {View,Button,TextInput,ScrollView,StyleSheet,Text, ListViewComponent, FlatList} from "react-native"

const CalcularVuelta =()=>{
    const[grifo,setGrifo]=useState("")
    const[costo,setCosto]=useState("")
    const[resultado,setResultado]=useState("")

    const Calcular=()=>{
      if(!grifo){
        alert("ingrese datos en grifo")
      }else{
        if(!costo){
          alert("ingrese datos en costos")
        }else{
          var g=grifo.value.split(',')
          var c=costo.value.split(',')
          if(g.length!==c.length){
            alert("Ingrese la misma cantidad de numeros enteros separados por comas")
        }else{      
          
          let aux=0;
          for(let i=0;i<=g.length;i++){
              if(g[i]>c[i]){
              let gf=g.slice(i).concat(g.slice(0,i))
              let cf=c.slice(i).concat(c.slice(0,i))
              for(let j=0;j<gf.length;j++){
                  if(gf[j]-cf[j]>-1){
                      aux=aux+gf[j]-cf[j]
                  }else{
                    setResultado("-1")
                      return console.log("-1") 
                     }
                     if(aux>=gf[0]){
                       setResultado(i)
                      return console.log(i)
                     } 
                 
              }
              
          }else{
            setResultado("-1")
              return console.log("-1") 
             }
          
          }
        }
       
        } 
      }
      
    
    }
    const handleChangeTextGrifo=(value)=>{
        setGrifo({...grifo,value})
    }

    const handleChangeTextCosto=(value)=>{
        setCosto({...costo,value})
    }


    return(
        <ScrollView style={styles.container}>
        {/* grifos */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Ingrese valor de grifos"
            onChangeText={(value)=>handleChangeTextGrifo(value)}
          />
        </View>
  
        {/* Costos*/}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Ingrese costos"
            onChangeText={(value)=>handleChangeTextCosto(value)}
      
          />
        </View>
        <View>
          <Text>Resultado</Text>
      <Text>{resultado}</Text>
       
        </View>
        <View style={styles.button}>
          <Button title="Calcular" onPress={() =>Calcular ()} />
        </View>
      </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default CalcularVuelta