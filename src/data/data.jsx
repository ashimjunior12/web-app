import { FiInstagram, FiFacebook, FiSearch, FiGlobe } from 'react-icons/fi';
import { IoAppsOutline } from 'react-icons/io5';
import { GrIntegration } from 'react-icons/gr';
import { SiCoinmarketcap } from 'react-icons/si';
import { AiOutlineSolution } from 'react-icons/ai';

// Navigation Menu
const menuItems = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Services', link: '/services' },
  { id: 3, name: 'Work', link: '/work' },
  { id: 4, name: 'Blog', link: '/blog' },
  { id: 5, name: 'Contact', link: '/contact' },
];

// Social Media Links
const socialMediaLinks = [
  {
    id: 1,
    name: 'Instagram',
    link: 'https://www.instagram.com',
    icon: <FiInstagram />,
  },
  {
    id: 2,
    name: 'Facebook',
    link: 'https://www.facebook.com',
    icon: <FiFacebook />,
  },
];

// Search Bar Config
const searchBar = {
  placeholder: 'Search...',
  icon: <FiSearch />,
};

// Services Data
const servicesData = [
  {
    id: 1,
    title: 'Website Design and Development',
    content:
      'Crafting visually stunning and functionally robust websites tailored to reflect your brand identity and meet your business objectives.',
    icon: <FiGlobe />,
  },
  {
    id: 2,
    title: 'App Design and Development',
    content:
      'Creating intuitive mobile and web applications that offer seamless user experiences and drive engagement.',
    icon: <IoAppsOutline />,
  },
  {
    id: 3,
    title: 'AI Integration',
    content:
      'Leveraging cutting-edge artificial intelligence to streamline operations, enhance user interactions, and deliver predictive insights.',
    icon: <GrIntegration />,
  },
  {
    id: 4,
    title: 'Digital Marketing',
    content:
      'From SEO and content creation to social media strategy and paid advertising, we ensure your brand reaches the right audience effectively.',
    icon: <SiCoinmarketcap />,
  },
  {
    id: 5,
    title: 'Custom Digital Solution',
    content:
      'Tackling unique business challenges with innovative and scalable solutions designed specifically for your needs.',
    icon: <AiOutlineSolution />,
  },
];

export { menuItems, servicesData, socialMediaLinks, searchBar };
