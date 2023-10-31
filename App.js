import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  
} from 'react-native';
import React from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Por favor, insira seu nome completo.')
    .min(6, 'Nome muito curto.')
    .max(50, 'Nome muito longo.'),
  email: Yup.string()
    .required('Por favor, insira seu endereço de e-mail.')
    .email('Endereço de e-mail inválido.'),
  password: Yup.string()
    .required('Por favor, insira sua senha.')
    .min(8, 'A senha deve ter pelo menos 8 caracteres.')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-]).{8,}$/,
      'A senha deve conter pelo menos uma letra maiúscula e um caractere especial.'
    ),
  // confirmPassword: Yup.string()
  //   .required('Por favor, confirme sua senha.')
  //   .oneOf([Yup.ref('senha')], 'As senhas não coincidem.')
  //   .min(8, 'A confirmação de senha deve ter 8 caracteres.'),
  mobile: Yup.string()
    .required('Por favor, insira seu número de celular.')
    .matches(/^\d{10}$/, 'O número de celular deve ter exatamente 10 dígitos.'),
});

const App = () => {
  return (

    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',

      }}
      validationSchema={SignupSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}

    >
      {({ 
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.wrapper}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign Up!</Text>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputStyle} placeholder="Full Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name && (
                 <Text style={styles.errorTxt}>{errors.name}</Text>
              )}
             
            </View>
            

            <View style={styles.inputWrapper}>
              <TextInput 
              style={styles.inputStyle}
              placeholder="Email Address" 
              autoCapitalize={true}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                 <Text style={styles.errorTxt}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
              style={styles.inputStyle}
              placeholder="Password" 
              value={values.password}
              autoCapitalize={true}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              />
              {touched.password  && errors.password && (//Dispara quando ocorre algum erro!
                 <Text style={styles.errorTxt}>{errors.password }</Text>
              )}
            </View>

            {/* <View style={styles.inputWrapper}>
              <TextInput 
              style={styles.inputStyle} 
              placeholder="Confirm Password " 
              autoCapitalize={true}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
             
              />
              {touched.confirmPassword && errors.confirmPassword && (//Dispara quando ocorre algum erro!
                 <Text style={styles.errorTxt}>{errors.confirmPassword }</Text>
              )}
            </View> */}

            <View style={styles.inputWrapper}>
              <TextInput style={styles.inputStyle}
              placeholder=" Mobile No" 
              keyboardType='phone-pad'
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              onBlur={() => setFieldTouched('mobile')}
              />
              {touched.mobile && errors.mobile && (//Dispara quando ocorre algum erro!
                 <Text style={styles.errorTxt}>{errors.mobile}</Text>
              )}
            </View>
            

            <TouchableOpacity 
            onPress={handleSubmit}
            disabled={!isValid}
            style={[
              styles.submitBtn,
              {backgroundColor: isValid? '#395B64' : '#10b981' }, //altera a cor caso ocorra um evento
            ]}>
              <Text style={styles.submitBtnTxt}>Submmit</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}
    </Formik>

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
export default App;

