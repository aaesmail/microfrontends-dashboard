import React, { useRef, useEffect } from 'react'
import mount from 'dashboard/DashboardApp'

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref}></div>
}

export default AuthApp
