const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let bigImage = document.getElementById("cta-img");
bigImage.setAttribute('src', siteContent['cta']['img-src'])

let navigation = document.getElementsByTagName('a');
navigation[0].textContent = "Services";
navigation[1].textContent = "Product";
navigation[2].textContent = "Vision";
navigation[3].textContent = "Features";
navigation[4].textContent = "About";
navigation[5].textContent = "Contact";

const headerText = document.querySelector('h1');
headerText.textContent = 'DOM IS AWESOME';

const button = document.querySelector('button');
button.textContent = "Get Started";


const headersArr = ['features', 'about', 'services', 'product', 'vision'];
const contentHeaders = document.querySelectorAll('.text-content h4');
contentHeaders.forEach((e, index) => {
  e.textContent = siteContent['main-content'][`${headersArr[index]}-h4`];
});

const mainText = document.querySelectorAll('.text-content p');

mainText[0].textContent = ('p', siteContent['main-content']['features-content']);

mainText[1].textContent = ('p', siteContent['main-content']['about-content']);

mainText[2].textContent = ('p', siteContent['main-content']['services-content']);

mainText[3].textContent = ('p', siteContent['main-content']['product-content']);

mainText[4].textContent = ('p', siteContent['main-content']['vision-content']);



let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },
// };


const contactPage = document.querySelector('.contact h4');
contactPage.textContent = siteContent['contact']['contact-h4'];

const info = document.querySelectorAll('.contact p');
info[0].textContent = siteContent['contact']['address'];
info[1].textContent = siteContent['contact']['phone'];
info[2].textContent = siteContent['contact']['email'];

const footerPage = document.querySelector('footer p');
footerPage.textContent = siteContent['footer']['copyright'];
