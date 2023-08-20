import Modal from 'react-modal';
import { Image } from './Modal.styled';

Modal.setAppElement('#root');

export const ModalOn = ({ srcDataModal, altDataModal, isOpen, onClose }) => {
  return (
    <Modal
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        content: {
          position: 'static',
          margin: 'auto',
          border: 'none',
          borderRadius: '0',
          padding: '0',
          backgroundColor: 'transparent',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
    >
      <Image src={srcDataModal} alt={altDataModal} />
    </Modal>
  );
};
