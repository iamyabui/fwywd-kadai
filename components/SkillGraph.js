import Data from '../src/data.json'

export default function SkillGraph() {
  const items = Data.skillGraph

  return (
    <div className='bg-white rounded mt-6 pt-4 pb-4 pr-8 pl-8'>
      {items.map((data, index) => (
        <div key={index}>
          <p className='text-origin-green'>{data.skill}</p>
          <div className='flex items-center space-x-3'>
            <div className='w-full relative pt-1'>
              <div
                className='
              overflow-hidden 
              h-2 
              mb-4 
              text-xs 
              flex 
              rounded 
              bg-progress-color-primary
            '
              >
                <div
                  style={{ width: data.percentage, backgroundColor: data['secondary-border'] }}
                  className={data.border}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
