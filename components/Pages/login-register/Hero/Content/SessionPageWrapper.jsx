import React from 'react'
import LoginCard from 'components/UI/LoginRegisterCard/LoginCard'
import RegisterCard from 'components/UI/LoginRegisterCard/RegisterCard'
import { useRouter } from 'next/router'

const SessionPageWrapper = ({ type }) => {

  const router = useRouter()

  function sessionStartFunc() {
    router.push('/')
  }

  if (type === 'login') {
    return (
      <LoginCard
        sessionStartFunc={sessionStartFunc}
        setStepByHref='/register'
      />
    )

  } else if (type === 'register') {

    return (
      <RegisterCard
        sessionStartFunc={sessionStartFunc}
        setStepByHref='/login'
      />

    )

  }

}

export default SessionPageWrapper;