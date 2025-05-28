import { useEffect } from 'react';
import Layout from '../../layout';
import * as S from './contact.style';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contato';
  }, []);

  return (
    <Layout>
      <S.FormWrapper>
        <S.FormContainer>
          <p>Entre em contato comigo</p>
          <S.Label>Nome</S.Label>
          <S.Input
            type="text"
            name="user_name"
            placeholder="Entre com o seu nome"
          />
          <S.Label>Email</S.Label>
          <S.Input
            type="email"
            name="user_email"
            placeholder="Entre com o seu e-mail"
          />
          <S.Label>Menssagem</S.Label>
          <S.Textarea name="message" placeholder="Entre com a sua mensagem" />
          <S.Button type="submit" value="Submit">
            Enviar
          </S.Button>
          <S.Link href="/home">Voltar</S.Link>
        </S.FormContainer>
      </S.FormWrapper>
    </Layout>
  );
};

export default Contact;
