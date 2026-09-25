
import { useNavigation } from 'expo-router';
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
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [dadosSalvos, setDadosSalvos] = useState(null);

  useEffect(() => {
    if (dadosSalvos) {
      Alert.alert(
        'Reserva salva',
        'Os dados da reserva foram salvos com sucesso!'
      );

      navigation.navigate('Cadastro', dadosSalvos);
    }
  }, [dadosSalvos]);

  const confirmarCadastro = () => {
    if (!nome || !email || !telefone || !data || !horario || !pessoas) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

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

      {/* Imagem principal */}
      <Image
        source={require('./images/Captura de tela 2026-09-18 225714.png')}
        style={styles.imagem}
        resizeMode="contain"
      />
      {/* Título */}
      <Text style={styles.titulo}>
        Reserva de mesa
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados para reservar sua visita.
      </Text>

      {/* Formulário */}
      <View style={styles.formulario}>

        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor="#7F8A99"
        />

        <Text style={styles.label}>
          E-mail
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#7F8A99"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>
          Telefone
        </Text>

        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#7F8A99"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>
          Data
        </Text>

        <TextInput
          style={styles.input}
          value={data}
          onChangeText={setData}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#7F8A99"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          Horário
        </Text>

        <TextInput
          style={styles.input}
          value={horario}
          onChangeText={setHorario}
          placeholder="19:30"
          placeholderTextColor="#7F8A99"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          Quantidade de pessoas
        </Text>

        <TextInput
          style={styles.input}
          value={pessoas}
          onChangeText={setPessoas}
          placeholder="Exemplo: 4"
          placeholderTextColor="#7F8A99"
          keyboardType="numeric"
        />

        {/* Botão confirmar */}
        <View style={styles.botao}>
          <Button
            title="Confirmar reserva"
            color="#2A1F3D"
            onPress={confirmarCadastro}
          />
        </View>

        {/* Botão navegação */}
        <View style={styles.botaoMenu}>
          <Button
            title="Abrir menu de navegação"
            color="#162536"
            onPress={() => navigation.navigate('Func_Cadastro')}
          />
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // Fundo principal
  container: {
    flexGrow: 1,
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

  // Título
  titulo: {
    fontSize: 30,
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

  // Área do formulário
  formulario: {
    backgroundColor: '#162536',
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2A1F3D',
  },

  // Nome dos campos
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9B8BC4',
    marginBottom: 6,
  },

  // Campos de entrada
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#34495E',
    borderRadius: 9,
    paddingHorizontal: 12,
    marginBottom: 17,
    backgroundColor: '#0B0F14',
    color: '#FFFFFF',
  },

  // Botão principal
  botao: {
    marginTop: 5,
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },

  // Botão do menu
  botaoMenu: {
    borderRadius: 10,
    overflow: 'hidden',
  },

});
