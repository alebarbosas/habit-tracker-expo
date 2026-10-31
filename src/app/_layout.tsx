import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Início',
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="sobre"
        options={{
          drawerLabel: 'Sobre',
          title: 'Sobre',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Configurações',
          title: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="notificacao"
        options={{
          drawerLabel: 'Notificações',
          title: 'Notificações',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}