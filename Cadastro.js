import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Cadastro() {
  const navigation = useNavigation();
  const dados = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./images/Captura de tela 2026-09-18 225714.png')}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Reserva confirmada!</Text>
      <Text style={styles.subtitulo}>Confira os dados cadastrados:</Text>

      <View style={styles.cartao}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>{dados.nome || 'Não informado'}</Text>

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.valor}>{dados.email || 'Não informado'}</Text>

        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.valor}>{dados.telefone || 'Não informado'}</Text>

        <Text style={styles.label}>Data</Text>
        <Text style={styles.valor}>{dados.data || 'Não informada'}</Text>

        <Text style={styles.label}>Horário</Text>
        <Text style={styles.valor}>{dados.horario || 'Não informado'}</Text>

        <Text style={styles.label}>Quantidade de pessoas</Text>
        <Text style={styles.valor}>{dados.pessoas || 'Não informada'}</Text>
      </View>

      <View style={styles.botao}>
        <Button
          title="Ir para a navegação"
          color="#a9472b"
          onPress={() => navigation.navigate('Func_Cadastro')}
        />
      </View>

      <Button title="Voltar ao formulário" color="#6d4c41" onPress={() => navigation.navigate('index')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    color: '#2f7d5b',
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
    borderRadius: 15,
    padding: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#a9472b',
  },
  valor: {
    fontSize: 18,
    color: '#3e2119',
    marginBottom: 15,
  },
  botao: {
    marginTop: 20,
    marginBottom: 12,
  },
});
