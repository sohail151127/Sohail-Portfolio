import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sohail",
    lastName: "Sohail",
    initials: "M.S", // the example uses first and last, but feel free to use three or more if you like.
    position: "Shopify Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Pakistan'
        },
        {
            emoji: "💻",
            text: "Open to Work"
        },
        // {
        //     emoji: "📧",
        //     text: "sohail151127@gmail.com"
        // }
    ],
    socials: [
        // {
        //     link: "https://www.facebook.com/sohail151127/",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://www.instagram.com/sohail151127/",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/sohail151127",
            icon: "fa fa-github",
            label: 'github'
        },
        // {
        //     link: "https://www.linkedin.com/in/muhammad-sohail-physicist/",
        //     icon: "fa fa-linkedin",
        //     label: 'linkedin'
        // },
        // {
        //     link: "https://twitter.com/Muhamma74315271",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "As a Top-Rated Shopify Developer, I have years of experience and am among the top 10% of Shopify experts on Upwork. Known for my exceptional communication and 100% job success rate, I deliver high-quality eCommerce solutions with professionalism and expertise. You can hire me!",
    skills:
        {
            proficientWith: ['Shopify', 'Shopify Plus','Html','CSS', 'liquid', 'javascript (ES6)','bootstrap','TypeScript', 'React JS (context-api, axios, hooks, localStorage, events, react-router, protected-routes, react-redux, redux-toolKit, Thunks)' ,"react-bootStrap",'material-ui','firebase-authentication','lodash', 'git', 'github', 'figma'],
            exposedTo: ['python','nodejs','figma']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Sleeping',
            emoji: '🎭'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Travelling',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "1. notesApp (localStorage)",
            live: "https://localstorage-notes-app-sohail151127.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/sohail151127/notes-app", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "2. notesApp (API)",
            live: "https://api-notes-app.netlify.app/",
            source: "https://github.com/sohail151127/api-notes-app",
            image: mock2
        },
        {
            title: "3. addToCart (Redux-ToolKit)",
            live: "https://redux-add-to-cart-app.netlify.app/",
            source: "https://github.com/sohail151127/redux-addToCart",
            image: mock3
        },
        {
            title: "4. adminLte (API)",
            live: "https://admin-lte-food-api.netlify.app/",
            source: "https://github.com/sohail151127/adminLte-foodApi",
            image: mock4
        },
        {
            title: "5. movieApp (Firebase-Auth)",
            live: "https://movieapp123.firebaseapp.com/",
            source: "https://github.com/sohail151127/movie-app",
            image: mock5
        }
    ]
}