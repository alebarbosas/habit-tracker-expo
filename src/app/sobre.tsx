import { StyleSheet, Text, View } from 'react-native';

export default function TelaSobre() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Versão 1.0.0 — Rastreador de Hábitos</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  texto: { fontSize: 16, color: '#444' },
});