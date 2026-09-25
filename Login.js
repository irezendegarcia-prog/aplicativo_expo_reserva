
import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function Login() {
    const router = useRouter();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login === 'admin' && senha === '1234') {
            router.replace('/HomePage');
        } else {
            Alert.alert(
                'Atenção',
                'Login ou senha incorretos.'
            );
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Login
            </Text>

            <Text style={styles.subtitulo}>
                Entre para acessar o aplicativo
            </Text>

            <View style={styles.formulario}>

                <Text style={styles.label}>
                    Login
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu login"
                    placeholderTextColor="#7F8A99"
                    value={login}
                    onChangeText={setLogin}
                    autoCapitalize="none"
                />

                <Text style={styles.label}>
                    Senha
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#7F8A99"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <View style={styles.botao}>
                    <Button
                        title="Entrar"
                        color="#2A1F3D"
                        onPress={entrar}
                    />
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0B0F14',
        padding: 20,
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    subtitulo: {
        fontSize: 16,
        color: '#AEB8C4',
        textAlign: 'center',
        marginTop: 7,
        marginBottom: 25,
    },

    formulario: {
        backgroundColor: '#162536',
        padding: 22,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#2A1F3D',
    },

    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9B8BC4',
        marginBottom: 6,
    },

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

    botao: {
        marginTop: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
});