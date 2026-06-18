import { Curriculo } from './curriculo.model';

describe('Curriculo', () => {
  it('should create a valid model object', () => {
    const curriculo: Curriculo = {
      nomeCompleto: 'Teste de Currículo',
      email: 'teste@example.com',
      telefone: '31999999999',
      formacao: 'Engenharia de Software',
      experiencia: 'Experiência em desenvolvimento Angular',
      habilidades: ['TypeScript', 'Angular'],
    };

    expect(curriculo).toBeTruthy();
    expect(curriculo.nomeCompleto).toBe('Teste de Currículo');
  });
});
