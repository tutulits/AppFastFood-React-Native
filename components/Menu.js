import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <ScrollView style={estilo.container}>
      <View style={estilo.corMenu}>
        <Image
          style={estilo.img}
          source={require('../assets/logo.png')}
        />
        <Text style={estilo.fonte}>Início</Text>
        <Text style={estilo.fonte}>Cupons</Text>
        <Text style={estilo.fonte}>Delivery</Text>
        <Text style={estilo.fonte}>Restaurantes</Text>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  corMenu: {
    backgroundColor: '#FFDEAD',
    height: 450,
  },
  img: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  fonte: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Roboto-bold',
    marginLeft: 20,
    marginTop: 15,
    fontWeight: 'bold'
  },
});
