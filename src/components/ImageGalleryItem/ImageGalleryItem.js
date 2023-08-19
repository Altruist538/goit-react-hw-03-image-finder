import { useState } from 'react';
import { ModalOn } from 'components/Modal/Modal';
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
        <ModalOn
          srcDataModal={srcData}
          altDataModal={altData}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </Wrapper>
  );
};
