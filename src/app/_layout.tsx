import { Stack } from 'expo-router';

export default function LayoutRaiz() {
  return (
    <Stack screenOptions={{ headerTintColor: '#f26522' }}>
      {/* Tela inicial */}
      <Stack.Screen
        name="index"
        options={{ title: 'Meus hábitos' }}
      />

      {/* Tela de registrar foto */}
      <Stack.Screen
        name="registrar-foto"
        options={{
          title: 'Foto do hábito',
          headerBackTitle: 'Hábitos',
        }}
      />

      {/* Tela galeria de progresso */}
      <Stack.Screen
        name="galeria"
        options={{ title: 'Galeria de progresso' }}
      />

      {/* Tela sobre */}
      <Stack.Screen
        name="sobre"
        options={{ title: 'Sobre o app' }}
      />
    </Stack>
  );
}