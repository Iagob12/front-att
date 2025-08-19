import axios from 'axios';
import { API_CONFIG, getApiUrl, getAuthHeaders, getErrorMessage } from '../config/api.config';

const API_BASE_URL = API_CONFIG.BASE_URL;

// Configuração do axios
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: API_CONFIG.DEFAULT_HEADERS
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem(API_CONFIG.AUTH.TOKEN_KEY);
        if (token) {
            config.headers.Authorization = `${API_CONFIG.AUTH.TOKEN_PREFIX} ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Função para fazer requisições HTTP
const apiRequest = async (endpoint, options = {}) => {
    try {
        const response = await api({
            url: endpoint,
            ...options
        });
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw new Error(getErrorMessage(error));
    }
};

// Serviços de Autenticação
export const authService = {
    // Cadastro de usuário
    register: async (userData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.AUTH.REGISTER, {
            method: 'POST',
            data: userData
        });
    },

    // Login
    login: async (credentials) => {
        const response = await apiRequest(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
            method: 'POST',
            data: credentials
        });
        
        if (response.token) {
            localStorage.setItem(API_CONFIG.AUTH.TOKEN_KEY, response.token);
            localStorage.setItem(API_CONFIG.AUTH.USER_EMAIL_KEY, response.email);
            localStorage.setItem(API_CONFIG.AUTH.USER_ROLE_KEY, response.role);
            // Armazenar também o nome se disponível
            if (response.nome) {
                localStorage.setItem('userNome', response.nome);
            }
        }
        
        return response;
    },

    // Logout
    logout: () => {
        localStorage.removeItem(API_CONFIG.AUTH.TOKEN_KEY);
        localStorage.removeItem(API_CONFIG.AUTH.USER_EMAIL_KEY);
        localStorage.removeItem(API_CONFIG.AUTH.USER_ROLE_KEY);
        localStorage.removeItem('userNome');
    },

    // Verificar se está logado
    isAuthenticated: () => {
        return !!localStorage.getItem(API_CONFIG.AUTH.TOKEN_KEY);
    },

    // Obter dados do usuário logado
    getCurrentUser: () => {
        return {
            email: localStorage.getItem(API_CONFIG.AUTH.USER_EMAIL_KEY),
            role: localStorage.getItem(API_CONFIG.AUTH.USER_ROLE_KEY),
            nome: localStorage.getItem('userNome')
        };
    }
};

// Serviços de Usuário
export const userService = {
    // Criar usuário
    create: async (userData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.USUARIO.CRIAR, {
            method: 'POST',
            data: userData
        });
    },

    // Listar todos os usuários
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.USUARIO.TODOS);
    },

    // Buscar usuário por ID
    getById: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.USUARIO.BUSCAR(id));
    },

    // Atualizar usuário
    update: async (id, userData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.USUARIO.ATUALIZAR(id), {
            method: 'PUT',
            data: userData
        });
    },

    // Deletar usuário
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.USUARIO.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Evento
export const eventoService = {
    // Listar todos os eventos
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.EVENTO.LISTAR);
    },

    // Buscar evento por ID
    getById: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.EVENTO.BUSCAR(id));
    },

    // Criar evento
    create: async (eventoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.EVENTO.BASE, {
            method: 'POST',
            data: eventoData
        });
    },

    // Atualizar evento
    update: async (id, eventoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.EVENTO.ATUALIZAR(id), {
            method: 'PUT',
            data: eventoData
        });
    },

    // Deletar evento
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.EVENTO.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Blog
export const blogService = {
    // Listar todos os posts
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.BLOG.LISTAR);
    },

    // Buscar post por ID
    getById: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.BLOG.BUSCAR);
    },

    // Criar post
    create: async (postData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.BLOG.CRIAR, {
            method: 'POST',
            data: postData
        });
    },

    // Atualizar post
    update: async (id, postData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.BLOG.ATUALIZAR(id), {
            method: 'PUT',
            data: postData
        });
    },

    // Deletar post
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.BLOG.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Doação
export const doacaoService = {
    // Fazer doação
    doar: async (doacaoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.DOACAO.DOAR, {
            method: 'POST',
            data: doacaoData
        });
    },

    // Listar todas as doações
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.DOACAO.LISTAR);
    },

    // Buscar doações por usuário
    getByUsuario: async (usuarioId) => {
        return apiRequest(API_CONFIG.ENDPOINTS.DOACAO.POR_USUARIO(usuarioId));
    },

    // Buscar doação por ID
    getById: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.DOACAO.BUSCAR(id));
    },

    // Deletar doação
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.DOACAO.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Curso
export const cursoService = {
    // Listar todos os cursos
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.CURSO.LISTAR);
    },

    // Buscar curso por ID
    getById: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.CURSO.BUSCAR);
    },

    // Cadastrar curso
    create: async (cursoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.CURSO.CADASTRAR, {
            method: 'POST',
            data: cursoData
        });
    },

    // Atualizar curso
    update: async (id, cursoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.CURSO.ATUALIZAR(id), {
            method: 'PUT',
            data: cursoData
        });
    },

    // Deletar curso
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.CURSO.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Inscrição
export const inscricaoService = {
    // Inscrever-se em um curso
    inscrever: async (inscricaoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.INSCRICAO.INSCREVER, {
            method: 'POST',
            data: inscricaoData
        });
    },

    // Listar todas as inscrições
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.INSCRICAO.LISTAR);
    },

    // Cancelar inscrição
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.INSCRICAO.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Participação em Evento
export const participacaoEventoService = {
    // Participar de um evento
    participar: async (participacaoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.PARTICIPACAO_EVENTO.PARTICIPAR, {
            method: 'POST',
            data: participacaoData
        });
    },

    // Listar todas as participações
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.PARTICIPACAO_EVENTO.LISTAR);
    },

    // Cancelar participação
    cancelar: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.PARTICIPACAO_EVENTO.CANCELAR(id), {
            method: 'DELETE'
        });
    }
};

// Serviços de Pagamento
export const pagamentoService = {
    // Processar pagamento
    processar: async (pagamentoData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.PAGAMENTO.PROCESSAR, {
            method: 'POST',
            data: pagamentoData
        });
    },

    // Listar todos os pagamentos
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.PAGAMENTO.LISTAR);
    },

    // Buscar pagamento por ID
    getById: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.PAGAMENTO.BUSCAR(id));
    }
};

// Serviços de Comentário
export const comentarioService = {
    // Criar comentário
    create: async (comentarioData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.COMENTARIO.CRIAR, {
            method: 'POST',
            data: comentarioData
        });
    },

    // Listar todos os comentários
    getAll: async () => {
        return apiRequest(API_CONFIG.ENDPOINTS.COMENTARIO.LISTAR);
    },

    // Atualizar comentário
    update: async (id, comentarioData) => {
        return apiRequest(API_CONFIG.ENDPOINTS.COMENTARIO.ATUALIZAR(id), {
            method: 'PUT',
            data: comentarioData
        });
    },

    // Deletar comentário
    delete: async (id) => {
        return apiRequest(API_CONFIG.ENDPOINTS.COMENTARIO.DELETAR(id), {
            method: 'DELETE'
        });
    }
};

export default {
    authService,
    userService,
    eventoService,
    blogService,
    doacaoService,
    cursoService,
    inscricaoService,
    participacaoEventoService,
    pagamentoService,
    comentarioService
};