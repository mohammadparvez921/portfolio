

const projects = [
      {
    title: "Imdb Clone",
    description: "Imdb clone made using React,React-router-dom,React-login skeleton,font awesome",
    coverUrl: "./IMDB_Logo.svg",
    demoLink: "https://imdb-clone-parvez921.netlify.app/",
    sourceLink: "https://github.com/mohammadparvez921/movie-app"
},
    {
    title: "Face Detection APP",
    description: "Face detection app made with React and face-api.js",
    coverUrl: "./face detection.webp",
    demoLink: "https://face-detection-app-parvez.netlify.app/",
    sourceLink: "https://github.com/mohammadparvez921/face-detection-app"
},
{
    title: "Linkedin Clone",
    description: "LinkedIn Clone built using React,AUTH0,Material UI,NodeJS,Express,Mongodb",
    coverUrl: "./Linkedin-Logo.png",
    demoLink: "",
    sourceLink: "https://github.com/mohammadparvez921/linkedin-clone"
},
{
    title: "Contacts App",
    description: "Contacts app made using css emotions library and React ",
    coverUrl: "./contacts app.png",
    demoLink: "https://contacts-app-parvez.netlify.app/",
    sourceLink: "https://github.com/mohammadparvez921/Contact-App"
},
{
    title: "Weather App",
    description: "Uses geolocaiton and open weather api. Created using JS, HTML, CSS",
    coverUrl: "./weather-app.webp",
    demoLink: "https://weatherapp-parvez.netlify.app/",
    sourceLink: "https://github.com/mohammadparvez921/weather-app"
},
{
    title: "HakkerRank Automation",
    description: "Used puppeter js ,nodejs to automate the website",
    coverUrl: "./Automation.jpg",
    demoLink: " https://www.linkedin.com/posts/mohammad-parvez-2374b41a6_automation-fullstackdevelopment-mernstack-activity-6936634678606999552-GToL?utm_source=linkedin_share&utm_medium=member_desktop_web",
    sourceLink: "https://github.com/mohammadparvez921/Automation"
},
{
    title: "Wcat Commands",
    description: "Used fs os libraries of nodejs to implement famous linux commands",
    coverUrl: "./linux-commands.webp",
    demoLink: "https://www.linkedin.com/posts/mohammad-parvez-2374b41a6_learning-development-project-activity-6914701060951486464-RLny?utm_source=share&utm_medium=member_desktop",
    sourceLink: "https://github.com/mohammadparvez921/wcat"
},
];


function loadProjects() {
    const projectsList = document.querySelector("#projects .projects-list");

    let innerHTML = "";
    for (const { title, description, coverUrl, demoLink, sourceLink } of projects) {
        innerHTML += `
        <section class="project shadow move-y">
            <section class="image-container">
              <img loading="lazy" src="${coverUrl}" alt="">
            </section>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="links">
              <li><a href="${demoLink}" target="_blank">Demo</a></li>
              <li><a href="${sourceLink}" target="_blank"><img width="30" height="30" src="github.svg" alt="octocat iamge"> Source Code</a></li>
            </ul>
          </section >
        `
    }
    projectsList.innerHTML = innerHTML;


    // </section >
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
})
