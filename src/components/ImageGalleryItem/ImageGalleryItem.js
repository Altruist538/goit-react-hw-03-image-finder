import React, { Component } from 'react';
import { ModalOn } from 'components/Modal/Modal';
import { Wrapper, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { arrayData } = this.props;
    const srcData = arrayData.largeImageURL;
    const srcPrevview = arrayData.webformatURL;
    const altData = arrayData.tags;

    return (
      <Wrapper>
        <Image onClick={this.openModal} src={srcPrevview} alt={altData} />
        <ModalOn
          srcDataModal={srcData}
          altDataModal={altData}
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
        />
      </Wrapper>
    );
  }
}
