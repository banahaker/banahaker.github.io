export function EducationExpBlockItem(props: {
  title: string;
  subtitle?: string;
  contents: string[];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-1">{props.title}</h2>
      {props.subtitle && (
        <div className="text-sm text-gray-500 mb-2">{props.subtitle}</div>
      )}
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

export default function EducationExpBlock() {
  return (
    <section className="w-full p-8 bg-gray-100 rounded-2xl mt-6 font-light flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <EducationExpBlockItem
          title="B.S. Computer Science and Information Engineering"
          subtitle="National Taiwan University of Science and Technology (NTUST)"
          contents={[]}
        />
        <div className="font-bold text-right text-gray-700 md:pt-2">
          2025/09 ~ 2029/06
        </div>
      </div>
    </section>
  );
}
