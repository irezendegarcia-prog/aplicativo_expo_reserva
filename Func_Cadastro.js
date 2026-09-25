
import { useNavigation } from 'expo-router';

import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function LoginFunc() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Imagem principal */}
      <Image
        source={require('./images/Captura de tela 2026-09-18 225714.png')}
        style={styles.imagem}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.titulo}>
        Menu de navegação
      </Text>

      <Text style={styles.subtitulo}>
        Escolha uma das telas do aplicativo.
      </Text>

      {/* Card formulário */}
      <View style={styles.cartao}>

        <Text style={styles.tituloOpcao}>
          Tela de formulário
        </Text>

        <Text style={styles.textoOpcao}>
          Cadastre uma nova reserva.
        </Text>

        <View style={styles.botao}>
          <Button
            title="Abrir formulário"
            color="#2A1F3D"
            onPress={() => navigation.navigate('HomePage')}
          />
        </View>

      </View>

      {/* Card resumo */}
      <View style={styles.cartao}>

        <Text style={styles.tituloOpcao}>
          Tela de resumo
        </Text>

        <Text style={styles.textoOpcao}>
          Visualize os dados cadastrados.
        </Text>

        <View style={styles.botao}>
          <Button
            title="Abrir resumo"
            color="#2A1F3D"
            onPress={() => navigation.navigate('Cadastro')}
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // Fundo principal
  container: {
    flex: 1,
    backgroundColor: '#0B0F14',
    padding: 20,
  },

  // Imagem
imagem: {
  width: '85%',
  height: 140,
  alignSelf: 'center',
  marginBottom: 25,
},

  // Título principal
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Subtítulo
  subtitulo: {
    fontSize: 16,
    color: '#AEB8C4',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 25,
  },

  // Cards
  cartao: {
    backgroundColor: '#162536',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#2A1F3D',
  },

  // Título das opções
  tituloOpcao: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // Descrição das opções
  textoOpcao: {
    fontSize: 14,
    color: '#AEB8C4',
    marginTop: 5,
    marginBottom: 14,
  },

  // Botões
  botao: {
    borderRadius: 10,
    overflow: 'hidden',
  },

});
