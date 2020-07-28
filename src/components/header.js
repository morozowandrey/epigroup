import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styles from "./header.module.scss";

export default function Header() {
	const [state, setState] = React.useState({});

	return (
		<div className={styles.header}>
			<div className="wrapper flex-between">
				<Link
					to="/"
					style={{
						color: "white",
						textDecoration: "none",
					}}
				>
					<img
						src="../../epi-group-logo.svg"
						alt="EPI Group logo"
						className={styles.headerLogo}
					/>
				</Link>

				<div className={styles.headerContent}>
					<div className={`${styles.headerContentNav} flex-between`}>
						<AnchorLink
							to="/"
							title="Главная"
							className={styles.headerContentNavItem}
							stripHash
						/>
						<AnchorLink
							to="/#about"
							title="О компании"
							className={styles.headerContentNavItem}
							stripHash
						/>
						<AnchorLink
							to="/#contacts"
							title="Контакты"
							className={styles.headerContentNavItem}
							stripHash
						/>
					</div>
					<div className={styles.headerContentLan}></div>
				</div>
			</div>
		</div>
	);
}
