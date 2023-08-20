import {
  HeaderBox,
  Form,
  Input,
  ButtonForm,
  SpanIcon,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
export const Searchbar = ({ submitForm }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    submitForm(query);
    event.target.reset();
  };
  return (
    <>
      <HeaderBox className="searchbar">
        <Form onSubmit={handleSubmit} className="form">
          <ButtonForm type="submit">
            <SpanIcon className="button-label">
              <BiSearchAlt size={30} color="rgb(63 81 181)" />
            </SpanIcon>
          </ButtonForm>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search images and photos"
          />
        </Form>
      </HeaderBox>
    </>
  );
};
