import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AllParkings",
    description:
      "Комплексное приложение для поиска и бронирования парковочных мест в городской среде.",
    stack: ["React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/pavelkulak/AllParkings",
  },
  {
    id: 2,
    title: "To-do List",
    description:
      "Интерактивное приложение дя составления списка задач.",
    stack: ["JavaScript", "React", "CSS3", "Weather API"],
    link: "https://github.com/pavelkulak/to-do",
    web: "https://todudo.netlify.app/"
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "Минималистичное, но мощное приложение для управления ежедневными задачами и проектами.",
    stack: ["React", "TypeScript", "LocalStorage"],
    link: "https://github.com/pavelkulak/KanbanDesk",
    web: "https://kanban-desk-pavel-kulakov.vercel.app/"
  },
];
