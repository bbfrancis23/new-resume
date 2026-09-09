import React from 'react'
import {Box, Typography, Modal} from '@mui/material'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Keyboard} from 'swiper/modules'
import 'swiper/css'
import ExpCarouselControls from './ExpCarouselControls'
import ExpCarouselNavFab from './ExpCarouselNavFab'
import useHoverFocusVisible from './useHoverFocusVisible'
import {expRecsPropType} from '../../data'

export default function ExpCarousel(props) {
  const {expRec} = props

  const imgHeightWidth = '500'

  const [activeStep, setActiveStep] = React.useState(0)
  const [lightboxImg, setLightboxImg] = React.useState(null)
  const [showNav, navHoverProps] = useHoverFocusVisible()
  const swiperRef = React.useRef(null)

  const openLightbox = (step) => {
    swiperRef.current?.keyboard.disable()
    setLightboxImg(step)
  }

  const closeLightbox = () => {
    swiperRef.current?.keyboard.enable()
    setLightboxImg(null)
  }

  return (
    <>
      <Box sx={{position: 'relative'}} {...navHoverProps}>
        <Swiper
          modules={[Keyboard]}
          keyboard={{enabled: true}}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}>
          {expRec.imgs.map((step) => (
            <SwiperSlide key={`${step.label}-${expRec.label}`}>
              <Box>
                <Typography component="span">{step.label}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: `${imgHeightWidth}px`,
                  }}>
                  <button
                    type="button"
                    onClick={() => openLightbox(step)}
                    style={{
                      border: 0,
                      padding: 0,
                      background: 'none',
                      cursor: 'zoom-in',
                      width: step.width ? step.width : '95%',
                    }}>
                    <img
                      src={step.img}
                      alt={step.label}
                      width={imgHeightWidth}
                      height={imgHeightWidth}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        width: '100%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        overflow: 'hidden',
                      }}
                    />
                  </button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <ExpCarouselNavFab
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeStep === 0}
          visible={showNav}
          sx={{
            position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1,
          }}
        />
        <ExpCarouselNavFab
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeStep === expRec.imgs.length - 1}
          visible={showNav}
          sx={{
            position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1,
          }}
        />
        <ExpCarouselControls
          expRec={expRec}
          activeStep={activeStep}
          onSelectStep={(index) => swiperRef.current?.slideTo(index)}
        />
      </Box>
      <Modal
        open={Boolean(lightboxImg)}
        onClose={closeLightbox}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box
          onClick={closeLightbox}
          sx={{
            outline: 'none',
            maxWidth: '90vw',
            maxHeight: '90vh',
            cursor: 'zoom-out',
          }}>
          {lightboxImg && (
            <img
              src={lightboxImg.img}
              alt={lightboxImg.label}
              style={{
                display: 'block',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  )
}
ExpCarousel.propTypes = {
  expRec: expRecsPropType.expRec.isRequired,
}
