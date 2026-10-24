import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rastreador de Hábitos</Text>
      
      <Link href="/registrar-foto" style={styles.link}>
        Exercício 1 — Registrar foto
      </Link>

      <Link href="/galeria" style={styles.link}>
        Exercício 2 — Galeria múltipla
      </Link>

      <Link href="/foto-camera" style={styles.link}>
        Exercício 3 — Câmera e permissões
      </Link>

      <Link href="/sobre" style={styles.link}>
        Exercício 4 — Sobre o app
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    color: '#f26522',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});