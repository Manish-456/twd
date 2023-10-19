import {AiFillCheckCircle} from 'react-icons/ai';

export function Card({card, selected, onSelected}){


    return (
        <div onClick={() => onSelected(card.id)} className={`flex rounded-md select-none  flex-col gap-4  relative p-4 border-2 w-full ${selected ? "border-blue-700" : "border-slate-200"}`}>
           <div>
            <h6 className="text-xs md:text-sm font-semibold">{card.title}</h6>
            <span className="text-xs md:text-sm text-slate-600">{card.notification}</span>
           </div>
           <p className="md:text-sm text-xs text-slate-700">{card.count} users</p>
           {
            selected && (
                <div className="absolute top-3 right-4">
                    <AiFillCheckCircle fill='blue'/>
                </div>
            )
           }
        </div>
    )
}