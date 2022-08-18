import designcard from '../assets/designcard.png';
import heroplatform from '../assets/heroplatform.png';
import logo from '../assets/logo.png';
import heroBlueEllipse from '../assets/Ellipse 1.png';
import heroRedEllipse from '../assets/Ellipse 4.png';
import ProjBlueEllipse from '../assets/Ellipse 3.png';
import designEllipise from '../assets/Ellipse 5.png';
import designplarform from '../assets/designplatform.png';
import Group1 from '../assets/Group 1.png';
import Group2 from '../assets/Group 2.png';
import Group3 from '../assets/Group 3.png';
import Group4 from '../assets/Group 4.png';
import Group5 from '../assets/Group 5.png';
import Group6 from '../assets/Group 6.png';
import Group7 from '../assets/Group 7.png';
import Group8 from '../assets/Group 8.png';
import Group9 from '../assets/Group 9.png';
import Group10 from '../assets/Group 10.png';
import yesIknowU from '../assets/yesi know you.png';
import freedomwall from '../assets/freedomwall desktop.PNG';
import movieapp from '../assets/movie app desktop.PNG';
import ecommerce from '../assets/e commerce desktop.PNG';
import covid from '../assets/covid desktop.PNG';
import spendmoney from '../assets/spend money desktop.PNG';
import pokedex from '../assets/pokedex desktop.PNG';
import musictap from '../assets/music tap desktop.PNG';
import foodapp from '../assets/food app desktop.PNG';
import areubored from '../assets/are u bored desktop.PNG';
import crushme from '../assets/crush me desktop.PNG';
import detailsGenerator from '../assets/details generator desktop.PNG';

const NavLinks = [
	{
		id: 'home-link',
		name: 'Home',
	},
	{
		id: 'about-link',
		name: 'About',
	},
	{
		id: 'projects-link',
		name: 'Projects',
	},
	{
		id: 'contact-link',
		name: 'Contact',
	},
];

const TechImages = [
	{
		id: 'html-id',
		image: 'https://img.icons8.com/color/344/html-5--v1.png',
	},
	{
		id: 'css-id',
		image: 'https://img.icons8.com/color/344/css3.png',
	},
	{
		id: 'js-id',
		image: 'https://img.icons8.com/color/344/javascript--v1.png',
	},
	{
		id: 'sass-id',
		image: 'https://img.icons8.com/color/344/sass.png',
	},
	{
		id: 'bootstrap-id',
		image: 'https://img.icons8.com/color/344/bootstrap.png',
	},
	{
		id: 'figma-id',
		image: 'https://img.icons8.com/color/344/figma--v1.png',
	},
	{
		id: 'react-id',
		image: 'https://img.icons8.com/plasticine/344/react.png',
	},
	{
		id: 'firebase-id',
		image: 'https://img.icons8.com/color/344/firebase.png',
	},
];

const ProjectsData = [
	{
		projectID: 1,
		projectName: 'Freedomwall',
		image: Group7,
		image2: freedomwall,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP', 'FIREBASE'],
		link: 'https://freedomwallapp.netlify.app/',
	},
	{
		projectID: 2,
		projectName: 'Movie App',
		image: Group6,
		image2: movieapp,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP'],
		link: 'https://mymovieappreact.netlify.app/',
	},
	{
		projectID: 3,
		projectName: 'E-Commerce website with react',
		image: Group10,
		image2: ecommerce,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP'],
		link: 'https://lasnochesmarket.netlify.app/',
	},
	{
		projectID: 4,
		projectName: 'COVID-19 Tracker',
		image: Group2,
		image2: covid,
		tech: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
		link: 'https://javaplumdev.github.io/my-covid19-tracker/',
	},
	{
		projectID: 5,
		projectName: 'Spend billionaires money',
		image: Group3,
		image2: spendmoney,
		tech: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
		link: 'https://javaplumdev.github.io/spend-my-fortune/',
	},
	{
		projectID: 6,
		projectName: 'Pokemon Pokedex',
		image: Group4,
		image2: pokedex,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP'],
		link: 'https://pokemonpokedexapp.netlify.app/',
	},
	{
		projectID: 7,
		projectName: 'Music tap tap tap',
		image: Group5,
		image2: musictap,
		tech: ['HTML', 'CSS', 'JS'],
		link: 'https://beatntapthemeat.netlify.app/',
	},
	{
		projectID: 8,
		projectName: 'Food application',
		image: Group8,
		image2: foodapp,
		tech: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
		link: 'https://javaplumdev.github.io/food-app/',
	},
	{
		projectID: 9,
		projectName: 'Are you bored?',
		image: Group9,
		image2: areubored,
		tech: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
		link: 'https://javaplumdev.github.io/are-you-bored/',
	},

	{
		projectID: 11,
		projectName: 'Does your crush likes you too?',
		image: Group1,
		image2: crushme,
		tech: ['HTML', 'CSS', 'JS'],
		link: 'https://javaplumdev.github.io/crushmecrush/',
	},
	{
		projectID: 12,
		projectName: 'Yes I know u',
		image: yesIknowU,
		image2: detailsGenerator,
		tech: ['HTML', 'CSS', 'JS'],
		link: 'https://javaplumdev.github.io/random-personal-details-generator/',
	},
];

const RecentProjects = [
	{
		projectID: 2,
		projectName: 'Movie app',
		image: Group6,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP'],
	},
	{
		projectID: 1,
		projectName: 'Freedomwall',
		image: Group7,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP', 'FIREBASE'],
	},
	{
		projectID: 3,
		projectName: 'E-Commerce',
		image: Group10,
		tech: ['HTML', 'CSS', 'JS', 'REACT JS', 'BOOTSTRAP'],
	},
];
export {
	RecentProjects,
	ProjectsData,
	designcard,
	logo,
	NavLinks,
	heroplatform,
	heroBlueEllipse,
	heroRedEllipse,
	TechImages,
	ProjBlueEllipse,
	designplarform,
	designEllipise,
};
