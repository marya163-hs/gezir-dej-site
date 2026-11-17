import Reveal from "./Reveal"

const items=[

  {icon:'📍', title:'موقعیت', text:'بندرلنگه، هرمزگان', color:'border-cyan-400'},
  {icon:'💧', title:'ظرفیت تولید', text:'10,000 متر مکعب ', color:'border-blue-400'},
  {icon:'⚙️', title:'روش تصفیه', text:'اسمز معکوس', color:'border-teal-400'},

]

export default function Stats(){
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-32 relative z-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {items.map((item, i) => (
          <Reveal>

            <div key={i} className={`bg-white rounded-2xl shadow-xl p-6 text-center border-t-4 ${item.color}`}>
              <p className="text-4xl mb-2">{item.icon}</p>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-slate-500">{item.text}</p>
            </div>

          </Reveal>
          
        ))}
      </div>
    
    </section>
  )
}