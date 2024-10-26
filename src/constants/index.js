import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Cinematographer",
      icon: web,
    },
    {
      title: "Filmaker",
      icon: mobile,
    },
    {
      title: "Designer",
      icon: backend,
    },
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Video Editor",
      company_name: "Your Design",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2021 - July 2022",
      points: [
        "Creating short form content for social media",
        "Leading team to create ads",
        "Sound editing",
        " Work with the DOP to integrate VFX",
      ],
    },
    {
      title: "Graphic designer",
      company_name: "Prancer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2023 - February 2024",
      points: [
        "Creating visuals for top FnB in India",
        "Creating emarketing content",
        "Branding for optimization",
        " Logo rebrands",
      ],
    },
    {
      title: "Cinematographer",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Direction and being creative head",
        "Specializing in FnB",
        "Creating unique concert aftermovies",
        "Music videos for artists",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "i found it very efficient to work with him, visuals were stunning",
      name: "Jordan Whitaker",
      designation: "CFO",
      company: "Vertex Dynamics",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      testimonial:
        "The output was outstanding and was delivered on time",
      name: "Tristan Moore",
      designation: "COO",
      company: "NovaTech Solutions",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
      testimonial:
        "After Royston began being involved in creating digital brand content, there was significant increase in engagement on our social media",
      name: "Amelia Rivers",
      designation: "CTO",
      company: "SilverPeak Innovations",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Schneider Electric",
      description:
        "Captured the energy and professionalism of Schneider Electric’s latest event, highlighting key moments and brand elements that emphasize their commitment to innovation",
      tags: [
        {
          name: "EventPhotography",
          color: "blue-text-gradient",
        },
        {
          name: "BrandInnovation",
          color: "green-text-gradient",
        },
        {
          name: "SchneiderElectric",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.behance.net/gallery/207611563/Schneider-Electric",
    },
    {
      name: "Isharya",
      description:
        "Documented Isharya’s jewelry launch event, showcasing the elegance and intricate details of their collections to enhance the brand’s luxurious appeal.",
      tags: [
        {
          name: "JewelryPhotography",
          color: "blue-text-gradient",
        },
        {
          name: "LuxuryLaunch",
          color: "green-text-gradient",
        },
        {
          name: "IsharyaJewels",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.behance.net/gallery/207213783/Isharya",
    },
    {
      name: "Xoox Brewmill",
      description:
        "Created visually rich food imagery for Xoox, focusing on the vibrancy and appeal of their culinary creations to reflect the brand’s unique dining experience",
      tags: [
        {
          name: "FoodPhotography",
          color: "blue-text-gradient",
        },
        {
          name: "CulinaryCreative",
          color: "green-text-gradient",
        },
        {
          name: "XooxExperience",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.behance.net/gallery/207279563/Xooxs-Brewmill",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };