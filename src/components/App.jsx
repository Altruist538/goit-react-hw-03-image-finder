import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchQuizzes } from './api';
const localStorageKey = 'quiz-query';
export class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
  };

  async componentDidMount() {
    const savedQuery = localStorage.getItem(localStorageKey);
    if (savedQuery !== null) {
      this.setState({
        query: JSON.parse(savedQuery),
      });
    }

    try {
      this.setState({ loading: true });
      const quizItems = await fetchQuizzes(this.state.query);
      console.log(quizItems[0].tags);
      this.state.images = quizItems;
      this.setState({ images: quizItems, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }
  changeQuery = newQuery => {
    this.setState({ query: newQuery });
  };

  // onSubmitForm = event => {
  //   // console.log(event);
  //   this.changeQuery(event);
  // };
  onSubmitForm = event => {
    // event.preventDefault(); // Зупиняємо стандартну поведінку форми
    this.setState({ images: [], loading: true }); // Очищаємо імейджі і вмикаємо loading
    this.changeQuery(event.target.elements[0].value); // Зчитуємо значення інпута

    localStorage.setItem(
      localStorageKey,
      JSON.stringify(event.target.elements[0].value)
    ); // Зберігаємо значення в localStorage
  };
  render() {
    return (
      <>
        <div>Soft</div>
        <Searchbar submitForm={this.onSubmitForm} />
        <ImageGallery arrayImages={this.state.images} />
      </>
    );
  }
}
