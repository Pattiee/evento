import React, { useState } from 'react'

const Auth = () => {
    const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div>
      {
        isRegistered
        ?
        <div>
            Login
        </div>
        :
        <div>
            Register
        </div>
      }
    </div>
  )
}

export default Auth
