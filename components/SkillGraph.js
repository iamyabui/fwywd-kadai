import Data from "../src/data.json";

export default function SkillGraph() {
  const items = Data.skillGraph;

  return (
    <div className="bg-white rounded mt-6 pt-4 pb-4 pr-8 pl-8">
      {items.map((data, index) => (
        <div key={index}>
          <p className="text-origin-green">{data.skill}</p>
          <div className="flex items-center space-x-3">
            <div className="w-full h-3 bg-progress-color1 rounded">
              <div className="w-1/2 h-3 bg-progress-color2 rounded"></div>
            </div>
            <p className="text-origin-green">{data.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
