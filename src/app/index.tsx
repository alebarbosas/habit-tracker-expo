import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rastreador de Hábitos</Text>
      
      <Link href="/registrar-foto" style={styles.link}>
        Registrar foto
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