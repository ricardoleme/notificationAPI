# Web Notifications Project

Este é um exemplo simples de projeto para demonstrar como enviar notificações na web usando JavaScript. O projeto inclui uma função chamada `sendNotification` que permite enviar notificações personalizadas.

## Uso

Para enviar uma notificação, você pode chamar a função `sendNotification` com os seguintes parâmetros:

- `title` (string): O título da notificação.
- `body` (string): O corpo da notificação.
- `iconURL` (string, opcional): URL para um ícone personalizado (opcional).

Exemplo:

```javascript
sendNotification('Título da Notificação', 'Corpo da Notificação', 'images/warning.png');
```
Certifique-se de que a permissão para notificações foi concedida pelo usuário.

## Estrutura do Projeto

    `index.html`: Página HTML de exemplo com um botão para enviar notificações.
    `service-worker.js``: Arquivo do Service Worker para cache e tratamento de notificações.
    `favicon.png`: Ícone do site.

## Contribuição
Fique à vontade para contribuir para este projeto. Você pode abrir problemas (_issues_) ou enviar _pull requests_ com melhorias.

## Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.