import React from 'react'

const Title = ({title,description}) => {
  return (
    <div className="text-center mt-6 text-slate-700">
        {/* this class name is used to style done in tailwind css  */}
      <h2 className="text-3xl font-medium sm:text-4xl">{title}</h2>
      <p className="text-lg text-slate-500 mt-4">{description}</p>
    </div>
  )
}

export default Title
