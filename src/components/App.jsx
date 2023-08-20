import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchQuizzes } from './api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
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
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getPhotos(this.state.query, this.state.page);
    }
  }
  getPhotos = async (query, page) => {
    try {
      this.setState({ loading: true });
      const quizItems = await fetchQuizzes(query, page);
      this.setState({
        images: [...this.state.images, ...quizItems],
        loading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  changeQuery = newQuery => {
    this.setState({ query: newQuery, images: [], loading: false, page: 1 });
    localStorage.setItem(localStorageKey, JSON.stringify(newQuery));
  };
  pageUp = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar submitForm={this.changeQuery} />
        <ImageGallery arrayImages={this.state.images} />
        {this.state.loading && <Loader />}
        {this.state.images.length !== 0 && <Button onClick={this.pageUp} />}
      </>
    );
  }
}
