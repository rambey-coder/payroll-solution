
// eslint-disable-next-line react/prop-types
const IconBox = ({ backgroundColor, icon }) => {
    return (
        <div  style={{ background: backgroundColor }}
            className='w-[70px] h-[70px] flex items-center justify-center rounded-md'>
            <div className="text-4xl">
             {icon}
            </div>
        </div>
    )
}

export default IconBox