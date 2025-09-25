import type { ReactNode } from "react";
import { Counter } from "./Counter";




type CounterProps = {
    iconId: ReactNode;
    category: string;
    bgColor: "BlueCian" | "YellowOrange" | "GreenEsmerald";
   taskCounter: number
}
const gradientClass = {
    BlueCian: "bg-gradient-to-br from-blue-500 to-cyan-500",
    YellowOrange: "bg-gradient-to-br from-yellow-500 to-orange-500",
    GreenEsmerald: "bg-gradient-to-br from-green-500 to-emerald-500"
}

export const CounterTask = ({ bgColor, iconId, category,taskCounter }: CounterProps) => {


    return (

        <div className={`flex flex-col p-4 gap-2 mb-6 place-items-center border-0 shadow-lg rounded-xl ${gradientClass[bgColor]} text-white  transition duration-300 ease-in-out hover:scale-105 `}>
            <div >{iconId}</div>
            <Counter taskCounter ={taskCounter} />
            <p>{category}</p>

        </div>

    )
}
