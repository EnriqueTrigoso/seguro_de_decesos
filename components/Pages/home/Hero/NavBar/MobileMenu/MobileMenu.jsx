import { useEffect, useState } from "react";
import styles from './MobileMenu.module.css'
import menu_bar from 'assets/icons/menu_bar.svg'
import Image from "next/image";
import Close from "components/Icons/Close";
import RightAngle from "components/Icons/RightAngle";
import Link from "next/link";

const MobileMenu = () => {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		isOpen && (document.body.style.overflow = 'hidden');
		!isOpen && (document.body.style.overflow = 'unset');
	 }, [isOpen ]);

	const list = [
		'Inicio',
		'Pólizas',
		'Internet y Telefonía',
		'Hipotecas y Finanzas',
		'Energía',
		'Viajes',
		'Coches'
	]

	return (

		<>
			<span
				className={styles.menu_bar}
				onClick={() => setOpen(!isOpen)}
			>
				<Image src={menu_bar} alt={''}/>
			</span>

			{
				isOpen && (
					<div className={styles.wrapper} onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
					}}>

						<div className={styles.background_menu}>

							<span className={styles.close_button}
								onClick={() => setOpen(!isOpen)}>
								<Close stroke={'#363352'} />
							</span>

							<ul>
								{
									list.map((item, index) => {
										return (
											<li key={index}>
												<Link href="">{item}</Link>
												<RightAngle widght={10} height={10} />
											</li>
										)
									})
								}
							</ul>

						</div>

					</div>

				)
			}
		</>
	);
};

export default MobileMenu;