import React from 'react'
import Gallery from 'react-grid-gallery'

const IMAGE_HEIGHT = 212
const IMAGE_WIDTH = 320
let arrayOfImages = [
  'DSC05815',
  'DSC05820',
  'DSC05739',
  'DSC05740',
  'DSC05743',
  'DSC05752',
  'DSC05756',
  'DSC05734',
  'DSC05759',
  'DSC05762',
  'DSC05770',
  'DSC05771',
  'DSC05774',
  'DSC05777',
  'DSC05778',
  'DSC05782',
  'DSC05783',
  'DSC05784',
  'DSC05785',
  'DSC05794',
  'DSC05799',
  'DSC05806',
  'DSC05808',
  'DSC05812',
]

const IMAGES = arrayOfImages.map(imageName => {
  return {
    src: require(`../assets/img/garden-centre-images-condensed/${imageName}.jpg`),
    thumbnail: require(`../assets/img/garden-centre-images-condensed/${imageName}.jpg`),
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
  }
})

const ProductGallery = () => (
  <Gallery
    backdropClosesModal={true}
    enableImageSelection={false}
    images={IMAGES}
  />
)

export default ProductGallery
