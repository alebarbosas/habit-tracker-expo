import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';
export { default } from '../screens/tela-habitos';

<Pressable onPress={() => 
  router.push({
    pathname: '/habit/[id]',
    params: { id: '5' }
  })
}>
  <Text>Abrir hábito 5</Text>
</Pressable>