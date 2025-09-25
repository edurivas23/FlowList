import logo from '../assets/icons/logo.svg'
export const Hero = () => {
    return (
        <header className='mt-20 mb-10  mx-auto flex flex-col place-items-center gap-5'>
            <div className='flex justify-center place-items-center gap-2'>
                <i className='size-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1 hover:to-purple-400 transition-colors'>
                    <img className='object-cover' src={logo} alt='logo of the page' /></i>
                <span className='text-5xl font-sans font-bold text-transparent bg bg-gradient-to-br from-blue-400 to-purple-500  rounded-full p-1 bg-clip-text '>Flowlist</span>
            </div>
            <p className='opacity-70 text-center'>Organiza tu día de manera eficiente y colorida
            </p>
        </header>   
    )
}
