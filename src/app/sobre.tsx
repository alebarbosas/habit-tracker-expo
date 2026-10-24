import { StyleSheet, Text, View } from 'react-native';

export default function TelaSobre() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Rastreador de Hábitos</Text>
      <Text style={estilos.subtitulo}>Aula 06 — Navegação e Mídia (2026.2.DM)</Text>
      
      <Text style={estilos.limitacao}>
        Nota sobre as fotos: o armazenamento é temporário. As imagens que você tira ou escolhe ficam salvas apenas no estado do app enquanto ele estiver aberto.
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f26522',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  limitacao: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 8,
    lineHeight: 20,
  },
});