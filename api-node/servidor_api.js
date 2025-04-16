const { v4: uuid4 } = require('uuid');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let usuarios = [
  {
    id: uuid4(),
    nome: 'luan',
    email: 'luancamargo@email.com',
  },
  {
    id: uuid4(),
    nome: 'joão',
    email: 'joao@email.com',
  },
  {
    id: uuid4(),
    nome: 'maria',
    email: 'maria@email.com',
  },
  {
    id: uuid4(),
    nome: 'ana',
    email: 'ana@email.com',
  },
  {
    id: uuid4(),
    nome: 'Izabelly',
    email: 'iza@email.com',
  },
  {
    id: uuid4(),
    nome: 'Ana Oliveira',
    email: 'ana.oliveira@example.com',
  },
  {
    id: uuid4(),
    nome: 'Bruno Costa',
    email: 'bruno.costa@example.com',
  },
  {
    id: uuid4(),
    nome: 'Carlos Lima',
    email: 'carlos.lima@example.com',
  },
  {
    id: uuid4(),
    nome: 'Daniela Souza',
    email: 'daniela.souza@example.com',
  },
  {
    id: uuid4(),
    nome: 'Eduardo Ramos',
    email: 'eduardo.ramos@example.com',
  },
  {
    id: uuid4(),
    nome: 'Fernanda Rocha',
    email: 'fernanda.rocha@example.com',
  },
  {
    id: uuid4(),
    nome: 'Gabriel Mendes',
    email: 'gabriel.mendes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Helena Castro',
    email: 'helena.castro@example.com',
  },
  {
    id: uuid4(),
    nome: 'Igor Martins',
    email: 'igor.martins@example.com',
  },
  {
    id: uuid4(),
    nome: 'Juliana Freitas',
    email: 'juliana.freitas@example.com',
  },
  {
    id: uuid4(),
    nome: 'Kleber Azevedo',
    email: 'kleber.azevedo@example.com',
  },
  {
    id: uuid4(),
    nome: 'Larissa Duarte',
    email: 'larissa.duarte@example.com',
  },
  {
    id: uuid4(),
    nome: 'Marcelo Antunes',
    email: 'marcelo.antunes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Natália Ferreira',
    email: 'natalia.ferreira@example.com',
  },
  {
    id: uuid4(),
    nome: 'Otávio Pinto',
    email: 'otavio.pinto@example.com',
  },
  {
    id: uuid4(),
    nome: 'Patrícia Moraes',
    email: 'patricia.moraes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Rafael Teixeira',
    email: 'rafael.teixeira@example.com',
  },
  {
    id: uuid4(),
    nome: 'Simone Lima',
    email: 'simone.lima@example.com',
  },
  {
    id: uuid4(),
    nome: 'Tiago Farias',
    email: 'tiago.farias@example.com',
  },
  {
    id: uuid4(),
    nome: 'Ursula Barbosa',
    email: 'ursula.barbosa@example.com',
  },
  {
    id: uuid4(),
    nome: 'Vanessa Silveira',
    email: 'vanessa.silveira@example.com',
  },
  {
    id: uuid4(),
    nome: 'Wagner Lopes',
    email: 'wagner.lopes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Xuxa Mendes',
    email: 'xuxa.mendes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Yuri Carvalho',
    email: 'yuri.carvalho@example.com',
  },
  {
    id: uuid4(),
    nome: 'Zuleica Torres',
    email: 'zuleica.torres@example.com',
  },
  {
    id: uuid4(),
    nome: 'Beatriz Almeida',
    email: 'beatriz.almeida@example.com',
  },
  {
    id: uuid4(),
    nome: 'Caio Barbosa',
    email: 'caio.barbosa@example.com',
  },
  {
    id: uuid4(),
    nome: 'Denise Cunha',
    email: 'denise.cunha@example.com',
  },
  {
    id: uuid4(),
    nome: 'Enzo Goulart',
    email: 'enzo.goulart@example.com',
  },
  {
    id: uuid4(),
    nome: 'Flávia Bastos',
    email: 'flavia.bastos@example.com',
  },
  {
    id: uuid4(),
    nome: 'Giovana Nunes',
    email: 'giovana.nunes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Henrique Lopes',
    email: 'henrique.lopes@example.com',
  },
  {
    id: uuid4(),
    nome: 'Isadora Rezende',
    email: 'isadora.rezende@example.com',
  },
  {
    id: uuid4(),
    nome: 'João Pedro',
    email: 'joao.pedro@example.com',
  },
  {
    id: uuid4(),
    nome: 'Karina Pires',
    email: 'karina.pires@example.com',
  },
  {
    id: uuid4(),
    nome: 'Leonardo Brito',
    email: 'leonardo.brito@example.com',
  },
  {
    id: uuid4(),
    nome: 'Mariana Neves',
    email: 'mariana.neves@example.com',
  },
  {
    id: uuid4(),
    nome: 'Nilson Santos',
    email: 'nilson.santos@example.com',
  },
  {
    id: uuid4(),
    nome: 'Olívia Martins',
    email: 'olivia.martins@example.com',
  },
  {
    id: uuid4(),
    nome: 'Pedro Henrique',
    email: 'pedro.henrique@example.com',
  },
  {
    id: uuid4(),
    nome: 'Quezia Andrade',
    email: 'quezia.andrade@example.com',
  },
  {
    id: uuid4(),
    nome: 'Rodrigo Viana',
    email: 'rodrigo.viana@example.com',
  },
  {
    id: uuid4(),
    nome: 'Sabrina Teles',
    email: 'sabrina.teles@example.com',
  },
  {
    id: uuid4(),
    nome: 'Tatiane Barros',
    email: 'tatiane.barros@example.com',
  },
  {
    id: uuid4(),
    nome: 'Ulisses Amaral',
    email: 'ulisses.amaral@example.com',
  },
  {
    id: uuid4(),
    nome: 'Valéria Assis',
    email: 'valeria.assis@example.com',
  },
  {
    id: uuid4(),
    nome: 'Washington Prado',
    email: 'washington.prado@example.com',
  },
  {
    id: uuid4(),
    nome: 'Xandão Silva',
    email: 'xandao.silva@example.com',
  },
  {
    id: uuid4(),
    nome: 'Yasmin Rocha',
    email: 'yasmin.rocha@example.com',
  },
  {
    id: uuid4(),
    nome: 'Zeca Lopes',
    email: 'zeca.lopes@example.com',
  }
];

// Rota para obter todos os usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios); // Retorna a lista de usuários em formato JSON
});

// Rota para obter um usuário específico
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((usuario) => usuario.id === req.params.id);
  if (!usuario) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
  res.json(usuario);
});

// Rota para criar um novo usuário
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios' });
  }
  const novoUsuario = {
    id: uuid4(),
    nome,
    email,
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Rota para atualizar um usuário
app.put('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find((usuario) => usuario.id === req.params.id);
  if (!usuario) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
  const { nome, email } = req.body;
  if (nome) usuario.nome = nome;
  if (email) usuario.email = email;
  res.json(usuario);
});

// Rota para remover um usuário
app.delete('/usuarios/:id', (req, res) => {
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === req.params.id);
  if (usuarioIndex === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
  usuarios.splice(usuarioIndex, 1);
  res.status(204).send();
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando na porta: http://localhost:${port}/usuarios`);
});