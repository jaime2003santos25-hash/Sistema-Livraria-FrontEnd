import api from '../api/api'

export async function listarLivros() {

  const response = await api.get('/livros')

  return response.data
}
