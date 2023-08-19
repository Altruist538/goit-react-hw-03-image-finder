import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchQuizzes } from './api';
import { Button } from './Button/Button';
const localStorageKey = 'quiz-query';

export class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
  };

  componentDidMount() {
    const savedQuery = localStorage.getItem(localStorageKey);
    if (savedQuery !== null) {
      this.setState({
        query: JSON.parse(savedQuery),
      });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = prevState;
    const { query: nextQuery } = this.state;

    if (prevQuery !== nextQuery) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextQuery));
      try {
        this.setState({ loading: true });

        const quizItems = await fetchQuizzes(nextQuery, this.state.page);
        // console.log(quizItems[0].tags);

        this.setState({
          images: [...this.state.images, ...quizItems],
          loading: false,
        });
      } catch (error) {
        console.log(error);
        this.setState({ loading: false });
      }
    }
  }
  changeQuery = newQuery => {
    this.setState({ query: newQuery, images: [], loading: false, page: 1 });
    // console.log(this.state.query);
  };
  pageUp = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log(this.state.page);
  };

  onSubmitForm = value => {
    this.changeQuery(value);

    localStorage.setItem(localStorageKey, JSON.stringify(value));
  };
  render() {
    return (
      <>
        <Searchbar submitForm={this.onSubmitForm} />
        <ImageGallery arrayImages={this.state.images} />
        <Button onClick={this.pageUp} />
      </>
    );
  }
}
