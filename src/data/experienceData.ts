import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Apex Nova Tech",
    position: "Frontend-разработчик (стажер)",
    period: "Ноя 2023 - Апр 2024",
    description:
      "Разработка отзывчивых и доступных веб-интерфейсов. Участие в код-ревью и командных встречах.",
    stack: ["React", "TypeScript", "Zustand", "Radix UI", "Tanstack Query"],
  },
  {
    id: 2,
    company: "PROFSOFT",
    position: "Frontend-разработчик",
    period: "Май 2024 - Дек 2024",
    description: "Разработка SPA для учета рабочих созвонов",
    stack: ["React", "Zustand", "TypeScript", "Ant Design", "Tanstack Query"],
  },
  {
    id: 3,
    company: "Exchange-GO",
    position: "Frontend-разработчик",
    period: "Фев 2025 - настсоящее время",
    description:
      "Разработка Backoffice для менеджеров по взаимодействию с клиентами",
    stack: ["React", "TypeScript", "Chakra UI", "Tanstack Query", "i18n"],
  },
];
