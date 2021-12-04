import React from 'react';
import { Image, Text, View } from 'react-native';
import sty from './styles'



function Home() {
    return (
        
      
        <View style ={sty.container}>   
        <Text style ={sty.header}>The Ruin</Text>
        <Image style={sty.imagem} source={require('../../images/c.png')}/>
        <Text style ={sty.textoEx}> NFT NFT NFT NFT NFTN NFTN FN TNF NT FN TN FNFN TN FNTN FNTN FN TNF TNF NFT</Text>
  
      </View>
        
    )
}


export default Home
