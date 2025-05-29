import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(1, 'O campo nome é obrigatório'),
  email: z.string().email('Formato de email inválido'),
  message: z.string().min(1, 'O campo mensagem é obrigatório'),
});
