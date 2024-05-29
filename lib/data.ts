import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import sogzy from "@/public/profile.jpg"
import kaks from "@/public/kaks.png"
import ecommecre from "@/public/ecommerce.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Lagos, Nigeria",
    description:
      "I graduated after 9 months of virtual studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Ibadan, Nigeria",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Ibadan, Nigeria",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "KAKS",
    description:
      "I worked as a full-stack developer for this construction company for 1 year. I built the company's showcase website",
    tags: ['Vanilla Javascript', 'Vanilla css'],
    imageUrl: kaks,
  },
  {
    title: "iPhone Journal App",
    description:
      "I cloned the iPhone Journal App with almost all features mirrored correctly",
    tags: ["React", "Javascript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "My personal blog",
    description:
      "This is my personal blog where I write my own thoughts",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Sogzy store",
    description:
      "An e-commerce app with cart functionality, stripe for payment method",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: ecommecre,
  },
  {
    title: "React Social Media Dashboard",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "React Quiz App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Realtime Chat App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
