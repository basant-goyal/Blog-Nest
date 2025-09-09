import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg hover:cursor-pointer ${className} ${bgColor} ${textColor}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button