import { ButtonSize } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonSize type="button" onClick={onClick}>
      Load more
    </ButtonSize>
  );
};
