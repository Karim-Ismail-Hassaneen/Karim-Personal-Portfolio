/* eslint-disable react/react-in-jsx-scope */
import { RiHomeLine } from 'react-icons/ri'
import { AiOutlineIdcard, AiOutlineProject } from 'react-icons/ai'
import { BsPersonGear } from 'react-icons/bs'
import { MdOutlineContactPhone } from 'react-icons/md'

export const navItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: <RiHomeLine size={20}/>
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
    icon: <AiOutlineIdcard size={20} />
  },
  {
    id: 3,
    title: 'Skills',
    url: '/skills',
    icon: <BsPersonGear size={22} />
  },
  {
    id: 4,
    title: 'Projects',
    url: '/projects',
    icon: <AiOutlineProject size={20} />
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
    icon: <MdOutlineContactPhone size={20} />
  }
]

export const navLinks = [
  {
    id: 1,
    url: 'https://github.com/Karim-Ismail-Hassaneen',
    image: 'github',
    title: 'Github'
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/karim-i-hassaneen-37455225b/',
    image: 'linkedin',
    title: 'Linkedin'
  },
  {
    id: 3,
    url: 'karimismailhassaneen@gmail.com',
    image: 'gmail',
    title: 'Gmail'
  }
]

export const projectsDetails = [
  {
    id: 1,
    title: 'Tech Heaven',
    image: 'e-commerce',
    url: '/TechHeaven',
    codeUrl: 'https://github.com/Karim-Ismail-Hassaneen/e-commerce',
    liveDemo: 'https://youtube-clone-lake-six.vercel.app/',
    describtion: 'I built this application in Next JS with Payload CMS that you can use it to handle and edit every component in your application like SEO, Pages, Content and more.. You can login and pay with stripe and it hosted on vercel'
  },
  {
    id: 2,
    title: 'Youtube-Clone',
    image: 'youtube',
    url: '/Youtube',
    codeUrl: 'https://github.com/Karim-Ismail-Hassaneen/Youtube-Clone',
    liveDemo: 'https://youtube-clone-lake-six.vercel.app/',
    describtion: 'I built this application in Next JS and Material ui and it hosted on Vercel This application is pulling vieodata from an the Rapid API and displaying different categories It features vertical sliding and a featured selection and you can choose any category or search any video and you can watch it'
  },
  {
    id: 3,
    title: 'To-Do List',
    image: 'todos',
    url: '/TodoList',
    codeUrl: 'https://github.com/Karim-Ismail-Hassaneen/Todos-List-React-JS',
    liveDemo: 'https://todos-list-react-js.vercel.app/',
    describtion: 'I built this application in React JS and css and it hosted on Vercel in This application you can write you task and after you finish it you can delete it or strike throught it'
  },
  {
    id: 4,
    title: 'Filmpier',
    image: 'filmpier',
    url: '/Filmpier',
    codeUrl: 'https://github.com/Karim-Ismail-Hassaneen/Filmpier',
    describtion: 'I built this application in Next JS and is hosted on Firebase This app features user authentication with firebase as well as the firestore cloud storage database. This application is pulling moviedata from an the IMDB movie API and displaying different categories It features horizontal sliding and a featured selection. The useContext hook is also being implemented for app wide state management'
  },
  {
    id: 5,
    title: 'Weather-App',
    image: 'weather',
    url: '/Weather',
    codeUrl: 'https://github.com/Karim-Ismail-Hassaneen/Weather-App',
    liveDemo: 'https://weather-app-roan-psi.vercel.app/',
    describtion: 'I built this application in Next JS and is hosted on Vercel This app features you can know the weather by enter you city in the search input field in Arabic Or English '
  }
]

export const skills = [
  {
    id: 1,
    image: 'html',
    title: 'Html'
  },
  {
    id: 2,
    image: 'css',
    title: 'Css'
  },
  {
    id: 3,
    image: 'javascript',
    title: 'Javascript'
  },
  {
    id: 4,
    image: 'react',
    title: 'Reactjs'
  },
  {
    id: 5,
    image: 'typescript',
    title: 'Typescript'
  },
  {
    id: 6,
    image: 'nextjs',
    title: 'Nextjs'
  },
  {
    id: 7,
    image: 'nodejs',
    title: 'Nodejs'
  },
  {
    id: 8,
    image: 'tailwind css',
    title: 'Tailwind css'
  },
  {
    id: 9,
    image: 'material-ui',
    title: 'Material UI'
  },
  {
    id: 10,
    image: 'github',
    title: 'Github'
  },
  {
    id: 11,
    image: 'git',
    title: 'Git'
  },
  {
    id: 12,
    image: 'python',
    title: 'Python'
  }
]
