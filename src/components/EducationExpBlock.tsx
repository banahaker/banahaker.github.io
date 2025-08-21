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
          title="資訊工程學系"
          subtitle="國立臺灣科技大學"
          contents={["特殊選才錄取"]}
        />
        <div className="font-bold text-right text-gray-700 md:pt-2">
          2025/09 ~ Present
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <EducationExpBlockItem
          title="明道中學 高中部"
          contents={[
            "曾任校內資訊社群總召，負責課程規劃、活動籌辦與社群管理。領導 5 人教學、執行團隊，規劃並執行超過 5 學期的課程、競賽等活動，參與人數超過 200 人。",
          ]}
        />
        <div className="font-bold text-right text-gray-700 md:pt-2">
          2022/09 ~ 2025/06
        </div>
      </div>
    </section>
  );
}
