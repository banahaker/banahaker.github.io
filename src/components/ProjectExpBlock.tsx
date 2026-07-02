import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function ProjectExpBlock() {
  return (
    <Section label="Projects">
      <TimelineItem
        title="MDSIG 2.0 明道學生共學社群線上論壇"
        meta="Next.js, Express.js, MongoDB, RESTful API, Nginx, JWT"
        contents={[
          "Served as the project manager for a four-person development team, successfully coordinating front-end and back-end development and design resources, establishing an efficient communication mechanism to ensure alignment with the school's requirements, and delivering the project on schedule.",
          "Responsible for Next.js front-end development, accurately implementing UI/UX design drafts, and introducing responsive web design (RWD) and server-side rendering (SSR) technologies.",
          "Led back-end system architecture design, optimized RESTful API structure, implemented pagination mechanisms and data caching strategies, effectively reducing API transmission load by 70% and improving overall system performance.",
        ]}
      />
      <TimelineItem
        title="MDTC 明道人才雲"
        meta="Next.js, Express.js, MongoDB, RESTful API, Nginx, Prisma ORM, Cloudflare R2"
        contents={[
          "The forum project received recognition from the school and the principal, continuing to lead the same team in collaboration with the alumni association and the parent association to develop the Mingdao Talent Cloud.",
          "User-related files (resumes, other personal data) are stored using Cloudflare R2. By utilizing MongoDB and TTL mechanisms as a cache, the usage of Cloudflare's API is reduced, effectively lowering API costs.",
          "Next.js combined with Server Action is used to create an integrated front-end and back-end application.",
        ]}
      />
    </Section>
  );
}
