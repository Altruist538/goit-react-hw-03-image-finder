// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ arrayImages }) => {
  console.log(arrayImages);
  return (
    <>
      <ul className="gallery">
        {arrayImages.map((arrayImage, index) => (
          <li key={arrayImage.id} className="gallery-item">
            <img src={arrayImage.largeImageURL} alt={arrayImage.tags} />
          </li>
          //   <ImageGalleryItem
          //     srcData={arrayImage.largeImageURL}
          //     altData={arrayImage.tags}
          //     idData={arrayImage.id}
          //   />
        ))}
      </ul>
    </>
  );
};
