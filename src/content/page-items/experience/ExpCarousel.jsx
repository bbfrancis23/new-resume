import React from 'react'
import {Box, Typography, Fab, Modal} from '@mui/material'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Keyboard} from 'swiper/modules'
import 'swiper/css'
import ExpCarouselControls from './ExpCarouselControls'
import {expRecsPropType} from '../../data'

export default function ExpCarousel(props) {
  const {expRec} = props

  const imgHeightWidth = '500'

  const [activeStep, setActiveStep] = React.useState(0)
  const [lightboxImg, setLightboxImg] = React.useState(null)
  const [showNav, setShowNav] = React.useState(false)
  const swiperRef = React.useRef(null)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  React.useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeStep) {
      swiperRef.current.slideTo(activeStep)
    }
  }, [activeStep])

  return (
    <>
      <Box
        sx={{position: 'relative'}}
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}>
        <Swiper
          modules={[Keyboard]}
          keyboard={{enabled: true}}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => handleStepChange(swiper.activeIndex)}>
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
                    onClick={() => setLightboxImg(step)}
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
        <Fab
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeStep === 0}
          variant="effects"
          fade="true"
          sx={{
            visibility: showNav ? 'visible' : 'hidden',
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}>
          <KeyboardArrowLeft />
        </Fab>
        <Fab
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeStep === expRec.imgs.length - 1}
          variant="effects"
          fade="true"
          sx={{
            visibility: showNav ? 'visible' : 'hidden',
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}>
          <KeyboardArrowRight />
        </Fab>
      </Box>
      <Modal
        open={Boolean(lightboxImg)}
        onClose={() => setLightboxImg(null)}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box
          onClick={() => setLightboxImg(null)}
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
      <ExpCarouselControls
        expRec={expRec}
        activeStep={activeStep}
        setActiveStep={handleStepChange}
      />
    </>
  )
}
ExpCarousel.propTypes = {
  expRec: expRecsPropType.expRec.isRequired,
}
