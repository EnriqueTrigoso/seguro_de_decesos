import React from 'react'
import LoginCard from 'components/UI/LoginRegisterCard/LoginCard'
import RegisterCard from 'components/UI/LoginRegisterCard/RegisterCard'
import { useLoginRegisterModal } from 'components/Pages/comparator/context/LoginRegisterModalContext/useLoginRegisterModal'
import { useIsLogin } from 'contexts/IsLoginContext/useIsLogin'

const SessionModalWrapper = ({ type, setType }) => {

  const { setIsLogin } = useIsLogin()
  const { setIsOpenModal } = useLoginRegisterModal()

  if (type === 'login') {
    return (
      <LoginCard
        sessionStartFunc={() => {

          let userData = JSON.parse(window.localStorage.getItem('userDataEva'));

          setIsLogin({
            name: userData['name'],
            surname: userData['surname'],
            photo: userData['photo']
          })

          setIsOpenModal(false)

        }}

        setStepByFunc={() => {
          setType('register')
        }}
      />
    )

  } else if (type === 'register') {

    return (
      <RegisterCard

        sessionStartFunc={

          (registerReponse) => {

            let userData = JSON.parse(window.localStorage.getItem('userDataEva'));

            setIsLogin({
              name: '',
              surname: '',
              photo: ''
            })

            setIsOpenModal(false)

          }
        }

        setStepByFunc={() => {
          setType('login')
        }}
      />
    )

  }

}

export default SessionModalWrapper;