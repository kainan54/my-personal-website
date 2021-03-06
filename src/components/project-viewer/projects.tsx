import artAppvid from '../../assets/mod5-vid.mp4';
import geoTunesVid from '../../assets/geotune-vid.mp4';
import flappyDemonVid from '../../assets/flappy-demon-vid.mp4';
import jsLogo from '../../assets/js-logo.png';
import reduxLogo from '../../assets/redux-logo.png';
import railsLogo from '../../assets/rails-logo.png';
import reactLogo from '../../assets/react-logo.png';
import rubyLogo from '../../assets/ruby-logo.png';
import gmapLogo from '../../assets/gmap-icon.png';
import geoTunePrev from '../../assets/geotune-prev.png';
import mod5Prev from '../../assets/mod5-prev.png';
import flappyDemonPrev from '../../assets/flappy-demon-prev.png';
import phaserLogo from '../../assets/phaser-logo.png';
import scssLogo from '../../assets/scss-logo.png';
import personalSitePrev from '../../assets/personal-site-prev.png';
import personalSiteVid from '../../assets/personal-website-video.mp4';
import tsLogo from '../../assets/ts-logo.png';
import auth0Logo from '../../assets/auth0-logo.png';
import spotLogo from '../../assets/spot-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import mongoLogo from '../../assets/mongo-logo.png';
import scavPreview from '../../assets/scav-prev.png';
import scavVid from '../../assets/scav-vid2.mp4';
import scavVid2 from '../../assets/scav2-vid.mov';
import scavPreview2 from '../../assets/scav-2-prev.png';
interface Project {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
    icons: Array<{ title: string; icon: string }>;
    descrip: string;
    features: Array<string>;
    githubPath: string;
}
const projects: Array<Project> = [
    {
        title: 'Flappy Demon',
        videoUrl: flappyDemonVid,
        imageUrl: flappyDemonPrev,
        id: 1,
        githubPath: 'https://github.com/kainan54/Mod3-VideoGame-Project',
        descrip:
            'Flappy Demon is a loot-based web game where players collect items/power-ups by defeating enemies or by purchasing them from the item shop. Users are ranked based on the amount of currency gained from selling items.',
        features: [
            'Used Phaser3/Vanilla-JS for frontend and Rails API/Ruby for backend',
            'Meshed dom elements to respond to Phaser3 game logic',
            'Utilized Rails API to persist player items and rankings',
        ],
        icons: [
            { title: 'JavaScript', icon: jsLogo },
            { title: 'Phaser3', icon: phaserLogo },
            { title: 'Ruby', icon: rubyLogo },
            { title: 'Rails', icon: railsLogo },
        ],
    },
    {
        title: 'GeoTunes',
        videoUrl: geoTunesVid,
        imageUrl: geoTunePrev,
        id: 2,
        githubPath: 'https://github.com/kainan54/Mod4-project-geoTunes',
        descrip:
            'Geotunes is a web application designed to allow users to create and share custom Google Maps routes that are linked to Spotify playlists',
        features: [
            'Integrated Google Maps to enable users to make custom routes on a shared map',
            'Applied Spotify React Components to enable users to attach public playlists to custom routes',
            'Utilized JSON Web Tokens and Bcrypt Gem for user authorization from frontend to backend',
        ],
        icons: [
            { title: 'JavaScript', icon: jsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'GoogleAPI', icon: gmapLogo },
            { title: 'Ruby', icon: rubyLogo },
            { title: 'Rails', icon: railsLogo },
        ],
    },
    {
        title: 'ARt App',
        videoUrl: artAppvid,
        imageUrl: mod5Prev,
        id: 3,
        githubPath: 'https://github.com/kainan54/Mod5-Project-ARt-App',
        descrip:
            'ARt App is a web app that enables users to share images and view them in 3D and AR. Users can also interact through likes, comments, and followers.',
        features: [
            'Utilized JSON Web Tokens and Bcrypt Gem for user authorization from frontend to backend',
            'Enabled users to interact through, photo uploads, likes, and following each other using rails models',
            'Applied Three.js Library to make a 3D viewer that users could apply to uploaded images',
            'Incorporated AR.js to make a view layer where users can view their images with a hiro marker and webcam',
        ],
        icons: [
            { title: 'JavaScript', icon: jsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'Redux', icon: reduxLogo },
            { title: 'Ruby', icon: rubyLogo },
            { title: 'Rails', icon: railsLogo },
        ],
    },
    {
        title: 'This Website',
        videoUrl: personalSiteVid,
        imageUrl: personalSitePrev,
        id: 4,
        githubPath: 'https://github.com/kainan54/Mod5-Project-ARt-App',
        descrip:
            'My online resume/portfolio and a fun study project to help improve my CSS and TypeScript skills. I got to play around with using Scss, animations, typing with react-dom + redux, and building reusable components.',
        features: [
            'Used Scss + React to create responsive and animated web elements',
            'Applied font scaling and media queries to make website mobile friendly',
            'Created reusable components to use throughout the website',
        ],
        icons: [
            { title: 'TypeScript', icon: tsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'Redux', icon: reduxLogo },
            { title: 'Scss', icon: scssLogo },
        ],
    },
    {
        title: 'Scavenger(wip)',
        videoUrl: scavVid,
        imageUrl: scavPreview,
        id: 5,
        githubPath: 'https://github.com/kainan54/scavenger_frontend',
        descrip: `Mobile-friendly/preferred web application enables users to share/save/like collections of nodes(routes). Nodes can have multiple types of data stored(images, podcasts, songs, playlists, titles, and text). The routes can be created/shared/viewed using google maps API with the web geolocation API.`,
        features: [
            'Leveraged Auth0 to allow users to login via Spotify',
            'Applied many aspects of the google maps API, enabling users to edit/view routes and nodes on a google map',
            'Used React to let users attach image/text data to geolocation nodes/routes',
            'Utilized Spotify API to query and attach sound data to geolocation based nodes/routes',
            'Styled the web app with SCSS and responsive design principles to adapt to mobile',
            'Designed many components using Redux to keep them as pure and declarative as possible',
            'Written with JSDOC and Typescript to help document code(experimental docs: https://kainan54.github.io/scavenger_frontend/)',
        ],
        icons: [
            { title: 'TypeScript', icon: tsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'Redux', icon: reduxLogo },
            { title: 'GoogleAPI', icon: gmapLogo },
            { title: 'SpotifyAPI', icon: spotLogo },
            { title: 'Auth0', icon: auth0Logo },
            { title: 'Scss', icon: scssLogo },
        ],
        demoLink: 'https://scavenger-frontend.vercel.app/',
    },
    {
        title: 'Scavenger-Phase-2(wip)',
        videoUrl: scavVid2,
        imageUrl: scavPreview2,
        id: 6,
        githubPath: 'https://github.com/kainan54/scavenger_frontend',
        descrip: `Mobile-friendly/preferred web application enables users to share/save/like collections of nodes(routes). Nodes can have multiple types of data stored(images, podcasts, songs, playlists, titles, and text). The routes can be created/shared/viewed using google maps API with the web geolocation API.`,
        features: [
            'Leveraged Auth0 to authorize users(in the frontend) by logging in with Spotify',
            'Utilized Spotify API + Google Maps API + React to query and attach sound data, images, and text to geolocation based nodes/routes',
            'Used Node.JS + Express + MongoDB + Auth0 to manage authorization, user models, route models, and geospatial queries for the backend',
            'Styled the web app with SCSS and responsive design principles to adapt to mobile',
            'Designed many components using Redux to keep them as pure and declarative as possible',
            'Written with JSDOC and Typescript to help document code(experimental docs: https://kainan54.github.io/scavenger_frontend/)',
        ],
        icons: [
            { title: 'TypeScript', icon: tsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'Redux', icon: reduxLogo },
            { title: 'NodeJs/Express', icon: nodeLogo },
            { title: 'MongoDB', icon: mongoLogo },
            { title: 'GoogleAPI', icon: gmapLogo },
            { title: 'SpotifyAPI', icon: spotLogo },
            { title: 'Auth0', icon: auth0Logo },
            { title: 'Scss', icon: scssLogo },
        ],
        demoLink: 'https://scavenger-frontend.vercel.app/',
    },
].reverse();
export default projects;
