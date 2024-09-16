export default function Button({children, isMainButton, ...props}){
    const classes = isMainButton ? "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" : "text-stone-800 hover:text-stone-950";
    return (
        <button className={classes} {...props}>{children}</button>
    )
}