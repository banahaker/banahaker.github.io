import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function WorkExpBlock() {
  return (
    <Section label="Work">
      <TimelineItem
        title="Co-Founder, Lazco"
        meta="March 2023 ~ PRESENT"
        description="Founding product leader at an early-stage SaaS startup, owning the full product lifecycle across strategy, design, engineering coordination, and customer relationships — spanning B2B SaaS, cloud infrastructure, and AI-native tooling."
        contents={[
          "Led product design and client management for a campus-exclusive forum system deployed at Mingdao High School, growing to 5,000+ total users and ~1,000 monthly active users.",
          "Designed and launched a campus recruitment platform adopted by an academic institution, maintaining active deployment for 1+ year — demonstrating strong product-market fit in the education sector.",
          "Defined product roadmap and led team execution for a cloud VPS hosting platform; achieved 200%+ MRR growth within the first two months post-launch.",
          "Driving product vision, UX design, and investor relations for an agentic deployment platform.",
          "Operated as a one-person product function across multiple concurrent products — covering user research, wireframing, stakeholder management, team coordination, and go-to-market execution in a resource-constrained environment.",
        ]}
      />
      <TimelineItem
        title="Software Engineer Intern, Shopback"
        meta="May 2026 ~ July 2026"
        contents={[
          "Built Playwright-based E2E automation covering critical web user flows, enabling reliable regression testing for new feature releases.",
          "Expanded Appium automation across Android and iOS applications, improving cross-platform testing coverage.",
          "Designed an agentic workflow that automatically updated E2E test scripts after UI changes, reducing maintenance effort by over 80%.",
          "Developed GitLab CI dashboards to visualize test coverage, execution status, and quality metrics for engineering teams.",
        ]}
      />
      <TimelineItem
        title="Software Engineer Intern, National Center for High-Performance Computing"
        meta="October 2025 ~ Recent"
        contents={[
          "Built full-stack web applications using React, FastAPI, and PostgreSQL to support large-scale research data workflows.",
          "Refactored backend services into a modular architecture with structured error handling, simplifying debugging and future feature development.",
          "Developed and maintained over 50 unit tests, reducing regression risks and improving backend reliability.",
          "Built data ingestion pipelines that imported CSV and Excel datasets into PostgreSQL, streamlining large-scale data processing.",
          "Improved backend scalability by contributing to API architecture and database schema optimization.",
          "Implemented OpenClaw File Browsing Helper, introducing secure file access and editing controls for enterprise environments.",
        ]}
      />
      <TimelineItem
        title="Software Engineer, Picktrip startup team"
        meta="April 2024 ~ October 2024"
        contents={[
          "Built a full-stack internal platform using Node.js and React that automated operational workflows, increasing data analysis efficiency by 10×.",
          "Developed an embedding-based recommendation engine for personalized attraction discovery across large-scale tourism datasets.",
          "Analyzed user behavior using Python (Pandas, Matplotlib) to improve recommendation quality and user engagement.",
          "Led deployment infrastructure with Docker, Nginx, and CI automation, ensuring reliable production service delivery.",
        ]}
      />
      <TimelineItem
        title="Co-Founder & Manager, Lipoic"
        meta="April 2022 ~ April 2024"
        contents={[
          "Constructing and planing full-stack application.",
          "Led a 30-member organization comprising multiple teams: development, marketing, and human resources.",
          "Develop a web application for online learning with Express.js as backend and Vue as frontend.",
        ]}
      />
    </Section>
  );
}
