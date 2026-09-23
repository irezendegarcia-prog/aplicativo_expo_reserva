import { Stack } from 'expo-router';

export default function Navegacao() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#fff8ef' },
        headerTintColor: '#4e2a20',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Nova reserva' }} />
      <Stack.Screen name="Cadastro" options={{ title: 'Resumo da reserva' }} />
      <Stack.Screen name="Func_Cadastro" options={{ title: 'Navegação' }} />
    </Stack>
  );
}
