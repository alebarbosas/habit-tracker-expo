import { useState } from 'react';
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';

// Item individual da grade de fotos
function renderItemFoto({ item }: ListRenderItemInfo<ImagePicker.ImagePickerAsset>) {
  return (
    <Image
      source={{ uri: item.uri }}
      style={estilos.miniatura}
      recyclingKey={item.uri}
      contentFit="cover"
    />
  );
}

// Mensagem exibida enquanto nenhuma foto for escolhida
function ListaVazia() {
  return <Text style={estilos.vazio}>Nenhuma foto selecionada ainda.</Text>;
}

export default function TelaGaleria() {
  const [fotos, setFotos] = useState<ImagePicker.ImagePickerAsset[]>([]);

  async function escolherVarias() {
    // O allowsEditing não funciona com seleção múltipla porque a ferramenta de corte
    // do próprio celular só consegue processar uma imagem por vez.

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      quality: 0.7,
    });

    // Se a pessoa cancelou, mantém as fotos que já estavam sem mexer em nada
    if (resultado.canceled) return;

    setFotos(resultado.assets);
  }

  return (
    <View style={estilos.tela}>
      <Pressable onPress={escolherVarias} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Escolher até 6 fotos</Text>
      </Pressable>

      <FlatList
        data={fotos}
        renderItem={renderItemFoto}
        keyExtractor={(item) => item.uri}
        numColumns={3}
        columnWrapperStyle={estilos.linha}
        contentContainerStyle={estilos.grade}
        ListEmptyComponent={ListaVazia}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, padding: 24, gap: 16 },
  botao: { backgroundColor: '#f26522', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
  grade: { gap: 8 },
  linha: { gap: 8 },
  miniatura: { flex: 1, aspectRatio: 1, borderRadius: 8, maxWidth: '33%' },
  vazio: { fontSize: 15, color: '#666' },
});