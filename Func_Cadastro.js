import { useNavigation } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export function LoginFunc() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/Captura de tela 2026-09-18 225714.png')}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Menu de navegação</Text>
      <Text style={styles.subtitulo}>Escolha uma das telas do aplicativo.</Text>

      <View style={styles.cartao}>
        <Text style={styles.tituloOpcao}>Tela de formulário</Text>
        <Text style={styles.textoOpcao}>Cadastre uma nova reserva.</Text>
        <Button title="Abrir formulário" color="#a9472b" onPress={() => navigation.navigate('index')} />
      </View>

      <View style={styles.cartao}>
        <Text style={styles.tituloOpcao}>Tela de resumo</Text>
        <Text style={styles.textoOpcao}>Visualize os dados cadastrados.</Text>
        <Button
          title="Abrir resumo"
          color="#a9472b"
          onPress={() => navigation.navigate('Cadastro')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8ef',
    padding: 20,
  },
  imagem: {
    width: '100%',
    height: 170,
    borderRadius: 15,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4e2a20',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#765b51',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  cartao: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
  tituloOpcao: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4e2a20',
  },
  textoOpcao: {
    fontSize: 14,
    color: '#765b51',
    marginTop: 4,
    marginBottom: 12,
  },
});
