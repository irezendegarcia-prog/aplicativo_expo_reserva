import { useLocalSearchParams, useNavigation } from 'expo-router';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Cadastro() {
  const navigation = useNavigation();
  const dados = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Imagem principal */}
      <Image
        source={require('./images/Captura de tela 2026-09-18 225714.png')}
        style={styles.imagem}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.titulo}>
        Reserva confirmada!
      </Text>

      <Text style={styles.subtitulo}>
        Confira os dados cadastrados:
      </Text>

      {/* Card com os dados */}
      <View style={styles.cartao}>

        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>
          {dados.nome || 'Não informado'}
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.valor}>
          {dados.email || 'Não informado'}
        </Text>

        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.valor}>
          {dados.telefone || 'Não informado'}
        </Text>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.valor}>
          {dados.data || 'Não informada'}
        </Text>

        <Text style={styles.label}>Horário</Text>
        <Text style={styles.valor}>
          {dados.horario || 'Não informado'}
        </Text>

        <Text style={styles.label}>
          Quantidade de pessoas
        </Text>

        <Text style={styles.valor}>
          {dados.pessoas || 'Não informada'}
        </Text>

      </View>

      {/* Botão principal */}
      <View style={styles.botaoPrincipal}>
        <Button
          title="Ir para a navegação"
          color="#2A1F3D"
          onPress={() => navigation.navigate('Func_Cadastro')}
        />
      </View>

      {/* Botão secundário */}
      <View style={styles.botaoSecundario}>
        <Button
          title="Voltar ao formulário"
          color="#162536"
          onPress={() => navigation.navigate('HomePage')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // Fundo da tela
  container: {
    flexGrow: 1,
    backgroundColor: '#0B0F14',
    padding: 20,
  },

  // Imagem
  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 25,
  },

  // Título principal
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Texto abaixo do título
  subtitulo: {
    fontSize: 16,
    color: '#AEB8C4',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 25,
  },

  // Card dos dados
  cartao: {
    backgroundColor: '#162536',
    borderRadius: 16,
    padding: 22,

    // Pequeno destaque do card
    borderWidth: 1,
    borderColor: '#2A1F3D',

    marginBottom: 10,
  },

  // Nome dos campos
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#9B8BC4',
    marginBottom: 4,
  },

  // Informações cadastradas
  valor: {
    fontSize: 17,
    color: '#FFFFFF',
    marginBottom: 18,
  },

  // Botão principal
  botaoPrincipal: {
    marginTop: 15,
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },

  // Botão secundário
  botaoSecundario: {
    borderRadius: 10,
    overflow: 'hidden',
  },

});