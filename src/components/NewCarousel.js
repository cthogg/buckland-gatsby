import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import entranceImg from '../assets/img/1300_300/entrance.jpg'
import flowersImg from '../assets/img/1300_300/flowers.jpg'
import plantsImg from '../assets/img/1300_300/plants.jpg'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const SliderContainer = styled.div`
  display: flex !important;
  flex-direction: column-reverse;
  padding-bottom: 15px;
  background: url(${props => props.imgSrc});
  height: 400px;
  @media (max-width: 600px) {
    height: 200px;
  }
  background-size: cover;
  background-position: center;
  width: 100%;
`
const SliderText = styled.div`
  background-color: #406e06;
  opacity: 0.9;
  color: white;
  text-align: center;
  position: absolute;
  @media (max-width: 600px) {
    width: 90vw;
  }
  width: 100vw;
  margin-bottom: 15px;
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'inline' }}
      onClick={onClick}
    />
  )
}
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      lazyLoad: true,
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,
    }
    return (
      <Slider {...settings}>
        <SliderContainer>
          <Img fluid={this.props.data.imageOne.childImageSharp.fluid}> </Img>
          <SliderText>
            <Link to="/">
              {' '}
              An independent garden centre for over 150 years.
            </Link>
          </SliderText>
        </SliderContainer>
        <SliderContainer>
          <Img fluid={this.props.data.imageTwo.childImageSharp.fluid}> </Img>
          <SliderText>
            <Link to="/visit-us"> How to find us </Link>
          </SliderText>
        </SliderContainer>
        <SliderContainer>
          <Img fluid={this.props.data.imageThree.childImageSharp.fluid}> </Img>
          <SliderText>
            <Link to="/products">
              {' '}
              One of the widest selection of plants in the area.
            </Link>
          </SliderText>
        </SliderContainer>
      </Slider>
    )
  }
}
