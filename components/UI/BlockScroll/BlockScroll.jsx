import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect, useRef } from 'react'

const BlockScroll = ({ children }) => {

	const modalRef = useRef(null)

	useEffect(() => {

		let currentRef = modalRef.current;

		if (currentRef) {
			disableBodyScroll(currentRef);
		}

		return () => {
			enableBodyScroll(currentRef);
		}

	}, []);

	return (
		<div ref={modalRef}>
			{children}
		</div>
	)
}

export default BlockScroll