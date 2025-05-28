import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 3rem;
  height: 80%;
  border-radius: 15px;
  gap: 0.5rem;

  p {
    text-align: start;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  width: 30vw;
  min-width: 12rem;
  height: 3.125rem;
  margin: 0.625rem auto;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  background: #ffffff;
  outline: none;

  &:focus {
    border: 1px solid #ffdbd4;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-top: 1rem;
`;

export const Textarea = styled.textarea`
  min-width: 30vw;
  height: 9.375rem;
  margin: 0.625rem auto;
  padding: 1.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  background: #ffffff;
  outline: none;
  &:focus {
    border: 1px solid #ffdbd4;
  }
`;

export const Button = styled.button`
  width: 30vw;
  margin-top: 2rem;
  padding: 0.9375rem;
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  border: 1px solid #ffdbd4;
  border-radius: 7px;
  background: #ffdbd4;
  color: #ffff;
  font-weight: 600;
`;

export const Link = styled.a`
  width: 30vw;
  text-align: center;
  padding: 0.9375rem;
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  border-radius: 7px;
  color: #f08080;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
