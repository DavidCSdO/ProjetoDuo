import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import sty from './styles'


// const fotox = [
//  <Image source={require('../../images/g.png')}/>,
//  <Image source={require('../../images/s.png')}/>,
//  <Image source={require('../../images/w.png')}/>
//  ]

//  class FotoxAl extends Component {
//   constructor(){
//     super();
//     this.state = {
//       <Image source= {require ('../../images/c.png')} />
//     }
//   }   trocarFt = () => this.setState({ foto: fotox[Math.floor(Math.random() * fotox.length)]})
//  render() {
//     return (
//      <View>
//         <Image>{this.state.fotox}</Image>
//         <TouchableOpacity onPress={() => this.trocarFrase()}>
//           <Text style={{ fontSize: 30 }}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

function Home() {
    return (
        
      
      <View style ={sty.container}>
    
        <View style ={sty.header}>
          <Text style ={sty.texto}>The Ruin</Text>
          <Image style={sty.icons} source={require('../../images/dm.png')}/>
        </View>

          <Image style={sty.imagem} source= {require ('../../images/c.png')}/>
          
          <Text style ={sty.textoEx}>Venda de arte digital
                                  Produtos 100% originais
                                  com todas as permissões e direitos autorais!
                                  NFT’s de raridade alta e qualidade.
                                  Ganhe guerras de montrinhos com a nossa vasta coleção de “cartas”.
          </Text>
          <TouchableOpacity>
              <Text style={sty.next}>Next</Text>
          </TouchableOpacity>

          <Text style ={sty.textoEx2}>
            Produtos direcionados ao público adepto a esquemas de pirâmide e batalhas de criaturas virtuais que só vão te destruir!
          </Text>
        
  
      </View>
        
    )
}


export default Home
