import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { cache } from 'react';
import { getPhotos } from '../apiService/photos';
import Button from '../components/Button/Button';
import ImageModal from '../components/ImageModal/ImageModal';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);

  const [visible, setVisible] = useState(false);
  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectImage, setSelectImage] = useState('');

  const getQuery = inputValue => {
    setQuery(`${inputValue}/${Date.now()}`);
    setPhotos([]);
    setPage(1);
    setError(null);
    setLoader(false);
    setIsEmpty(false);
    setVisible(false);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const getGallery = async () => {
      try {
        setError(null);
        setLoader(true);

        const {
          page: currentPage,
          per_page,
          photos,
          total_results,
        } = await getPhotos(query.split('/')[0], page);
        if (!photos.length) {
          setIsEmpty(true);
          return;
        }
        setPhotos(prepValue => [...prepValue, ...photos]);

        setVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(alert('error'));

        return;
      } finally {
        setLoader(false);
      }
    };
    getGallery();
  }, [query, page]);
  const handleClick = () => {
    setPage(page + 1);
  };
  //modal
  const openModal = urlModal => {
    console.log('modal');
    setModalOpen(true);
    setSelectImage(urlModal);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectImage('');
  };
  return (
    <>
      <p>
        <a
          href="https://github.com/reactjs/react-modal?tab=readme-ov-file#examples"
          target="_blank"
        >
          react-modal(https://github.com/reactjs/react-modal?tab=readme-ov-file#examples)
        </a>
      </p>
      <p>
        <a href="https://reactcommunity.org/react-modal/" target="_blank">
          react-modal(https://reactcommunity.org/react-modal/)
        </a>
      </p>
      <hr />
      <Form onSubmit={getQuery} />
      {loader && <Loader />}
      {error && <Text textAlign="center">Ooops! Try again 🔎</Text>}
      {!error && !isEmpty && <Text>🔎</Text>}
      {isEmpty && <Text textAlign="center">NOT Photos width this text🔎</Text>}
      {photos.length > 0 && (
        <>
          {/* Модалка при onClick - до самого последнего элемента */}
          <PhotosGallery photos={photos} onImageClick={openModal} />
          <ImageModal isOpen={modalOpen} onClose={closeModal}>
            <img src={selectImage} alt="Select" style={{ maxWidth: '100%' }} />
          </ImageModal>
        </>
      )}
      {/* {visible && <Button onClick={handleClick} />} */}
      {visible && (
        <Button onClick={handleClick} disabled={loader}>
          more
        </Button>
      )}
    </>
  );
};

export default Photos;

//modal
// const [modalOpen, setModalOpen] = useState(false);
// const [selectImage, setSelectImage] = useState('');

//modal
// const openModal = imageUrl => {
//   console.log('модалка');
//   setSelectImage(imageUrl);
//   setModalOpen(true);
// };
// const closeModal = () => {
//   setModalOpen(false);
//   setSelectImage('');
// };

{
  /* Модалка при onClick - до самого последнего элемента */
}
// <PhotosGallery photos={photos} onImageClick={openModal} />
// <ImageModal
//   isOpen={modalOpen}
//   onClose={closeModal}
//   imageUrl={selectImage}
// >
//   <img
//     src={selectImage}
//     alt="Selected"
//     style={{ maxWidth: '100%' }}
//   />
// </ImageModal>
