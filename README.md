# Habit Tracker Expo — Aula 6

**Disciplina:** Desenvolvimento Mobile (2026.2.DM) — CESAR School

## Sobre o projeto
Um aplicativo para acompanhamento de hábitos diários. Nesta etapa do projeto, adicionamos recursos para registrar fotos de progresso usando a câmera do celular ou selecionando imagens da galeria.

## Navegação e Rotas
- `/` — Tela principal com a lista de hábitos e os atalhos de navegação.
- `/registrar-foto` — Tirar foto com a câmera ou escolher uma imagem da galeria.
- `/galeria` — Selecionar até 6 fotos para exibir numa grade de progresso.
- `/sobre` — Informações sobre o projeto, versão e avisos de armazenamento.

## Observação técnica
- **Armazenamento em memória:** As fotos capturadas e selecionadas ficam salvas temporariamente no estado do app enquanto ele está em execução. Elas não persistem após o encerramento da aplicação.

## Como rodar o projeto
Para subir o aplicativo limpando o cache, rode no terminal:

```bash
npx expo start --clear