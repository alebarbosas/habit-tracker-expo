// Aula 8 — Layout Raiz com ThemeProvider + Drawer
// Onde: src/app/_layout.tsx

import { MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { ThemeProvider, useTheme } from '../context/theme-context';

function DrawerNavigator() {
  const { isDark } = useTheme();

  return (
    <Drawer
      backBehavior="history"
      screenOptions={{
        drawerActiveTintColor: '#FF6002',
        drawerInactiveTintColor: isDark ? '#ccc' : '#333',
        drawerStyle: { backgroundColor: isDark ? '#121212' : '#fff' },
        headerStyle: { backgroundColor: isDark ? '#1E1E1E' : '#fff' },
        headerTintColor: isDark ? '#fff' : '#111',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={String(color)} />
          ),
        }}
      />
      <Drawer.Screen
        name="quick-habits"
        options={{
          drawerLabel: 'Hábitos Rápidos (Ex 1)',
          title: 'Hábitos Rápidos (Ex 1)',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="bolt" size={size} color={String(color)} />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: 'Sobre',
          title: 'Sobre',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={String(color)} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Configurações',
          title: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={String(color)} />
          ),
        }}
      />
      <Drawer.Screen
        name="habit/[id]"
        options={{
          title: 'Detalhe do hábito',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="notificacoes"
        options={{
          title: 'Notificações (Ex 4)',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="registrar-foto"
        options={{
          title: 'Foto do hábito',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="galeria"
        options={{
          title: 'Galeria do hábito',
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <DrawerNavigator />
    </ThemeProvider>
  );
}