import * as React from 'react'
import AddIcon from '@mui/icons-material/Add'
import BadgeIcon from '@mui/icons-material/Badge'
import CodeIcon from '@mui/icons-material/Code'
import BoxIcon from '@mui/icons-material/CheckBoxOutlineBlank'

import IboatsIcon from '@mui/icons-material/DirectionsBoatFilled'
import PropTypes from 'prop-types'

/* eslint-disable max-lines */

import {
  PlusOneDash,
  AzdeqStart,
  IboatsCreateBoat,
  AzdeqForm,
  AzdeqStepper,
  AzdeqInfo,
  AzdeqLog,
  AzdeqReg,
  FreelanceHome,
  FreelanceContact,
  FreelanceProduct,
  IboatsAd,
  FreelanceTestimonials,
  IboatsAccount,
  IboatsCheckout,
  IboatsFeatured,
  IboatsOptions,
  IboatsHome,
  IboatsRecord,
  IboatsResearchType,
  IboatsSearch,
  PlusOneDate,
  PlusOneLogin,
  PlusOneStyle,
  PlusOneTable,
  PlusOneWorkFlow,
  IboatsResearch,
  IboatsPromo,
  IboatsType,
  StrategyHome,
  StrategySettings,
  StrategyBoard,
  StrategyForgot,
  StrategyItem,
  StrategyItemEdit,
  StrategyLogin,
  StrategyRegister,
  StrategyMember,
  StrategyProject,
  StrategyPublicBoard,
} from './imgs'

const experience = [
  {
    id: 'Stragegy-Fx',
    label: 'Strategy Fx',
    title: 'Full Stack Web Developer',
    relevantSkills: [
      'CSS',
      'JavaScript',
      'ESLint',
      'GIT / GiutHub',
      'HTML',
      'NPM',
      'MongoDB',
      'TypeScript',
      'UNIX',
      'Vercel',
      'VSCode',
    ],
    yearsActive: '2022 - Present',
    otherSkills: ['NextJS', 'Material UI', 'NodeJS', 'React'],
    icon: <BoxIcon fontSize="large" />,
    links: [
      {
        label: 'Strategy Guide',
        url: 'https://www.strategy-fx.com/boards/member/64e504767d90844065cd4eb1',
      },
    ],
    imgs: [
      {img: StrategyHome, label: 'Home'},
      {img: StrategySettings, label: 'Settings'},
      {img: StrategyLogin, label: 'Login'},
      {img: StrategyRegister, label: 'Register'},
      {img: StrategyForgot, label: 'Forgot Password'},
      {img: StrategyBoard, label: 'Board'},
      {img: StrategyItem, label: 'Item'},
      {img: StrategyItemEdit, label: 'Item Edit'},
      {img: StrategyMember, label: 'Member'},
      {img: StrategyProject, label: 'Project'},
      {img: StrategyPublicBoard, label: 'Public Board'},
    ],
  },
  {
    id: 'plusone',
    label: 'PlusOne Company / C-Tech',
    title: 'Front End Specialist',
    relevantSkills: [
      'CSS',
      'GoJS',
      'GIT',
      'HighCharts',
      'HTML',
      'JavaScript',
      'NPM',
      'SCSS',
      'TSLint',
      'TypeScript',
      'UNIX',
      'WebStorm',
    ],
    yearsActive: '2000 - 2021',
    otherSkills: ['Angular'],
    icon: <AddIcon fontSize="large" />,
    imgs: [
      {img: PlusOneDash, label: 'Dashboard'},
      {img: PlusOneDate, label: 'Date Picker'},
      {img: PlusOneLogin, label: 'Login'},
      {img: PlusOneStyle, label: 'Style Guide'},
      {img: PlusOneTable, label: 'Table'},
      {img: PlusOneWorkFlow, label: 'Work Flow'},
    ],
  },
  {
    id: 'azdeq',
    label: 'Impact / Arizona Department of Environmental Quality',
    title: 'Front End Specialist',
    relevantSkills: [
      'CSS',
      'TSLint',
      'GIT',
      'HTML',
      'JavaScript',
      'NPM',
      'SCSS',
      'TypeScript',
      'UNIX',
      'Java',
    ],
    otherSkills: ['Angular', 'Spring', 'NgBootstrap'],
    yearsActive: '2017 - 2020',
    icon: <BadgeIcon fontSize="large" />,
    imgs: [
      {img: AzdeqForm, label: 'Form'},
      {img: AzdeqInfo, label: 'Info'},
      {img: AzdeqLog, label: 'Log'},
      {img: AzdeqReg, label: 'Register'},
      {img: AzdeqStart, label: 'Start'},
      {img: AzdeqStepper, label: 'Stepper'},
    ],
  },
  {
    id: 'freelance',
    label: 'Freelance',
    title: 'Full Stack Web Developer',
    relevantSkills: [
      'CSS',
      'ESLint',
      'TSLint',
      'GIT',
      'HTML',
      'JavaScript',
      'Material UI',
      'NPM',
      'React',
      'SCSS',
      'SEO',
      'TypeScript',
      'UNIX',
      'Illustrator',
      'NodeJS',
      'Perl',
      'PHP',
      'MongoDB',
      'MySQL',
      'Photoshop',
      'PostgreSQL',
      'SASS',
      'SQL',
    ],
    otherSkills: [
      'Angular',
      'AngularJS',
      'Angular Material',
      'Bootstrap',
      'Express',
      'JQuery',
      'LESS',
    ],
    yearsActive: '2000 - Present',
    icon: <CodeIcon fontSize="large" />,
    imgs: [
      {img: FreelanceHome, label: 'Home'},
      {img: FreelanceProduct, label: 'Product'},
      {img: FreelanceTestimonials, label: 'Testimonials', width: '68%'},
      {img: FreelanceContact, label: 'Contact'},
    ],
  },
  {
    id: 'iboats',
    label: 'iBOATS',
    title: 'Full Stack Web Developer',
    relevantSkills: ['CSS', 'GIT', 'HTML', 'JavaScript', 'UNIX', 'Perl', 'PostgreSQL', 'SQL'],
    otherSkills: ['JQuery'],
    yearsActive: '2000 - 2016',
    icon: <IboatsIcon fontSize="large" />,
    imgs: [
      {img: IboatsHome, label: 'Home', width: '90%'},
      {img: IboatsAccount, label: 'Account Info'},
      {img: IboatsAd, label: 'Ad', width: '86%'},
      {img: IboatsSearch, label: 'Advanced Search'},
      {img: IboatsCheckout, label: 'Check Out'},
      {img: IboatsCreateBoat, label: 'Creat Ad', width: '84%'},
      {img: IboatsFeatured, label: 'Featured Ad', width: '66%'},
      {img: IboatsOptions, label: 'Options'},
      {img: IboatsPromo, label: 'Promo'},
      {img: IboatsRecord, label: 'Research Item'},
      {img: IboatsResearch, label: 'Research'},
      {img: IboatsType, label: 'Type Listing', width: '79%'},
      {img: IboatsResearchType, label: 'Research Type Listing'},
    ],
  },
]
export default experience

// eslint-disable-next-line max-lines
export const expRecsPropType = {
  expRec: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    relevantSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
    otherSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.element.isRequired,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        width: PropTypes.string,
      })
    ),
  }),
}
