import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';

type Falha = 'camera-negada' | 'camera-bloqueada';

// Mensagens direcionadas ao usuário para cada cenário de recusa
const MENSAGENS: Record<Falha, string> = {
  'camera-negada': 'Precisamos do acesso à câmera para tirar a foto. Tente novamente ou escolha uma foto pela galeria.',
  'camera-bloqueada': 'O acesso à câmera está desativado nas permissões. Ative a câmera nas Configurações do dispositivo ou continue usando a galeria.',
};

// Configuração única reaproveitada pela câmera e pela galeria
const opcoesPicker: ImagePicker.ImagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.7,
};

export default function TelaFotoCamera() {
  const [fotoUri, setFotoUri] = useState<string | null>(null);
  const [falha, setFalha] = useState<Falha | null>(null);

  async function tirarFoto() {
    setFalha(null);

    // Solicita a permissão de uso da câmera
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {
      // Se ainda for possível solicitar, foi apenas negada. Se não, foi bloqueada no sistema.
      if (permissao.canAskAgain) {
        setFalha('camera-negada');
      } else {
        setFalha('camera-bloqueada');
      }
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync(opcoesPicker);

    // Cancelar a captura não é erro: encerra sem mexer no estado ou exibir falhas
    if (resultado.canceled) return;

    setFotoUri(resultado.assets[0].uri);
  }

  async function escolherDaGaleria() {
    setFalha(null);

    // A galeria não precisa pedir permissão prévia porque o seletor nativo faz o gerenciamento
    const resultado = await ImagePicker.launchImageLibraryAsync(opcoesPicker);

    if (resultado.canceled) return;

    setFotoUri(resultado.assets[0].uri);
  }

  return (
    <View style={estilos.tela}>
      {fotoUri ? (
        <Image source={{ uri: fotoUri }} style={estilos.previa} contentFit="cover" transition={300} />
      ) : (
        <View style={[estilos.previa, estilos.semFoto]}>
          <Text>Nenhuma foto ainda</Text>
        </View>
      )}

      <Pressable onPress={tirarFoto} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Tirar foto</Text>
      </Pressable>

      <Pressable onPress={escolherDaGaleria} style={estilos.botaoSecundario}>
        <Text style={estilos.textoBotaoSecundario}>Escolher da galeria</Text>
      </Pressable>

      {/* Renderização condicional da mensagem de falha */}
      {falha && <Text style={estilos.erro}>{MENSAGENS[falha]}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, padding: 24, gap: 16 },
  previa: { width: '100%', aspectRatio: 4 / 3, borderRadius: 12 },
  semFoto: { backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center' },
  botao: { backgroundColor: '#f26522', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
  botaoSecundario: { borderWidth: 2, borderColor: '#f26522', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  textoBotaoSecundario: { color: '#f26522', fontWeight: '700', fontSize: 16 },
  erro: { fontSize: 15, color: '#b00020' },
});