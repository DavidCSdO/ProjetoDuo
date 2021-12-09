import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import sty from './styles'


function Home() {
    return (
        
      
      <View style ={sty.container}>
    
        <View style ={sty.header}>
        <TouchableOpacity>
        <Image style={sty.icons} source={require('../../images/m.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={sty.i2} source={require('../../images/lg.png')}/>
        </TouchableOpacity>
         
        </View>

          
          
          <Text style ={sty.textoEx}>SITE DE VENDAS DE QUADROS DECORATIVOS
          Aqui você encontra itens decorativos para compor e deixar a sua decoração única e com a sua personalidade.
          Aposte em elementos simples e obtenha um ambiente aconchegante, elegante, moderno e diferenciado.
          </Text>

          <View>
          <TouchableOpacity>
          <Image style={sty.im1} source={require('../../images/q1.png')}/>
          <Text style={sty.tc1}> Quadro decorativo Mulher Collage
          R$ 51,99</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image style={sty.im2} source={require('../../images/q2.png')}/>
          <Text style={sty.tc2}> Conjunto de Quadros Arte moderna
          R$ 199,99</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image style={sty.im3} source={require('../../images/q3.png')}/>
          <Text style={sty.tc3}> Quadro decorativo Bem vindo
          R$ 199,99</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image style={sty.im4} source={require('../../images/q4.png')}/>
          <Text style={sty.tc4}> Quadro decorativo Paciência
          R$ 199,99</Text>
          </TouchableOpacity>

          </View>

      </View>

      
        
    )
}


export default Home
