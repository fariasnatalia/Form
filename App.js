import { StatusBar, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import React from 'react-native';


const App = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={'light-content'}/>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up!</Text>
        
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder= "Nome completo" />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder= "Email" />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder= "Telefone" />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder= " Senha " />
        </View>

        {/* <Touchable onPress={() => {}} */}

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3333',
  
  },
  formContainer: {
    backgroundColor: '#f5EDDC',
    padding: 20,
    borderRadius: 20,
    width: '100%',  // Defina a largura 
  },
  title:  {
    color: '#16213E',
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 15,
  },
  inputWrapper:{
    marginBottom: 15,

  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  erroTxt: {
    fonSize: 12,
    color: '#ff0D10',

  },
  submitBtn:{ //botão em SÍ
    backgroundColor: ' #395B64',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: { //texto do botão
    color: '#fff',
    textAlign: 'center',
    fonSize: 18,
    fontWeight: '700',
  },



});
export default App;

