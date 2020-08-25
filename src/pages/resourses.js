import React from "react";
import Layout from "../layout";
import PageHero from "../components/page-hero";
import Contact from "../components/contact";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
import resoursesImg from "../../static/resourses-page-bg.jpg";
import Footer from "../components/footer";

const ResoursesPage = (props) => {
	const [state, setState] = React.useState({});
	const { t, i18n } = useTranslation();
	let ln = i18n.language ? i18n.language : i18n.languages[1];

	const resoursesBlocks = t("resoursesPage.blocks");
	const resoursesBlocksNames = t("resoursesPage.blockNames");

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
				background={resoursesImg}
				modificatorClass={"page-hero_resourses"}
				title={t("resoursesPage.title")}
			/>
			<div className="page-header">
				<Header />
			</div>
			<div className="page">
				<div className="wrapper">
					<div className="page-content">
						<div className="page-content-description">
							<h3 className="page-content-description__title">
								{t("resoursesPage.content.title")}
							</h3>
							<p className="page-content-description__text">
								{t("resoursesPage.content.text")}
							</p>
						</div>

						<div className="page-content-blocks">
							{resoursesBlocks.map((group, groupIndex) => (
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
														resoursesBlocksNames[
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
												{block.length === 2 && (
													<div className="page-content-blocks-block-content_paired">
														{block.map(
															(
																listItem,
																listItemIndex
															) => (
																<ul
																	className="page-content-blocks-block-content-list page-content-blocks-block-content-list_paired"
																	key={
																		listItemIndex
																	}
																>
																	{listItem.map(
																		(
																			listItem2,
																			listItemIndex2
																		) => (
																			<li
																				key={
																					listItemIndex2
																				}
																				className="page-content-blocks-block-content-list__item"
																			>
																				{
																					listItem2
																				}
																			</li>
																		)
																	)}
																</ul>
															)
														)}
													</div>
												)}
												{block.length > 2 && (
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
												)}
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

export default ResoursesPage;
