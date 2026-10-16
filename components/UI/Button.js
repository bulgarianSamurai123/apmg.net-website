import React from 'react'

const Button = ({ children, ...props } ) => {
  return (
    <button className="bg-acccent-color text-white py-3 px-6 rounded-full hover:bg-accent-text-color font-bold" {...props}>
      {children}
    </button>
  )
}

export default Button

const LightButton = ({ children, ...props }) => {
  return (
    <button className="bg-card-white-color text-text-color py-3 px-6 rounded-full border border-botticelli hover:bg-white-hover-color font-bold" {...props}>
      {children}
    </button>
  )
}

export { LightButton }
