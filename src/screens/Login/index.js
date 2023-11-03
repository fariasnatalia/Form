
import { View } from "react-native";
import tailwind from "twrnc";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { TextInput, Button, Image } from '../../components'
import { auth } from '../../firebase'

export default function Login({ navigation  }){
    async function onSubmit(values, actions){
        try{
            const data = await signInWithEmailAndPassword(auth, values?.email, values?.password)
            await AsyncStorage.setItem('userId', data?.user?.uid)
            navigation.navigate('Home')
        }catch(error){
            actions.setErrors({ email: 'Email ou senha inválidos',  password: 'Email ou senha inválidos'})
        }
    }   

    return (
        <View
            style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}
        >   
            <Image source={require( '../../../assets/bike-roubada.svg')}size="xl"  />
            <View style={tailwind`px-4 w-full max-w-sm`}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={onSubmit}
                >
                    {
                        ({ 
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <View style={tailwind`flex flex-col gap-4`}>
                                <TextInput 
                                    placeholder="Digite seu e-mail" 
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                    name="email"
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
                                <Button 
                                    disabled={isSubmitting} 
                                    onPress={handleSubmit} 
                                    text="Entrar" 
                                    variant="success" 
                                />
                                <Button 
                                    disabled={isSubmitting} 
                                    onPress={() => navigation.navigate('Register')} 
                                    text="Criar Conta"
                                />
                            </View>
                        )
                    }
                </Formik>
            <View style={tailwind`flex flex-row justify-between items-center my-8`}>
                
            </View>
            </View>
        </View>
    )
}