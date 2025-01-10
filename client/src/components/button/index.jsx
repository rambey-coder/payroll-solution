/* eslint-disable react/prop-types */

const Button = ({name, icon, style, type}) => {
  return (
     <button
        style={style}
        className="flex p-2 rounded-sm w-auto justify-center items-center gap-2"
        type={type || 'button'}>
        {icon} {name}
     </button>
  )
}

export default Button