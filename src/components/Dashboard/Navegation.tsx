

type NavegationProps = {
    name: string,

    isActive: boolean,
    color: string,
    useColor: () => void,
    taskCounter: number
}


export const Navegation = ({ name, taskCounter, isActive, color, useColor }: NavegationProps) => {

    return (
        <button

            onClick={useColor}
            className={`flex gap-1 items-center justify-center p-1 w-full rounded-xl cursor-pointer text-sm ${isActive ? `${color} text-white` : 'text-black'}`}>
            <p>{name}</p>
            <span className="bg-white px-1 rounded-md text-black">{taskCounter}</span>
        </button>
    )
}
