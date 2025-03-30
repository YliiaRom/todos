import styles from './PhotosGalleryItem.module.css';
const PhotosGalleryItem = ({ photo, onClick }) => {
  //modal - не сработает без клика по фото -onClick
  return (
    <>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
      >
        <img src={photo.src.large} alt={photo.alt} onClick={onClick} />
      </div>
    </>
  );
};
export default PhotosGalleryItem;

//modal onClick
// const PhotosGalleryItem = ({ photo, onClick }) => {
//        <img src={photo.src.large} alt={photo.alt} onClick={onClick} />
