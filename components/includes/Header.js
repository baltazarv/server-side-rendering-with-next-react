import React from 'react';
import Link from 'next/link';
import css from './Header.module.scss';

const Header = props => {
	return (
		<>
			<h1><Link href="/"><a><img className={css.logo} src="/images/logo.png" /></a></Link> LGBT BAR NY</h1>
			<nav>
				<Link href="/"><a>Home</a></Link>
				<Link href="/clinics"><a>Clinics</a></Link>
			</nav>
		</>
	)

}

export default Header;
