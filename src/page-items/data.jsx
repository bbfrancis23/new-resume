import * as React from 'react'
import AddIcon from '@mui/icons-material/Add'
import BadgeIcon from '@mui/icons-material/Badge'
import CodeIcon from '@mui/icons-material/Code'
import IboatsIcon from '@mui/icons-material/DirectionsBoatFilled'
import PlusOneCover from '../img/portfolio/plueone/cover.png'
import AZDEQCover from '../img/portfolio/azdeq/cover.png'
import FreelanceCover from '../img/portfolio/freelance/cover.jpg'
import flHome from '../img/portfolio/freelance/home.jpg'
import flProduct from '../img/portfolio/freelance/product.jpg'
import flTestimonials from '../img/portfolio/freelance/testimonials.jpg'
import flContact from '../img/portfolio/freelance/contact.jpg'
import IboatsCover from '../img/portfolio/iboats/cover.jpg'
import iboatsHome from '../img/portfolio/iboats/home.jpg'
import iboatsAccount from '../img/portfolio/iboats/account-info.jpg'
import iboatsAd from '../img/portfolio/iboats/ad.jpg'
import iboatsSearch from '../img/portfolio/iboats/advanced-search.jpg'
import iboatsCheckout from '../img/portfolio/iboats/check-out.jpg'
import iboatsCreateBoat from '../img/portfolio/iboats/create-record.jpg'
import iboatsFeatured from '../img/portfolio/iboats/featured.jpg'
import iboatsOptions from '../img/portfolio/iboats/options.jpg'
import iboatsPromo from '../img/portfolio/iboats/promo.jpg'
import iboatsRecord from '../img/portfolio/iboats/record.jpg'
import iboatsResearch from '../img/portfolio/iboats/research.jpg'
import iboatsType from '../img/portfolio/iboats/type-listings.jpg'
import iboatsResearchType from '../img/portfolio/iboats/research-type-listing.jpg'

const experience = [
  {
    id: 'plusone',
    label: 'PlusOne Company / C-Tech',
    title: 'Front End Specialist',
    relevantSkills: [
      'CSS', 'GoJS', 'GIT', 'HighCharts', 'HTML', 'JavaScript', 'NPM', 'SCSS', 'TSLint', 'TypeScript', 'UNIX', 'WebStorm',
    ],
    yearsActive: '2000 - 2021',
    otherSkills: ['Angular'],
    icon: <AddIcon fontSize="large" />,
    cover: PlusOneCover,
  },
  {
    id: 'azdeq',
    label: 'Impact / Arizona Department of Environmental Quality',
    title: 'Front End Specialist',
    relevantSkills: ['CSS', 'TSLint', 'GIT', 'HTML', 'JavaScript', 'NPM', 'SCSS', 'TypeScript', 'UNIX'],
    otherSkills: ['Angular', 'Java', 'Spring', 'NgBootstrap'],
    yearsActive: '2017 - 2020',
    icon: <BadgeIcon fontSize="large" />,
    cover: AZDEQCover,
  },
  {
    id: 'freelance',
    label: 'Freelance',
    title: 'Full Stack Web Developer',
    relevantSkills: [
      'CSS', 'ESLint', 'TSLint', 'GIT', 'HTML', 'JavaScript', 'Matrial UI', 'NPM', ' React', 'SCSS', 'SEO', 'TypeScript',
      'UNIX',
    ],
    otherSkills: [
      'Angular', 'AngularJS', 'Angular Material', 'Bootstrap', 'Express', 'Illustrator', 'JQuery', 'LESS', 'MongoDB',
      'MySQL', 'NodeJS', 'Perl', 'Photoshop', 'PHP', 'PostgreSQL', 'SASS', 'SQL',
    ],
    yearsActive: '2000 - Present',
    icon: <CodeIcon fontSize="large" />,
    cover: FreelanceCover,
    imgs: [
      { img: flHome, label: 'Home' },
      { img: flProduct, label: 'Product' },
      { img: flTestimonials, label: 'Testimonials' },
      { img: flContact, label: 'Contact' },
    ],
  },
  {
    id: 'iboats',
    label: 'iBOATS',
    title: 'Full Stack Web Developer',
    relevantSkills: [
      'CSS', 'GIT', 'HTML', 'JavaScript', 'UNIX',
    ],
    otherSkills: ['JQuery', 'Perl', 'PostgreSQL', 'SQL'],
    yearsActive: '2000 - 2016',
    icon: <IboatsIcon fontSize="large" />,
    cover: IboatsCover,
    imgs: [
      { img: iboatsHome, label: 'Home' },
      { img: iboatsAccount, label: 'Account Info' },
      { img: iboatsAd, label: 'Ad' },
      { img: iboatsSearch, label: 'Advanced Search' },
      { img: iboatsCheckout, label: 'Check Out' },
      { img: iboatsCreateBoat, label: 'Creat Ad' },
      { img: iboatsFeatured, label: 'Featured Ad' },
      { img: iboatsOptions, label: 'Options' },
      { img: iboatsPromo, label: 'Promo' },
      { img: iboatsRecord, label: 'Research Item' },
      { img: iboatsResearch, label: 'Research' },
      { img: iboatsType, label: 'Type Listing' },
      { img: iboatsResearchType, label: 'Research Type Listing' },
    ],
  },
]

export default experience