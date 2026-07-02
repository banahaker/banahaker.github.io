function WorkExpBlockItem(props: {
  title: string;
  duration: string;
  contents: string[];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-1">{props.title}</h2>
      <div className="text-sm text-gray-500 mb-2">{props.duration}</div>
      <ul className="list-disc pl-5 space-y-1">
        {props.contents.map((c, i) => (
          <li key={i} className="text-base">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WorkExpBlock() {
  return (
    <div className="w-full flex flex-col gap-8 justify-center p-8 bg-gray-100 rounded-2xl mt-6 font-light">
      <WorkExpBlockItem
        title="Co-Founder, Lazco Studio"
        duration="March 2023 ~ PRESENT"
        contents={[
          "Start a VPS renting and digital service company registered in UK.",
          "Develop new products and market them to expand the market.",
          "Web Application Development with Nextjs and React.",
        ]}
      ></WorkExpBlockItem>
      <WorkExpBlockItem
        title="Software Engineer Intern, Shopback"
        duration="May 2026 ~ July 2026"
        contents={[
          "Built Playwright-based E2E automation covering critical web user flows, enabling reliable regression testing for new feature releases.",
          "Expanded Appium automation across Android and iOS applications, improving cross-platform testing coverage.",
          "Designed an agentic workflow that automatically updated E2E test scripts after UI changes, reducing maintenance effort by over 80%.",
          "Developed GitLab CI dashboards to visualize test coverage, execution status, and quality metrics for engineering teams.",
        ]}
      ></WorkExpBlockItem>
      <WorkExpBlockItem
        title="Software Engineer Intern, National Center for High-Performance Computing"
        duration="October 2025 ~ Recent"
        contents={[
          "Built full-stack web applications using React, FastAPI, and PostgreSQL to support large-scale research data workflows.",
          "Refactored backend services into a modular architecture with structured error handling, simplifying debugging and future feature development.",
          "Developed and maintained over 50 unit tests, reducing regression risks and improving backend reliability.",
          "Built data ingestion pipelines that imported CSV and Excel datasets into PostgreSQL, streamlining large-scale data processing.",
          "Improved backend scalability by contributing to API architecture and database schema optimization.",
          "Implemented OpenClaw File Browsing Helper, introducing secure file access and editing controls for enterprise environments.",
        ]}
      ></WorkExpBlockItem>
      <WorkExpBlockItem
        title="Software Engineer, Picktrip startup team"
        duration="April 2024 ~ October 2024"
        contents={[
          "Built a full-stack internal platform using Node.js and React that automated operational workflows, increasing data analysis efficiency by 10×.",
          "Developed an embedding-based recommendation engine for personalized attraction discovery across large-scale tourism datasets.",
          "Analyzed user behavior using Python (Pandas, Matplotlib) to improve recommendation quality and user engagement.",
          "Led deployment infrastructure with Docker, Nginx, and CI automation, ensuring reliable production service delivery.",
        ]}
      ></WorkExpBlockItem>
    </div>
  );
}
