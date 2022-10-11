import React from 'react'

const Label = ({value, children, ...props}) => {
  return (
    <label className={'text-slate-600 mb-1 block'} {...props}>{value || children}</label>
  )
}

export default Label