import React from 'react'

const Layout  = ({children}) => {
  return (
    <div className="flex items-center justify-center bg-slate-50">
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-xl shadow-sm">
      {children}
    </div>
  </div>
  )
}

export default Layout 