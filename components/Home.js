import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}>Tutulit's Burguer</Text>
      <ScrollView horizontal>
        <View style={estilo.card}>
          <Image
            style={estilo.img}
            source={require('../assets/burguer.jpg')}
          />
          <Text style={estilo.tituloCard}>1 Combo Tb Clássico</Text>
        </View>

        <View style={estilo.card}>
          <Image
            style={estilo.img}
            source={require('../assets/burguer2.jpg')}
          />
          <Text style={estilo.tituloCard}>2 Combo X-Tudo</Text>
        </View>

        <View style={estilo.card}>
          <Image
            style={estilo.img}
            source={require('../assets/burguer3.jpg')}
          />
          <Text style={estilo.tituloCard}>2 Combo X-Tudo</Text>
        </View>

        <View style={estilo.card}>
          <Image
            style={estilo.img}
            source={require('../assets/burguer4.jpg')}
          />
          <Text style={estilo.tituloCard}>2 Combo X-Tudo</Text>
        </View>

        <View style={estilo.card}>
          <Image
            style={estilo.img}
            source={require('../assets/burguer5.jpg')}
          />
          <Text style={estilo.tituloCard}>2 Combo X-Tudo</Text>
        </View>
      </ScrollView>
      <Text style={estilo.cardapio}>Cardápio</Text>
      <Text style={estilo.grelhado}>Sanduiches Grelhado</Text>
      
      <View style={estilo.cardGrelhado}>
        <Image
          style={estilo.imgGrelhado}
          source={require('../assets/burguer4.jpg')}
        />
        <Text style={estilo.tituloCard}>2 Combo X-Tudo</Text>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#FFDEAD',
    flex: 1,
  },
  img: {
    height: 200,
    width: 300,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    height: 245,

  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 40,
    fontWeight: 'bold',
  },
  tituloCard: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  cardapio: {
    fontSize: 21,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  grelhado: {
    fontSize: 21,
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imgGrelhado: {
    height: 160,
    width: 200,
  },
  cardGrelhado: {
    marginBottom: 245,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8
  }
});
