import { StyleSheet } from 'react-native';

const sty = StyleSheet.create({

    textoEx: {
      fontSize: 18,
      width: 400,
      height: 300, 
      position: 'absolute',
     
      top: 90,
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Josefin Sans'
    },

    textoEx2: {
      fontSize: 18,
      width: 400,
      height: 300, 
      position: 'absolute',
      top: 685,
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Josefin Sans'
    },
  
    header:{
      justifyContent: 'space-between',
      fontSize: 90,
      backgroundColor: '#fff',
     
    },
  
    container: {
        display: 'flex',
        flex: 1, 
        backgroundColor: '#fff', 
        
             
    },

    imagem:{
            width: 240,
            height: 300,
            left: 10,
            top: 140,
            borderRadius: 10,        
    },

    im1:{
      width: 170,
      height: 170,
      left: 10,
      top: 150,
         
},

im2:{
  width: 170,
  height: 170,
  left: 230,
  top: -90,
        
},

im3:{
  width: 170,
  height: 170,
  left: 10,
  top: -70,
      
},

im4:{
  width: 170,
  height: 170,
  left: 230,
  top: -310,
       
},


    texto: {
      fontSize: 50, 
      color: '#333'
    },

    icons:{
      top: 20,
      width:45,
      height:45   ,
      marginBottom: 0,    
    },

    i2:{
      
      top: -40,
      alignSelf: 'center' 
  },

    tc1: {
      fontSize: 20,
      left: 10,
      top: 150,
      height:70,
      width:190,
      margin:0
    },
    tc2: {
      fontSize: 20,
      left: 230,
      top: -90,
      height:70,
      width:190,
      margin:0,
     
    },
    
    tc3: {
      fontSize: 20,
      left: 10,
      top: -70,
      height:70,
      width:190,
      margin:0
    },
    tc4: {
      fontSize: 20,
      left: 220,
      top: -310,
      height:70,
      width:190,
      margin:0,
    },
    
    
});

export default sty; 
  