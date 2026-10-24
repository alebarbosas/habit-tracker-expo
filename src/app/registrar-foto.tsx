import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function TelaRegistrarFoto() {
  const router = useRouter();
  const [fotoUri, setFotoUri] = useState<string | null>(null);

  async function escolherDaGaleria() {
    // Não precisa pedir permissão na mão antes porque o seletor nativo do sistema já cuida disso ao abrir.

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (resultado.canceled) return;

    setFotoUri(resultado.assets[0].uri);

    // No iPhone o corte fica sempre quadrado porque o editor padrão do iOS só aceita 1:1.
    // A proporção customizada só é respeitada no Android.
  }

  return (
    <View style={estilos.tela}>
      {fotoUri ? (
        <Image
          source={{ uri: fotoUri }}
          style={estilos.previa}
          contentFit="cover"
          transition={300}
        />
      ) : (
        <View style={[estilos.previa, estilos.semFoto]}>
          <Text>Nenhuma foto ainda</Text>
        </View>
      )}

      <Pressable onPress={escolherDaGaleria} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Escolher da galeria</Text>
      </Pressable>

      <Pressable
        onPress={() => router.back()}
        disabled={!fotoUri}
        style={[estilos.botao, !fotoUri && estilos.desligado]}
      >
        <Text style={estilos.textoBotao}>Concluir</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, padding: 24, gap: 16 },
  previa: { width: '100%', aspectRatio: 4 / 3, borderRadius: 12 },
  semFoto: { backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center' },
  botao: { backgroundColor: '#f26522', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  desligado: { opacity: 0.4 },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
});