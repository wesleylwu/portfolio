import ACM from "@/public/acm.webp";
import citrusHack from "@/public/citrusHack.webp";

const experiences = [
  {
    logo: ACM,
    alt: "ACM Logo",
    name: "Association of Computing Machinery",
    roles: [
      {
        title: "VP of Internal Affairs",
        date: "April 2025 - Present",
        details: [
          "Managed internal operations for ACM, including event planning, documentation, and board coordination",
          "Collaborated with projects leads and executive officers to streamline communication and logistics",
          "Oversaw scheduling and approval of all events",
        ],
      },
      {
        title: "Front-End Project Lead",
        date: "March 2025 - Present",
        details: [
          "Led teams of 10+ developers, teaching Tailwind, React, and Typescript using SCRUM techniques to develop websites",
          "Performed code reviews, stand up meetings, and repository management by creating issues and handling pull requests",
          "Focused on responsive design to ensure compatibility for all device types",
        ],
      },
    ],
  },
  {
    logo: citrusHack,
    alt: "Citrus Hack Logo",
    name: "Citrus Hack",
    roles: [
      {
        title: "Operations Committee Member",
        date: "March 2025 - April 2025",

        details: [
          "Supported planning of Citrus Hack, UCR’s 24-hour flagship hackathon with 300+ participants",
          "Wrote the official Devpost project submission guide for Citrus Hack 2025, detailing clear and accurate communication of rules, judging criteria, and event logistics",
        ],
      },
    ],
  },
];

export default experiences;
