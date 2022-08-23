import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import MyText from '../../Components/Ctext';
// import { Navigate } from '../../Components/Config';
import { navigate, Setroot } from '../../Components/Config';
// import { Context } from '../../../App';
import { Context } from '../../../Shared/Provider';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
export default function Splash({ navigation }) {

  const { loader, setLoader, Routrequest } = useContext(Context);
  const { t, i18n } = useTranslation()
  useEffect(() => {
    // setLoader(true)
    Routrequest.Login((e)=>{
      // setLoader(false)
      console.log(e,'here is the data========>')
      // setLoader(false)
    })
  
  },[])


  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <TouchableOpacity style={{ height: 50, backgroundColor: "blue", marginTop: 50 }} onPress={() => {

        setLoader(true)
      }}></TouchableOpacity>
      <MyText green title={t("Welcometext")} h1 />
      <MyText title={'Header 2'} red h2 />
      <MyText title={'Header 3'} h3 />
      <MyText title={'Header 4'} h4 />
      <MyText title={'Header 5'} h5 />
      <MyText title={'Small Text'} p />
      <MyText title={'Header 1'} h1 italic />
      <MyText title={'Header 1'} h1 bold />
      <MyText title={'Header 2'} h2 italic />
      <MyText title={'Header 2'} h2 bold />
      <MyText title={'Header 3'} h3 italic />
      <MyText title={'Header 3'} h3 bold />
      <MyText title={'Header 4'} h4 italic />
      <MyText title={'Header 4'} h4 bold />
      <MyText title={'Header 5'} h5 italic />
      <MyText title={'Header 5'} h5 bold />
      <MyText title={'Small Text'} p italic />
      <MyText title={'Small Text'} p bold />
    </View>
  );
}

const styles = StyleSheet.create({});
