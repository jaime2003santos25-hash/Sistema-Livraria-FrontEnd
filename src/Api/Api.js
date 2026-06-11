import axios from 'axios'

const api = axios.create({
  // Se existir a variável de ambiente do Vercel, usa ela. 
  // Se não existir (como no seu PC), ele usa o localhost por padrão.
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080'
})

export default api