
function Tooltip({hint}){
    return (
        <span className="overflow-visible border-2 border-scifi4 my-1 w-max p-2 absolute bottom-full -translate-x-[calc(50%_-_2rem)] rounded text-center font-medium invisible group-hover:visible bg-slate-200/80 z-40 after:content-[' '] after:absolute after:left-1/2 after:top-full after:-ml-2 after:border-8 after:border-t-black after:border-l-transparent after:border-r-transparent after:border-b-transparent">{hint}</span>
    )

}

export default Tooltip