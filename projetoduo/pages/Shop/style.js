import { StyleSheet } from "react-native";

const st = StyleSheet.create({

    textoEx: {
      fontSize: 18,
      width: 300,
      height: 300, 
      position: 'absolute',
      left: 60,
      top: 465,
      textAlign: 'center',
      color: '#333'
    },
    i2:{
      
      top: -40,
      alignSelf: 'center',
      
  },
  icons:{
    top: 20,
    width:45,
    height:45   ,
    marginBottom: 0,    
  },
  header:{
    justifyContent: 'space-between',
    fontSize: 90,
    backgroundColor: '#fff',
   
  },

    textoEx2: {
      fontSize: 18,
      width: 380,
      height: 300, 
      position: 'absolute',
      top: 500,
      left: 10,
      margin: 0,
      fontFamily:'Josefin Sans',
      justifyContent: 'flex-start'
    },
    textoEx3: {
      fontSize: 18,
      width: 300,
      height: 300, 
      position: 'absolute',
      top: 570,
      left: 40,
      textAlign: 'center',
      margin: 0,
      fontFamily:'Josefin Sans',
      justifyContent: 'flex-start'
    },
  
    header:{
      justifyContent: 'space-around',
      fontSize: 90,
      backgroundColor: '#fff'
    },
  
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
        height:1000,       
    },

    imagem:{
      width: 390,
      height: 390,
            left: 11,
            top: -50,
                    
    },

    imc:{
      width: 390,
      height: 600,
      left: 11,
      top: 110,
      borderRadius: 10,        
},
    
    texto: {
      fontSize: 50, 
      color: '#333',
      textAlign: 'center',
    },

    
    
    next: {
      fontSize: 24,
      left: 105,
      top: 140,
    }
    
});

export default st; 
