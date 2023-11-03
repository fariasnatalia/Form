import { useState } from "react";
import { TextInput as DefaultTextInput, View, StyleSheet, Text } from "react-native";
import tailwind from "twrnc";

export const TextInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = () => {
    setIsFocused(false);
  };

  const touched = props?.touched
  const errors = props?.errors
  const error = touched?.[props.name] && errors?.[props.name] 

  return (
   <View style={styles.inputWrapper}>
      <DefaultTextInput
        {...props}
        onFocus={handleFocus}
        onEndEditing={handleEndEditing}
        style={[
          tailwind`w-full bg-white border border-gray-200 rounded-md h-12 px-4`,
          isFocused ? tailwind`border-blue-400` : {},
          props.style,
        ]}
        placeholderTextColor={tailwind.color("text-gray-950")}
      />
      {error && (
          <Text style={styles.errorTxt}>{errors?.[props.name]}</Text>
        )}
   </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
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
  errorTxt: {
    fonSize: 12,
    color: '#ff0D10',

  },
  submitBtn:{ //botão em SÍ
    //backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: { //texto do botão
    color: '#000',
    textAlign: 'center',
    fonSize: 18,
    fontWeight: '700',
  },

});