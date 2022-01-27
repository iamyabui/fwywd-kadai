export default function SkillGraph() {
  return (
    <div className="bg-white rounded mt-6 pt-4 pb-4 pr-8 pl-8">
      <p className="text-origin-green">AWS</p>
      <div className="flex items-center space-x-3">
        <div className="w-full h-3 bg-progress-color1 rounded">
          <div className="w-1/2 h-3 bg-progress-color2 rounded"></div>
        </div>
        <p className="text-origin-green">50%</p>
      </div>
      <p className="text-origin-green">React</p>
      <div className="flex items-center space-x-3">
        <div className="w-full h-3 bg-progress-color1 rounded">
          <div className="w-1/2 h-3 bg-progress-color2 rounded"></div>
        </div>
        <p className="text-origin-green">50%</p>
      </div>
      <p className="text-origin-green">Next.js</p>
      <div className="flex items-center space-x-3">
        <div className="w-full h-3 bg-progress-color1 rounded">
          <div className="w-1/2 h-3 bg-progress-color2 rounded"></div>
        </div>
        <p className="text-origin-green">50%</p>
      </div>
      <p className="text-origin-green">コミュニケーション</p>
      <div className="flex items-center space-x-3">
        <div className="w-full h-3 bg-progress-color1 rounded">
          <div className="w-1/2 h-3 bg-progress-color2 rounded"></div>
        </div>
        <p className="text-origin-green">50%</p>
      </div>
    </div>
  );
}
