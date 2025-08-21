export function ProjectExpBlockItem(props: {
  title: string;
  contents: string[];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold mt-1 mb-5">{props.title}</h2>
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

export default function ProjectExpBlock() {
  return (
    <section className="w-full p-8 bg-gray-100 rounded-2xl mt-6 font-light flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-1">Project Experience</h2>
      <ProjectExpBlockItem
        title="MDSIG 2.0 明道學生共學社群線上論壇 | Next.js, Express.js, MongoDB, RESTful API, Nginx, JWT"
        contents={[
          "Served as the project manager for a four-person development team, successfully coordinating front-end and back-end development and design resources, establishing an efficient communication mechanism to ensure alignment with school requirements, and delivering the project on time.",
          "Responsible for Next.js front-end development, accurately implementing UI/UX design drafts, and incorporating responsive design (RWD) and server-side rendering (SSR) technologies, resulting in a 40% increase in page load speed and significantly improving user experience.",
          "Led the design of the back-end system architecture, optimizing the RESTful API structure, implementing pagination mechanisms and data caching strategies, effectively reducing API transmission load by 70% and enhancing overall system performance.",
          "Planned and implemented JWT authentication mechanisms to ensure system security while optimizing the user login experience.",
        ]}
      />
      <ProjectExpBlockItem
        title="MDTC 明道人才雲 | Next.js, Express.js, MongoDB, RESTful API, Nginx, Prisma ORM, Cloudflare R2"
        contents={[
          "The forum project has received recognition from the school and the principal, continuing to lead the same team in collaboration with the alumni association and the parent association to develop the Mingdao Talent Cloud.",
          "Using Cloudflare R2 to store user-related files (resumes, other personal information). Additionally, using MongoDB with TTL mechanisms as a cache to reduce Cloudflare's API usage, effectively lowering API cost expenditures.",
          "Using Next.js combined with Server Action to create a front-end and back-end integrated application.",
        ]}
      ></ProjectExpBlockItem>
    </section>
  );
}
