import ReactModal from 'react-modal';
import { Image } from './Modal.styled';
ReactModal.setAppElement('#root');
export const Modal = ({
  srcDataModal,
  altDataModal,
  isOpen,
  onRequestClose,
}) => {
  return (
    <ReactModal
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
      onRequestClose={onRequestClose}
      contentLabel="Modal"
    >
      <Image src={srcDataModal} alt={altDataModal} />
    </ReactModal>
  );
};
