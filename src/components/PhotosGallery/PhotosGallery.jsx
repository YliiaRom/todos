import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';
const PhotosGallery = ({ photos, onImageClick }) => {
  // Modal-onImageClick- передаёт значение url
  return (
    <>
      <h3>PhotosGallery</h3>
      <Grid>
        {photos.map(photo => (
          <GridItem key={photo.id}>
            <PhotosGalleryItem
              photo={photo}
              onClick={() => onImageClick(photo.src.large2x)}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default PhotosGallery;

// const PhotosGallery = ({ photos, onImageClick }) => {
//  <PhotosGalleryItem
//    photo={photo}
//    onClick={() => onImageClick(photo.src.large2x)}
//  />;

// {/* <Grid>
//   {[].map(() => (
//     <GridItem>
//       <PhotosGalleryItem />
//     </GridItem>
//   ))}
// </Grid>; */}
