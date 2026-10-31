import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
  }),
});

export default function NotificationScreen() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function requestPermission() {
      const { status } = await Notifications.requestPermissionsAsync();
      setPermissionGranted(status === 'granted');
    }

    requestPermission();

    // Listener 1: Notificação recebida em Foreground
    const receivedSubscription = Notifications.addNotificationReceivedListener(
      () => {
        console.log('Notificação recebida');
      }
    );

    // Listener 2: Notificação tocada -> navega para a rota dinâmica /habit/[id]
    const responseSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log('Notificação tocada');
        const habitId = response.notification.request.content.data.habitId || '1';
        router.push(`/habit/${habitId}`);
      }
    );

    return () => {
      receivedSubscription.remove();
      responseSubscription.remove();
    };
  }, []);

  const handleSchedule = async () => {
    if (!permissionGranted) {
      console.log('Permissão não concedida');
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Lembrete de Hábito 🔔',
        body: 'Toque para ver os detalhes do seu hábito!',
        data: { habitId: '1' }, // Passa o ID dinâmico no payload
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleSchedule}>
        <Text style={styles.buttonText}>Agendar notificação em 5s</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});