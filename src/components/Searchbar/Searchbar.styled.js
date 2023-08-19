import styled from 'styled-components';
export const HeaderBox = styled.header`
  font-size: 16px;
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgb(63, 81, 181);
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  width: 400px;
  height: 40px;
  border-radius: 20px;
`;
export const Input = styled.input`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 0;
`;
export const SpanIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 150ms ;
   &:hover {
    transform: scale(1.03);
`;
export const ButtonForm = styled.button`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px;

  width: 100px;
  height: 40px;

  object-fit: contain;
  cursor: pointer;
`;
