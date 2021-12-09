import React from 'react';
import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import st from './style'

function Shop() {
    return (
        
      <ScrollView>
        <View style ={st.container}>
      
          <View style ={st.header}>
          <TouchableOpacity>
            <Image style={st.icons} source={require('../../images/m.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={st.i2} source={require('../../images/lg.png')}/>
            </TouchableOpacity>
 
          </View>
          <TouchableOpacity>
            <Image style={st.imagem} source= {require ('../../images/f1.png')}/>
            </TouchableOpacity>
            <Text style ={st.textoEx}>

            Quadro Decorativo Mulher Collage

            </Text>

            <Text style ={st.textoEx2}>
            - FEITO COM MOLDURA EM MADEIRA MACIÇA
            - ACRÍLICO DE 2MM SOBRE A ARTE
            </Text>

            <Text style ={st.textoEx3}>
            - R$ 51,90
            6x de R$ 8,67 no cartão
            </Text>

            <Image style={st.imc} source= {require ('../../images/cp.png')}/>
          
    
        </View>
        </ScrollView>   
      )
}

export default Shop
