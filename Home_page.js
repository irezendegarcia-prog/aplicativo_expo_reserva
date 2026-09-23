import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomePage() {
  const navigation = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [dadosSalvos, setDadosSalvos] = useState(null);

  useEffect(() => {
    if (dadosSalvos) {
      Alert.alert('Cadastro salvo', 'Os dados da reserva foram salvos com sucesso!');

      navigation.navigate({
        pathname: '/Cadastro',
        params: dadosSalvos,
      });
    }
  }, [dadosSalvos]);

  const confirmarCadastro = () => {
    if (!nome || !email || !telefone || !data || !horario || !pessoas) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    setDadosSalvos({
      nome,
      email,
      telefone,
      data,
      horario,
      pessoas,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./images/Captura de tela 2026-09-18 225714.png')}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Reserva de mesa</Text>
      <Text style={styles.subtitulo}>Preencha os dados para reservar sua visita.</Text>

      <View style={styles.formulario}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(00) 00000-0000"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={data}
          onChangeText={setData}
          placeholder="DD/MM/AAAA"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Horário</Text>
        <TextInput
          style={styles.input}
          value={horario}
          onChangeText={setHorario}
          placeholder="19:30"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Quantidade de pessoas</Text>
        <TextInput
          style={styles.input}
          value={pessoas}
          onChangeText={setPessoas}
          placeholder="Exemplo: 4"
          keyboardType="numeric"
        />

        <View style={styles.botao}>
          <Button title="Confirmar" color="#a9472b" onPress={confirmarCadastro} />
        </View>

        <Button
          title="Abrir menu de navegação"
          color="#6d4c41"
          onPress={() => navigation.navigate('/Func_Cadastro')}
        />
      </View>
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
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4e2a20',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#765b51',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  formulario: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4e2a20',
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#d8c1b5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fffaf5',
  },
  botao: {
    marginTop: 5,
    marginBottom: 12,
  },
});
