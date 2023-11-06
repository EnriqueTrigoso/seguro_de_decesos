import React, { useState } from 'react'
import styles from './MobileMenu.module.css'
import MobileMenuCard from './MobileMenuCard'
import Menu from 'components/Icons/Menu'
import { Close } from 'components/Icons'
import CloseIcon from 'components/Icons/CloseIcon'

const MobileMenu = () => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.menu} onClick={() => {
			setIsOpen(!isOpen)
		}}>
			{isOpen ? <CloseIcon /> : <Menu />}
			{isOpen && <MobileMenuCard />}
		</div>
	)
}

export default MobileMenu