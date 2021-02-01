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
            'Loot based web video game. Players are able to collect items/power-ups by defeating enemies or by purchasing them from the item shop. Users are ranked based on the amount of currency gained from selling items. ',
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
            'Geotunes is a web application designed to allow users to create and share custom google map routes with Spotify playlists attached to them.',
        features: [
            'Integrated GoogleMaps to enable users to make custom routes on a shared map',
            'Applied Spotify React Components to enable users to attach public playlists to custom routes',
            'Utilized JSON Web Tokens and Bcrypt Gem for user authorization from front to backend',
        ],
        icons: [
            { title: 'JavaScript', icon: jsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'GoogleMapsAPI', icon: gmapLogo },
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
            'ARt App is a web app that enables users to share images and view them in 3D and AR.  Users can also interact through likes, comments, and followers.',
        features: [
            'Utilized JSON Web Tokens and Bcrypt Gem for user authorization from front to backend',
            'Backend Models enabled users to interact through, photo uploads, likes, and following/followers',
            'Applied Three.Js Library to make a 3D viewer that users could apply to uploaded images',
            'Incorporated ARJS to make a view layer where users can view uploaded images with a hiro marker/camera',
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
        videoUrl: '',
        imageUrl: personalSitePrev,
        id: 4,
        githubPath: 'https://github.com/kainan54/personal-website-wip',
        descrip:
            'ARt App is a web app that enables users to share images and view them in 3D and AR.  Users can also interact through likes, comments, and followers.',
        features: [
            'Utilized JSON Web Tokens and Bcrypt Gem for user authorization from front to backend',
            'Backend Models enabled users to interact through, photo uploads, likes, and following/followers',
            'Applied Three.Js Library to make a 3D viewer that users could apply to uploaded images',
        ],
        icons: [
            { title: 'JavaScript', icon: jsLogo },
            { title: 'React', icon: reactLogo },
            { title: 'Redux', icon: reduxLogo },
            { title: 'Scss', icon: scssLogo },
        ],
    },
].reverse();
export default projects;
