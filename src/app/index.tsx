import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TelaInicial() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Hábitos</Text>

      {/* Navegação via código imperativo (router.push) */}
      <Pressable
        style={styles.botaoPrincipal}
        onPress={() => router.push('/registrar-foto')}
      >
        <Text style={styles.textoBotao}>Registrar foto do hábito</Text>
      </Pressable>

      {/* Navegação via componente declarativo (Link) */}
      <View style={styles.menuLinks}>
        <Link href="/galeria" style={styles.link}>
          Ver galeria de progresso
        </Link>

        <Link href="/sobre" style={styles.link}>
          Sobre o aplicativo
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  botaoPrincipal: {
    backgroundColor: '#f26522',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  menuLinks: {
    gap: 16,
    alignItems: 'center',
  },
  link: {
    color: '#f26522',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});