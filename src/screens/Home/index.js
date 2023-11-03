
import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import tailwind from "twrnc";
import { signOut } from 'firebase/auth'
import { Image, Switch  } from '../../components'
import { auth, db } from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"

export default function Home({ navigation }){
    const [bikeRoubada, setBikeRoubada] = useState(false)
    const [user, setUser] = useState({ name: ''})

    async function getUser(){
        const userId = await AsyncStorage.getItem('userId')
        const userRef = collection(db, "users");

        const userQuery = query(userRef, where("firebaseUid", "==", userId));

        const user = await getDocs(userQuery)
        user.forEach((doc) => {
            setUser({...doc.data(), id: doc.id})
            setBikeRoubada(doc.data()?.bikeRoubada)
        })
    }

    async function handleBikeRoubada(value){
       try{
            await updateDoc(doc(db, "users", user.id), {
                bikeRoubada: value
            })
            setBikeRoubada(value)
       }catch(error){
            console.log(error)
       }
    }

    async function logout(){
        await signOut(auth)
        await AsyncStorage.removeItem('userId')
        navigation.navigate('Login')
    }

    useEffect(() => {
        getUser()
    },[])

    return (
        <SafeAreaView style={tailwind`flex-1 w-full bg-gray-950`}>
            <View style={tailwind`flex-1 items-center justify-center gap-8`}>
                <Image source={require( '../../../assets/bike-roubada.svg')} size="xl"  />
                <View style={tailwind`gap-2 items-center`}>
                <Text style={tailwind`text-gray-50 text-3xl font-bold`}>
                    Olá, { user.name }
                </Text>
                </View>

                <View style={tailwind`flex-row items-center gap-2 px-8 mt-12`}>
                 <Text style={tailwind`text-gray-50 text-lg`}>Sua bike foi roubada? </Text>

                    <Switch 
                        value={bikeRoubada}
                        onValueChange={handleBikeRoubada}
                    />
                </View>

                <Pressable 
                    style={tailwind`flex-row items-center gap-2 px-8 mt-12`}
                    onPress={() => navigation.navigate('Login')}
                >
                    <MaterialIcons name="logout" size={24} color="#fff" />
                    <Text 
                        style={tailwind`text-gray-50 text-lg`}
                        onPress={logout}
                    >
                        Sair
                    </Text>
                </Pressable>
            </View>           
        </SafeAreaView>
    )
}