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
          "Develop new products and market them to expand the market.",
          "Web Application Development with Nextjs and React.",
        ]}
      ></WorkExpBlockItem>
      <WorkExpBlockItem
        title="Software Engineer, Picktrip startup team"
        duration="April 2024 ~ October 2024"
        contents={[
          "Developed a Node.js/React full-stack data collection platform, achieving automation of data processing workflows and increasing team data analysis efficiency by 10 times. ",
          "Utilized vectorization algorithms combined with the company's large-scale attraction dataset to build a personalized attraction recommendation system, enhancing user experience and platform engagement.",
          "Led the establishment and maintenance of service infrastructure, including Nginx reverse proxy configuration, Docker container deployment, and Shell Script automation.",
        ]}
      ></WorkExpBlockItem>
      <WorkExpBlockItem
        title="Co-Founder & Manager, Lipoic"
        duration="April 2022 ~ April 2024"
        contents={[
          "Constructing and planing full-stack application.",
          "Led a 30-member organization comprising multiple teams: development, marketing, and human resources.",
          "Develop a web application for online learning with Express.js as backend and Vue as frontend.",
        ]}
      ></WorkExpBlockItem>
    </div>
  );
}
