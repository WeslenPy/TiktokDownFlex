import { Text, View,TouchableOpacity,TextInput,Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useState } from "react";


export default function Index() {
  const [value, setValue] = useState('');

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setValue(text);
  };


  return (
    <View className=" bg-sky-900 flex h-full  justify-center items-center ">
     
      
      <View className="relative">
        <Image source={require("../../assets/images/logo/tiktok.webp")} className="w-40 h-40 rounded-full mt-10"/>
        <View className="absolute left-28 bottom-5">
          <Octicons name="download" size={30} color="white" />
        </View>

      </View>


      <View className="flex-col w-full  h-96  justify-center items-center ">

        <View className="flex-row items-center mb-4">
          <TextInput className="w-80 h-14 rounded-lg bg-slate-200 mx-2" placeholder="Cole aqui o seu link do tiktok" value={value} onChangeText={setValue}/>
          <TouchableOpacity className="w-16 h-14" onPress={fetchCopiedText}>
            <View className="h-14 w-16 bg-green-500 rounded-lg justify-center items-center">
              <Feather name="clipboard" size={24} color="white" />
            </View>
            </TouchableOpacity>
        </View>

        <TouchableOpacity className="w-96 h-14">
            <View className=" bg-sky-500 w-96 h-14 rounded-lg justify-center items-center">
              <Text className="text-slate-50 text-lg">Buscar</Text>
            </View>
        </TouchableOpacity>


      </View>
    </View>
  );
}
