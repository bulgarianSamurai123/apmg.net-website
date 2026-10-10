import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="bg-acccent-color text-white py-3 px-6 rounded-full hover:bg-accent-text-color">
      {children}
    </button>
  )
}

export default Button
