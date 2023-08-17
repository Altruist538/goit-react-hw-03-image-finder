import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = (srcData, altData, idData) => {
  return (
    <li
      key={idData}
      className="gallery-item"
      onClick={<Modal srcData={srcData} altData={altData} />}
    >
      <img src={srcData} alt={altData} />
    </li>
  );
};
