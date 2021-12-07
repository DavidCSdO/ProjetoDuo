import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import st from './style'

function Shop() {
    return (
        
      
        <View style ={st.container}>
      
          <View style ={st.header}>
            <Text style ={st.texto}>The Ruin</Text>
          </View>
          <Text style={{fontSize: 50, textAlign: 'center'}}>Shop</Text>

  
            <Image style={st.imagem} source= {require ('../../images/c.png')}/>

            <Image style={st.imagem2} source= {require ('../../images/g.png')}/>

            <Image style={st.imagem3} source= {require ('../../images/s.png')}/>

            <Image style={st.imagem4} source= {require ('../../images/w.png')}/> 
            
  
            <Text style ={st.textoEx2}>
            Direitos de arte reservados a David Cardoso; 
            Direitos da aplicação reservados ao Grupo KDRF;
            </Text>
          
    
        </View>
          
      )
}

export default Shop
