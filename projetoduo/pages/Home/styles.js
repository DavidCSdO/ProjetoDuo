import { StyleSheet } from 'react-native';

const sty = StyleSheet.create({

    textoEx: {
      fontSize: 23,
      width: 150,
      height: 300, 
      position: 'absolute',
      left: 240,
      top: 215,
      textAlign: 'center',
      color: 'white',
    },
  
    header:{
      alignItems: 'center',
      fontSize: 65,
      backgroundColor: '#fff'
    },
  
    container: {
        flex: 1, 
        backgroundColor: '#333',
       
        
    },
        imagem:{
            width: 200,
            height: 300,
            left: 10,
            top: 120,
            borderRadius: 10,
           
        }
    
});

export default sty; 
  