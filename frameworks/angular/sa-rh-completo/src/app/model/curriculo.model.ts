export interface Curriculo {
  id?: number;
  usuarioId?: number;
  nomeCompleto: string;
  email: string;
  telefone: string;
  formacao: string;
  experiencia: string;
  habilidades: string[];
}
