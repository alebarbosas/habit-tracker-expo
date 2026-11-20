// Exercício 3 — useContext: Tema Claro/Escuro em todo o app
// Atividade Aplicada (Requisito 1) — Tema Global Persistido (useContext + AsyncStorage)
// Onde: src/context/theme-context.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = '@habits:theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    async function loadTheme() {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme !== null) {
          const parsed = JSON.parse(savedTheme);
          if (typeof parsed === 'boolean') {
            setIsDark(parsed);
          }
        }
      } catch (error) {
        console.error('Erro ao carregar preferência de tema:', error);
      }
    }

    loadTheme();
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextValue = !prev;
      AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(nextValue)).catch((error) => {
        console.error('Erro ao salvar preferência de tema:', error);
      });
      return nextValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}