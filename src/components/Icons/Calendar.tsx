

export const Calendar:React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={20}
            height={20}
            fill="#ffffff"
            {...props}
            id="icon-calendar" viewBox="0 0 24 24">

            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z" />

        </svg>

    )
}
