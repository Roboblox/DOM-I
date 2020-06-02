const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    // "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav
const navItems = {
  "nav-item-1": "Services",
  "nav-item-2": "Product",
  "nav-item-3": "Vision",
  "nav-item-4": "Features",
  "nav-item-5": "About",
  "nav-item-6": "Contact",
  "img-src": "img/logo.png",
};
const navArray = Object.values(navItems);
const allNavItems = document.querySelectorAll("a ,.logo-img");

for (let i = 0; i < allNavItems.length; i++) {
  allNavItems[i].textContent = navArray[i];
}
const ctaItems = {
  h1: "DOM Is Awesome",
  button: "Get Started",
  "img-src": "img/header-img.png",
};
const ctaArray = Object.values(ctaItems);
const allCtaItems = document.querySelectorAll("h1, button");

for (let i = 0; i < allCtaItems.length; i++) {
  allCtaItems[i].textContent = ctaArray[i];
}
const ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src", "img/header-img.png");

const mainContent = {
  "features-h4": "Features",
  "features-content":
    "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "about-h4": "About",
  "about-content":
    "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  // "middle-img-src": "img/mid-page-accent.jpg",
  "services-h4": "Services",
  "services-content":
    "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "product-h4": "Product",
  "product-content":
    "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "vision-h4": "Vision",
  "vision-content":
    "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
};
const mainContentArray = Object.values(mainContent);
const mainContentItems = document.querySelectorAll(
  "section div div h4, section div div p"
);

for (let i = 0; i < mainContentItems.length; i++) {
  mainContentItems[i].textContent = mainContentArray[i];
}
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "img/mid-page-accent.jpg");

const contactInfo = {
  "contact-h4": "Contact",
  address: "123 Way 456 Street Somewhere, USA",
  phone: "1 (888) 888-8888",
  email: "sales@greatidea.io",
};
const contactArray = Object.values(contactInfo);
const contactItems = document.querySelectorAll(".contact h4, .contact p");

for (let i = 0; i < contactItems.length; i++) {
  contactItems[i].textContent = contactArray[i];
}
const footerContent = document.querySelector("footer p");
footerContent.textContent = "Copyright Great Idea! 2018";
const navText = document.querySelectorAll("a");
navText.forEach((heading) => {
  heading.style.color = "green";
});
const newLinkProps = {
  href: "#",
  textContent: "Site Map",
  className: "menu-item",
};

let a = document.createElement("a");
let b = document.createElement("a");
a.setAttribute("href", "http://google.com");
b.setAttribute("href", "http://google.com");
a.textContent = "hello";
b.textContent = "hello";
const theNav = document.querySelector("nav");
theNav.append(b);
theNav.prepend(a);
