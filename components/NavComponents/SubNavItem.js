export const SubMenuItem = (props) => {
  
    return (
        <div className="flex flex-row bg-white hover:bg-gray-300 p-1">
            <img
                src={props.icon}
                className="w-11 h-11 min-w-[44px] my-auto bg-gray-500 circle ml-1"
            />
            <div className="flex flex-col p-2">
                <h3 className="text-black text-sm font-bold">{props.title}</h3>
                <p className="text-black text-xs">{props.short}</p>
            </div>
        </div>
    )
}