import React from "react";
import { useState } from "react";
import img2 from "../../assets/images/p2.png";
import img3 from "../../assets/images/p3.png";
type projectData = {
  image: any;
  title: string;
  text: string;
  previewlink: string;
  githublink: string;
  techstack: string;
};
const ProjectData = () => {
  let projectData: Array<projectData> = [
    {
      image: img2,
      title: "Previous Exam Papers Hubs",
      text: "Designed for universities, this app offers students unlimited access to past exam questions. Representatives from different departments and levels upload questions with individual login details, addressing a drawback of the old system.",
      previewlink: "https://lurm.vercel.app/",
      githublink: "https://github.com/himarnoel/Lurm",
      techstack: "React, Tailwind and CSS",
    },
    {
      image: img3,
      title: "Gigamoni",
      text: "A fintech web application developed to facilitate international money transfers from Nigeria to individuals in foreign countries.",
      previewlink: "https://gigamoni.vercel.app/",
      githublink: "https://github.com/himarnoel/gigamoni",
      techstack: "React, Tailwind and CSS",
    },
    {
      image: img3,
      title: "Gigamoni Admin",
      text: "This serves as Gigamoni's administrative portal, dedicated to managing and processing user-initiated transactions.",
      previewlink: "https://gigamoniadmin.vercel.app/",
      githublink: "https://github.com/himarnoel/gigamoniadmin",
      techstack: "React, Tailwind and CSS",
    },
    {
      image: img3,
      title: "Gigamoni Admin",
      text: "This serves as Gigamoni's administrative portal, dedicated to managing and processing user-initiated transactions.",
      previewlink: "https://gigamoniadmin.vercel.app/",
      githublink: "https://github.com/himarnoel/gigamoniadmin",
      techstack: "React, Tailwind and CSS",
    },
  ];

  return projectData;
};

export default ProjectData;
