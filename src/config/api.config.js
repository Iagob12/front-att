// Configurações da API
export const API_CONFIG = {
    // URL base da API
    BASE_URL: 'http://localhost:8080',
    
    // Timeout das requisições (em milissegundos)
    TIMEOUT: 10000,
    
    // Configurações de retry
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000,
    
    // Headers padrão
    DEFAULT_HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    
    // Endpoints da API
    ENDPOINTS: {
        AUTH: {
            REGISTER: '/auth/register',
            LOGIN: '/auth/login'
        },
        USUARIO: {
            BASE: '/usuario',
            CRIAR: '/usuario/criar',
            TODOS: '/usuario/todos',
            BUSCAR: (id) => `/usuario/${id}`,
            ATUALIZAR: (id) => `/usuario/atualizar/${id}`,
            DELETAR: (id) => `/usuario/deletar/${id}`
        },
        EVENTO: {
            BASE: '/evento',
            LISTAR: '/evento/listar',
            MARCAR: '/evento/marcar',
            BUSCAR: (id) => `/evento/${id}`,
            ATUALIZAR: (id) => `/evento/atualizar/${id}`,
            DELETAR: (id) => `/evento/deletar/${id}`
        },
        BLOG: {
            BASE: '/blog',
            LISTAR: '/blog/listar',
            CRIAR: '/blog/criar',
            BUSCAR: '/blog/buscar',
            ATUALIZAR: (id) => `/blog/atualizar/${id}`,
            DELETAR: (id) => `/blog/deletar/${id}`
        },
        DOACAO: {
            BASE: '/doacao',
            DOAR: '/doacao/doar',
            LISTAR: '/doacao/doacoes',
            POR_USUARIO: (id) => `/doacao/usuario/${id}`,
            BUSCAR: (id) => `/doacao/${id}`,
            DELETAR: (id) => `/doacao/deletar/${id}`
        },
        CURSO: {
            BASE: '/curso',
            LISTAR: '/curso/listar',
            CADASTRAR: '/curso/cadastrar',
            BUSCAR: '/curso/buscar',
            ATUALIZAR: (id) => `/curso/atualizar/${id}`,
            DELETAR: (id) => `/curso/deletar/${id}`
        },
        INSCRICAO: {
            BASE: '/inscricao',
            INSCREVER: '/inscricao/inscrever',
            LISTAR: '/inscricao/listar',
            DELETAR: (id) => `/inscricao/deletar/${id}`
        },
        PARTICIPACAO_EVENTO: {
            BASE: '/participacao-evento',
            PARTICIPAR: '/participacao-evento/participar',
            LISTAR: '/participacao-evento/listar',
            CANCELAR: (id) => `/participacao-evento/cancelar/${id}`
        },
        PAGAMENTO: {
            BASE: '/pagamento',
            PROCESSAR: '/pagamento/processar',
            LISTAR: '/pagamento/listar',
            BUSCAR: (id) => `/pagamento/${id}`
        },
        COMENTARIO: {
            BASE: '/comentario',
            CRIAR: '/comentario/criar',
            LISTAR: '/comentario/listar',
            ATUALIZAR: (id) => `/comentario/atualizar/${id}`,
            DELETAR: (id) => `/comentario/deletar/${id}`
        }
    },
    
    // Configurações de autenticação
    AUTH: {
        TOKEN_KEY: 'token',
        USER_EMAIL_KEY: 'userEmail',
        USER_ROLE_KEY: 'userRole',
        TOKEN_PREFIX: 'Bearer'
    },
    
    // Configurações de erro
    ERROR_MESSAGES: {
        NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
        TIMEOUT_ERROR: 'Tempo limite excedido. Tente novamente.',
        UNAUTHORIZED: 'Sessão expirada. Faça login novamente.',
        FORBIDDEN: 'Acesso negado.',
        NOT_FOUND: 'Recurso não encontrado.',
        SERVER_ERROR: 'Erro interno do servidor. Tente novamente mais tarde.',
        VALIDATION_ERROR: 'Dados inválidos. Verifique as informações.',
        DEFAULT: 'Ocorreu um erro inesperado.'
    },
    
    // Configurações de validação
    VALIDATION: {
        PASSWORD_MIN_LENGTH: 6,
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        NAME_MIN_LENGTH: 2
    }
};

// Função para obter URL completa
export const getApiUrl = (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Função para obter headers com autenticação
export const getAuthHeaders = (additionalHeaders = {}) => {
    const token = localStorage.getItem(API_CONFIG.AUTH.TOKEN_KEY);
    
    return {
        ...API_CONFIG.DEFAULT_HEADERS,
        ...(token && { 
            'Authorization': `${API_CONFIG.AUTH.TOKEN_PREFIX} ${token}` 
        }),
        ...additionalHeaders
    };
};

// Função para obter mensagem de erro amigável
export const getErrorMessage = (error) => {
    if (error.message) {
        return error.message;
    }
    
    if (error.status) {
        switch (error.status) {
            case 400:
                return API_CONFIG.ERROR_MESSAGES.VALIDATION_ERROR;
            case 401:
                return API_CONFIG.ERROR_MESSAGES.UNAUTHORIZED;
            case 403:
                return API_CONFIG.ERROR_MESSAGES.FORBIDDEN;
            case 404:
                return API_CONFIG.ERROR_MESSAGES.NOT_FOUND;
            case 500:
                return API_CONFIG.ERROR_MESSAGES.SERVER_ERROR;
            default:
                return API_CONFIG.ERROR_MESSAGES.DEFAULT;
        }
    }
    
    return API_CONFIG.ERROR_MESSAGES.DEFAULT;
};

export default API_CONFIG;