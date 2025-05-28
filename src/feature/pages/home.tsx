import avatar from '../../assets/avatar.jpg';
import * as S from './home.styles';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.Pulse>
        <img src={avatar} width={0} height={0} />
      </S.Pulse>
      <S.SectionContainer>
        <S.Title>
          <h1>Cristiny Boêta</h1>
          <p>
            Desenvolvedora Front-End com 4 anos de experiência, especializada em
            criar interfaces modernas e responsivas utilizando diferentes stacks
            e arquiteturas front-end. Tenho ampla experiência em projetos
            financeiros, contribuindo para o desenvolvimento de soluções
            escaláveis e seguras. Sou apaixonada por tecnologia e inovação,
            sempre buscando aprimorar minhas habilidades e entregar resultados
            de alta qualidade.{' '}
          </p>
        </S.Title>
        <S.SectionButtons>
          <button>Projetos</button>
          <button>Contato</button>
          <button>Curriculum</button>
        </S.SectionButtons>
      </S.SectionContainer>
    </S.HomeContainer>
  );
};

export default Home;
