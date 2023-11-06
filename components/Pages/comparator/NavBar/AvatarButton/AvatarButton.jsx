import React from 'react'
import styles from './AvatarButton.module.css';
import Image from 'next/image'
import user_default from 'assets/imgs/user_default.webp'
import { useIsLogin } from 'contexts/IsLoginContext/useIsLogin'

const AvatarButton = ({openMenu, closeMenu}) => {

	const { isLogin } = useIsLogin()

	return (
		<button
			className={styles.user_circle}
			onClick={openMenu}
			onDoubleClick={closeMenu}
		>
			<Image
				src={isLogin && isLogin.photo ? isLogin.photo : user_default}
				alt={'avatar'}
				width={45}
				height={45}
			/>
		</button>
	)
}

export default AvatarButton;