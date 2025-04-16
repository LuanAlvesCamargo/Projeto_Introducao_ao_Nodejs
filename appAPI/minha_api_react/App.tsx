import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const API_URL = 'http://localhost:3000/usuarios';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const adicionarOuEditarUsuario = async () => {
    if (!nome || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (editandoId !== null) {
      // edição
      try {
        await axios.put(`${API_URL}/${editandoId}`, { nome, email });
        setEditandoId(null);
        setNome('');
        setEmail('');
        fetchUsuarios();
      } catch (error) {
        console.error('Erro ao editar usuário:', error);
      }
    } else {
      // adição
      try {
        await axios.post(API_URL, { nome, email });
        setNome('');
        setEmail('');
        fetchUsuarios();
      } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
      }
    }
  };

  const excluirUsuario = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

  const iniciarEdicao = (usuario) => {
    setNome(usuario.nome);
    setEmail(usuario.email);
    setEditandoId(usuario.id);
  };

  const cancelarEdicao = () => {
    setNome('');
    setEmail('');
    setEditandoId(null);
  };

  return (
    <ScrollView style={style.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={style.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={style.input}
        keyboardType="email-address"
      />

      <Button
        title={editandoId ? 'Salvar Alterações' : 'Adicionar'}
        onPress={adicionarOuEditarUsuario}
      />

      {editandoId && (
        <View style={{ marginTop: 10 }}>
          <Button title="Cancelar Edição" onPress={cancelarEdicao} color="gray" />
        </View>
      )}

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Button title="Carregar Usuários" onPress={fetchUsuarios} />
      </View>

      <Text style={style.titulo}>Lista de Usuários:</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={style.itemLista}>
            <View>
              <Text style={style.nome}>{item.nome}</Text>
              <Text style={style.email}>{item.email}</Text>
            </View>
            <View style={style.botoes}>
              <TouchableOpacity onPress={() => iniciarEdicao(item)}>
                <Text style={style.botaoTextoEditar}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirUsuario(item.id)}>
                <Text style={style.botaoTextoExcluir}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* <Text style={style.titulo}>Resumo de Usuários:</Text>
      {usuarios.map((usuario) => (
        <Text key={usuario.id} style={style.resumo}>
          {usuario.nome} - {usuario.email}
        </Text>
      ))} */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  botaoTextoEditar: {
    color: '#007BFF',
    marginRight: 10,
  },
  botaoTextoExcluir: {
    color: '#FF0000',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  resumo: {
    fontSize: 14,
    marginBottom: 5,
  },
});