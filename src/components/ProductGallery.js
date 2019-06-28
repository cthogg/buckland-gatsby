import React from 'react'
import Gallery from 'react-grid-gallery'
import PlantImg from '../assets/img/products/plants.jpg'
import TreesImg from '../assets/img/products/trees.jpg'
import PavingImg from '../assets/img/products/paving.jpg'
import GritsImg from '../assets/img/products/grits_gravels.jpg'
import StonewareImg from '../assets/img/products/stoneware.jpg'
import PotsImg from '../assets/img/products/pots.jpg'
import FencingImg from '../assets/img/products/fencing.jpg'
import SundriesImg from '../assets/img/products/sundries_one.jpg'

const IMAGE_HEIGHT = 212
const IMAGE_WIDTH = 320
const IMAGES = [
  {
    src: PlantImg,
    thumbnail: PlantImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'We have a large selection of plants always in stock including shrubs, herbs, fruit trees, bushes and the best David Austin roses. ',
    thumbnailCaption: 'Plants',
  },
  {
    src: TreesImg,
    thumbnail: TreesImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'Always a huge range of ornamental and fruit trees in stock. Hedging plants of all sizes too !',
    thumbnailCaption: 'Trees',
  },

  {
    src: PavingImg,
    thumbnail: PavingImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'We have a large selection of Lonstone paving always in stock. Please ask for our colour catalogue and price list.',
    thumbnailCaption: 'Paving',
  },

  {
    src: GritsImg,
    thumbnail: GritsImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'We hold large stocks of Kelkay slate, sands, gravel, chippings and rockery stone, many of which are on multi-buy deals.',
    thumbnailCaption: 'Grits and Gravels',
  },

  {
    src: StonewareImg,
    thumbnail: StonewareImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      ' We stock all types of stoneware and statuary. Our suppliers include Lucas Stone, Willowstone, Sparta Statues, Ripley Garden Ornaments and English Garden Statuary.',
    thumbnailCaption: 'Stoneware',
  },

  {
    src: PotsImg,
    thumbnail: PotsImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'We offer a wide range of pots from many suppliers, including Yorkshire Flower Pots, Errington Reay and Woodlodge.',
    thumbnailCaption: 'Pots',
  },
  {
    src: FencingImg,
    thumbnail: FencingImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'Our wide selection of Grange products includes fencing, trellis, posts, gates and log edging.',
    thumbnailCaption: 'Fencing and Trellis',
  },
  {
    src: SundriesImg,
    thumbnail: SundriesImg,
    thumbnailWidth: IMAGE_WIDTH,
    thumbnailHeight: IMAGE_HEIGHT,
    caption:
      'Come and see our wide range of tools, chemicals, hoses and accessories, seeds, bird feeds and much more.',
    thumbnailCaption: 'Sundries',
  },
]

const ProductGallery = () => (
  <Gallery
    backdropClosesModal={true}
    enableImageSelection={false}
    images={IMAGES}
  />
)

export default ProductGallery
