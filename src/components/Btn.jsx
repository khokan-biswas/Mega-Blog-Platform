import React from 'react'

function Btn({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    padding = "px-4 py-2",
    className = "",
    ...props
}) {
    return (
        <button className={`${bgColor}
         ${textColor} 
         ${padding} 
         ${className}`}
            type={type}
            {...props}>

            {children}
        </button>
    )
}

export default Btn
