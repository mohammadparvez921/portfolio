const projects = [{
    title: "Face Detection APP",
    description: "Face detection app made with React and face-api.js",
    coverUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F7274513%2Fscreenshots%2F18167705%2Fface_detection_app.png&tbnid=ppPU11ILAuAjrM&vet=12ahUKEwiMkKC6-tT-AhU61XMBHQPOBE0QMygBegUIARDRAQ..i&imgrefurl=https%3A%2F%2Fdribbble.com%2Fshots%2F18167705-Face-Detection-App&docid=xOLEFVnExXWdRM&w=1585&h=1189&q=face%20detection%20app&ved=2ahUKEwiMkKC6-tT-AhU61XMBHQPOBE0QMygBegUIARDRAQ",
    demoLink: "https://face-detection-app-parvez.netlify.app/",
    sourceLink: "https://github.com/mohammadparvez921/face-detection-app"
},
{
    title: "Ecommerce App",
    description: "Ecommece app built using React, Material UI, Redux Toolkit",
    coverUrl: "https://screenshot-proxy.netlify.app/f_avif,w_400/https://d33wubrfki0l68.cloudfront.net/6384cf1727e2837c8bf48bd3/screenshot_2022-11-28-15-09-17-0000.png",
    demoLink: "",
    sourceLink: ""
},
{
    title: "Spotify Clone",
    description: "Spotify Clone created using Vanilla JS, Tailwind CSS, Vite",
    coverUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
    demoLink: "",
    sourceLink: ""
},
{
    title: "Weather App",
    description: "Uses geolocaiton and open weather api. Created using JS, HTML, CSS",
    coverUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
    demoLink: "",
    sourceLink: ""
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
