
export const Clock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={20}
            height={20}
            fill="#ffffff"
            {...props}
            id="icon-clock" viewBox="0 0 24 24">
            <path d="M12 1.75a10.25 10.25 0 1 0 10.25 10.25A10.262 10.262 0 0 0 12 1.75zm0 18.5a8.25 8.25 0 1 1 8.25-8.25 8.26 8.26 0 0 1-8.25 8.25z" />
            <path d="M12.75 7.5h-1.5v5.25l4.5 2.67.75-1.23-3.75-2.19z" />
        </svg>

    )
}
