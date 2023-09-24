import img1 from "../../assets/images/bg1.png";
import img2 from "../../assets/images/p2.png";
import img3 from "../../assets/images/p3.png";
import img4 from "../../assets/images/p4.png";
import img5 from "../../assets/images/p5.png";
import img6 from "../../assets/images/p6.png";
type projectData = {
  image: string;
  title: string;
  text: string;
  previewlink: string;
  githublink: string;
  techstack: string;
};
const ProjectData = () => {
  let projectData: Array<projectData> = [
    {
      image: img1,
      title: "Previous Exam Papers Hubs",
      text: "Designed for universities, this app offers students unlimited access to past exam questions. Representatives from different departments and levels upload questions with individual login details, addressing a drawback of the old system.",
      previewlink: "https://lurm.vercel.app/",
      githublink: "https://github.com/himarnoel/Lurm",
      techstack: "React, Tailwind and CSS",
    },
    {
      image: img2,
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
      image: img4,
      title: "Interno Landing Page",
      text: "A webpage designed for an interior decoration company, showcasing its range of products and services aimed at boosting sales.",
      previewlink: "https://interior-dec.vercel.app/",
      githublink: "https://github.com/himarnoel/interior_dec",
      techstack: "ReactJs, Tailwind CSS",
    },
    {
      image: img5,
      title: "Colab Apes WaitList",
      text: "A webpage designed for an interior decoration company, showcasing its range of products and services aimed at boosting sales.",
      previewlink: "https://interior-dec.vercel.app/",
      githublink: "https://github.com/himarnoel/interior_dec",
      techstack: "ReactJs, Tailwind and CSS",
    },
    {
      image: img6,
      title: "Bank Application",
      text: "A web-based banking application that possesses the functionality to execute transfers, withdrawals, deposit funds, and display transaction history.",
      previewlink: "https://imabank.netlify.app/",
      githublink: "https://github.com/himarnoel/Bank-App",
      techstack: "React, Bootstrap, Material Ui and CSS",
    },
  ];

  return projectData;
};

export default ProjectData;
