import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { slide as Menu } from "react-burger-menu";
import LanguageMenu from "./language-menu";
import { useTranslation } from "react-i18next";

export default function Header() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	const closeMenusOnClick = (e) => {
		setState({ ...state, areMenusOpen: false });
		// console.log(state.areMenusOpen);
	};

	const handleOnOpen = (e) => {
		setState({ ...state, areMenusOpen: true });
	};

	const handleOnClose = (e) => {
		setState({ ...state, areMenusOpen: false });
	};

	return (
		<div className="header">
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
						className="header__logo"
					/>
				</Link>

				<div className="header-content">
					{/* <div className="header-content-nav flex-between">
						<AnchorLink
							to="/"
							title={t("header")[0]}
							className="header-content-nav-item"
							stripHash
						/>
						<AnchorLink
							to="/#about"
							title={t("header")[1]}
							className="header-content-nav-item"
							stripHash
						/>
						<AnchorLink
							to="/#activity"
							title={t("header")[2]}
							className="header-content-nav-item"
							stripHash
						/>
						<AnchorLink
							to="/#contacts"
							title={t("header")[3]}
							className="header-content-nav-item"
							stripHash
						/>
					</div> */}

					<div id="outer-container">
						<Menu
							right
							width={375}
							outerContainerId={"outer-container"}
							overlayClassName={"header-content-nav__overlay"}
							isOpen={state.areMenusOpen}
							onOpen={handleOnOpen}
							onClose={handleOnClose}
						>
							<Link
								to="/"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<img
									src="../../epi-group-logo_white.svg"
									alt="EPI Group logo"
									className="header__logo header__logo_mob"
								/>
							</Link>
							<span
								onClick={closeMenusOnClick}
								className="header-content-nav-item__mob-wrapper"
							>
								<AnchorLink
									to="/"
									title={t("header")[0]}
									className="header-content-nav-item header-content-nav-item__mob"
									stripHash
								/>
							</span>
							<span
								onClick={closeMenusOnClick}
								className="header-content-nav-item__mob-wrapper"
							>
								<AnchorLink
									to="/#about"
									title={t("header")[1]}
									className="header-content-nav-item header-content-nav-item__mob"
									stripHash
								/>
							</span>
							<span
								onClick={closeMenusOnClick}
								className="header-content-nav-item__mob-wrapper"
							>
								<AnchorLink
									to="/#activity"
									title={t("header")[2]}
									className="header-content-nav-item header-content-nav-item__mob"
									stripHash
								/>
							</span>
							<span
								onClick={closeMenusOnClick}
								className="header-content-nav-item__mob-wrapper"
							>
								<AnchorLink
									to="/#contacts"
									title={t("header")[3]}
									className="header-content-nav-item header-content-nav-item__mob"
									stripHash
								/>
							</span>

							<div className="header-content-lan">
								<LanguageMenu></LanguageMenu>
							</div>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	);
}
