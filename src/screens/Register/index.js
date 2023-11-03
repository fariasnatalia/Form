
import { View } from "react-native";
import tailwind from "twrnc";
import { Formik } from 'formik'
import * as Yup from 'yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Button, TextInput, Image  } from '../../components'
import { auth, db } from '../../firebase'
import { collection, addDoc } from "firebase/firestore"

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
    confirmPassword: Yup.string()
      .required('Por favor, confirme sua senha.')
      .oneOf([Yup.ref('password')], 'As senhas não coincidem.')
      .min(8, 'A confirmação de senha deve ter 8 caracteres.'),
    mobile: Yup.string()
      .required('Por favor, insira seu número de celular.')
      .matches(/^\d{10}$/, 'O número de celular deve ter exatamente 10 dígitos.'),
  });
  

export default function Register({ navigation }){
    async function onSubmit(values, actions){
        try{
            const data = await createUserWithEmailAndPassword(auth, values.email, values.password)
            
            await addDoc(collection(db, 'users'),  {
                name: values.name,
                email: values.email,
                mobile: values.mobile,
                firebaseUid: data?.user?.uid,
                bikeRoubada: false
            })
            await AsyncStorage.setItem('userId', data?.user?.uid)
            navigation.navigate('Home')
        }catch(error){
            actions.setErrors({ email: 'Email já cadastrado, favor digitar outro'})
        }
    }   
    return (
        <View style={tailwind`flex-1 h-full w-full items-center justify-center bg-gray-950`}>
            <Image source={require( '../../../assets/bike-roubada.svg')} size="xl"  />
            <View style={tailwind`px-8 mt-4 w-full max-w-sm`}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            mobile: '',
                        }}
                        onSubmit={onSubmit}
                        validationSchema={SignupSchema}
                    >
                        {
                            ({ 
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <View style={tailwind`flex flex-col gap-4`}>
                                    <TextInput
                                        placeholder="Digite seu nome completo"
                                        autoCapitalize="none"
                                        keyboardType="name"
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        onBlur={() => setFieldTouched('name')}
                                        name="name"
                                        touched={touched}
                                        errors={errors}
                                    />  

                                    <TextInput
                                        placeholder="Digite seu endereço de e-mail"
                                        autoCapitalize="none"
                                        keyboardType="email"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
                                        name="email"
                                        touched={touched}
                                        errors={errors}
                                    />     

                                    <TextInput
                                        placeholder="Digite seu número de celular"
                                        autoCapitalize="none"
                                        value={values.mobile}
                                        onChangeText={handleChange('mobile')}
                                        onBlur={() => setFieldTouched('mobile')}
                                        name="mobile"
                                        touched={touched}
                                        errors={errors}
                                    />           

                                    <TextInput
                                        placeholder="Digite sua senha"
                                        secureTextEntry
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={() => setFieldTouched('password')}
                                        name="password"
                                        touched={touched}
                                        errors={errors}
                                    />

                                    <TextInput
                                        placeholder="Confirme sua senha"
                                        secureTextEntry
                                        value={values.confirmPassword}
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={() => setFieldTouched('confirmPassword')}
                                        name="confirmPassword"
                                        touched={touched}
                                        errors={errors}
                                    />

                                    <Button 
                                        text="Criar conta" 
                                        disabled={isSubmitting} 
                                        variant="success" 
                                        onPress={handleSubmit} 
                                    /> 

                                    <Button 
                                        text="Fazer Login" 
                                        disabled={isSubmitting} 
                                        onPress={() => navigation.navigate('Login')}
                                    /> 
                                </View>
                            )
                        }
                    </Formik>
            </View>
        </View>
    );
}