

export const Close: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={20}
            height={20}
            fill="#ffffff"
            {...props}
            id="icon-x" viewBox="0 0 24 24"
            className="size-4" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>




    )
}
