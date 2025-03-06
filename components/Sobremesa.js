import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

export default function Sobremesa() {
  return (
    <SafeAreaView style={estilo.container}>
      <ScrollView horizontal>
        <View style={estilo.card}>
          <Image
            style={estilo.img}
            source={require('../assets/casquinha.png')}
          />
        </View>
      </ScrollView>

      <Text style={estilo.Sobremesa}>Sobremesas</Text>

      <ScrollView horizontal>
      <View style={estilo.cardSobremesa}>
        <Image
          style={estilo.imgSobremesa}
          source={require('../assets/ai-generated-8772026_640.jpg')}
        />
        <Text style={estilo.tituloCard}>MilkShake/Café</Text>     
      </View>
      </ScrollView>
      <ScrollView horizontal>
      <View style={estilo.cardSobremesa}>
        <Image
          style={estilo.imgSobremesa}
          source={require('../assets/donuts-7927510_640.jpg')}
        />
        <Text style={estilo.tituloCard}>Donuts Tradicionais</Text>     
      </View>
      <View style={estilo.cardSobremesa}>
        <Image
          style={estilo.imgSobremesa}
          source={require('../assets/donuts-5671538_640.jpg')}
        />
        <Text style={estilo.tituloCard}>Donuts c/ Confeitos</Text>     
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#FFDEAD',
    flex: 1,
  },
  img: {
    height: 250,
    width: 490,
    marginTop: 50,
    marginLeft: -11
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    height: 350,

  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 40,
    fontWeight: 'bold',
    marginBottom: 8
  },
  tituloCard: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardapio: {
    fontSize: 21,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  Sobremesa: {
    fontSize: 21,
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imgSobremesa: {
    height: 160,
    width: 175,
    borderRadius: 10, 
  },
  cardSobremesa: {
    marginBottom: 18,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    marginRight: 2,
  },
});
