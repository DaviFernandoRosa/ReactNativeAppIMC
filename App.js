import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
    const [peso, setPeso]= useState('');
    const [altura, setAltura] = useState('');


    function handleSubmit() {

      const alt = altura / 100;
      const imc = peso / (alt * alt);

      if(imc < 18.6){
        alert('Você está abaixo do peso! ' + imc.toFixed(2));
      }else if(imc >= 18.6 && imc < 24.9){
        alert('Peso ideal! ' + imc.toFixed(2));
      }else if(imc >= 24.9 && imc < 34.9){
        alert('Levemente acima do peso! ' + imc.toFixed(2));
      }
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.Input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />

<TextInput
        style={styles.Input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Altura (Cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttontext}>Calcular</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEDEE',
   
  },
  title:{
    color: '#000',
    textAlign: 'center',
    marginTop: 45,
    fontSize: 30
  },
  Input:{
    backgroundColor: '#c2e9fb',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color:'black',
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    margin: 15,
    backgroundColor: '#7526e0',
    padding: 10,
    },
  buttontext:{
    color: '#FFF',
    fontSize: 23

  }
});
