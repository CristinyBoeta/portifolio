import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../layout';
import Alert from '../components/alert.component';
import { schema } from '../formValidation';
import { onSubmit } from '../services/email.services';
import * as S from './contact.style';

const Contact = () => {
  const [hasSendEmail, setHasSendEmail] = useState({
    enableAlert: true,
    hasSuccess: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    document.title = 'Contato';
  }, []);

  return (
    <Layout>
      <Alert
        isEnableAlert={hasSendEmail.enableAlert}
        hasSuccess={hasSendEmail.hasSuccess}
        setHasSendEmail={setHasSendEmail}
      />
      <S.FormWrapper>
        <S.FormContainer onSubmit={handleSubmit((data) => onSubmit(data, setHasSendEmail))}>
          <p>Entre em contato comigo</p>
          <S.Label>Nome</S.Label>
          <S.Input type="text" placeholder="Entre com o seu nome" {...register('name')} />
          {errors.name && <S.Error>{errors.name.message}</S.Error>}

          <S.Label>Email</S.Label>
          <S.Input type="email" placeholder="Entre com o seu e-mail" {...register('email')} />
          {errors.email && <S.Error>{errors.email.message}</S.Error>}

          <S.Label>Menssagem</S.Label>
          <S.Textarea placeholder="Entre com a sua mensagem" {...register('message')} />
          {errors.message && <S.Error>{errors.message.message}</S.Error>}

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
