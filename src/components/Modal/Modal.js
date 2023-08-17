import * as basicLightbox from 'basiclightbox';
export const Modal = (srcData, altData) => {
  const instance = basicLightbox.create(`
    <div class="overlay">
      <div class="modal">
        <img src={srcData} alt={altData} />
      </div>
    </div>
  `);
  instance.show();
  return instance;
};
