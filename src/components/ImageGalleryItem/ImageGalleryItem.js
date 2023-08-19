import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Wrapper, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ arrayData }) => {
  const srcData = arrayData.largeImageURL;
  const srcPrevview = arrayData.webformatURL;
  const altData = arrayData.tags;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper className="gallery-item" onClick={openModal}>
      <Image src={srcPrevview} alt={altData} />

      {modalOpen && (
        <Modal
          srcDataModal={srcData}
          altDataModal={altData}
          isOpen={modalOpen}
          onRequestClose={closeModal}
        />
      )}
    </Wrapper>
  );
};
