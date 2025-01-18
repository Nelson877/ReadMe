import React from 'react'
import { TbAlertTriangle } from "react-icons/tb";

const Header = () => {
  return (
    <div className="text-center space-y-2">
    <TbAlertTriangle  className="h-12 w-12 text-red-500 mx-auto" />
    <h1 className="text-3xl font-semibold text-slate-900">Delete Account</h1>
    <p className="text-slate-500 max-w-md mx-auto">
      This action cannot be undone. Your account and all associated data will be permanently deleted.
    </p>
  </div>
  )
}

export default Header