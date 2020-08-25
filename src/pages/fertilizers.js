import React from "react";
import PageHero from "../components/page-hero";
import Contact from "../components/contact";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
import fertilizerImg from "../../static/fertilizer-page-bg.jpg";
import Footer from "../components/footer";

const FertilizersPage = (props) => {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();

	const fertilizersBlocks = t("fertilizersPage.blocks");
	const fertilizersBlocksNames = t("fertilizersPage.blockNames");

	function toggleBlockOpen(val) {
		val === state[val]
			? setState({
					[val]: false,
			  })
			: setState({
					[val]: val,
			  });
	}

	return (
		<div className="page">
			<PageHero
				background={fertilizerImg}
				modificatorClass={"page-hero_fertilizers"}
				title={t("fertilizersPage.title")}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description">
							<h3 className="page-content-description__title">
								{t("fertilizersPage.content.title")}
							</h3>
							<p className="page-content-description__text">
								{t("fertilizersPage.content.text")}
							</p>
						</div>

						<div className="page-content-blocks">
							{fertilizersBlocks.map((group, groupIndex) => (
								<div
									className="page-content-blocks-group"
									key={groupIndex}
								>
									{group.map((block, blockIndex) => (
										<div
											key={blockIndex}
											className={
												state[
													`${groupIndex}${blockIndex}`
												]
													? "page-content-blocks-block_open"
													: "page-content-blocks-block"
											}
										>
											<header
												className="page-content-blocks-block-header flex-between"
												onClick={(e) =>
													toggleBlockOpen(
														`${groupIndex}${blockIndex}`
													)
												}
											>
												<p className="page-content-blocks-block-header__title">
													{
														fertilizersBlocksNames[
															groupIndex
														][blockIndex]
													}
												</p>

												{state[
													`${groupIndex}${blockIndex}`
												] ? (
													<span className="page-content-blocks-block-header__close"></span>
												) : (
													<span className="page-content-blocks-block-header__open"></span>
												)}
											</header>

											<div className="page-content-blocks-block-content">
												<ul className="page-content-blocks-block-content-list">
													{block.map(
														(
															listItem,
															listItemIndex
														) => (
															<li
																key={
																	listItemIndex
																}
																className="page-content-blocks-block-content-list__item"
															>
																{listItem}
															</li>
														)
													)}
												</ul>
											</div>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Contact />
			<Footer />
		</div>
	);
};

export default FertilizersPage;
