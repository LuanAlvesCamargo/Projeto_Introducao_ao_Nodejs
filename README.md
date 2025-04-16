# Aplicativo Mobile com React Native + Node.js

Este projeto foi desenvolvido durante a disciplina de **Desenvolvimento Mobile** e consiste em um app simples de cadastro de usuários. O frontend foi construído com **React Native**, utilizando o Expo, enquanto o backend foi feito com **Node.js** e **Express**.

## Funcionalidades
- Listagem de usuários
- Cadastro de novos usuários
- Edição de usuários existentes
- Exclusão de usuários
- Comunicação com a API via requisições HTTP (Axios)

## Tecnologias Utilizadas
### Frontend
- React Native
- Expo
- Axios

### Backend
- Node.js
- Express

---

## Como preparar o ambiente para testar o projeto

### 🔹 Backend (API com Node.js)
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/backend-app-cadastro.git
cd backend-app-cadastro
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor:
```bash
node index.js
```
> O backend estará disponível na porta `3000` por padrão.

### 🔹 Frontend (React Native com Expo)
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/frontend-app-cadastro.git
cd frontend-app-cadastro
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o projeto com Expo:
```bash
npx expo start
```

📱 Para testar no celular com o app **Expo Go**, escaneie o QR code gerado no terminal ou navegador.

🔧 **Importante:** certifique-se de alterar a URL base da API no frontend para o IP local da sua máquina, por exemplo:
```js
baseURL: 'http://192.168.x.x:3000' ou 'http://localhost:3000/usuarios'
```
Substitua `192.168.x.x` pelo IP da sua rede local.

---

Este projeto foi essencial para consolidar conhecimentos sobre API REST, consumo de dados com Axios, construção de interfaces responsivas e organização de código em aplicações mobile.

