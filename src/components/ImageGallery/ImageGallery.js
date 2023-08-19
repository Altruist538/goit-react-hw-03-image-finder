import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListImage } from './ImageGallery.styled';
export const ImageGallery = ({ arrayImages }) => {
  console.log(arrayImages);
  return (
    <>
      <ListImage className="gallery">
        {arrayImages.map(arrayImage => (
          <ImageGalleryItem key={arrayImage.id} arrayData={arrayImage} />
        ))}
      </ListImage>
    </>
  );
};
