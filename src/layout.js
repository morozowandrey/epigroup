import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import "./css/typography.css";
import "./css/styles.css";

export default function Template({ children }) {
	return (
		<div>
			<Helmet
				title="EPI Group"
				meta={[
					{ name: "description", content: "EPI Group site" },
					// { name: "keywords", content: "" },
				]}
			/>
			<div
				style={{
					background: `rebeccapurple`,
					marginBottom: `1.45rem`,
				}}
			>
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `1.45rem 1.0875rem`,
					}}
				>
					<h1 style={{ margin: 0 }}>
						<Link
							to="/"
							style={{
								color: "white",
								textDecoration: "none",
							}}
						>
							EPI Group
						</Link>
					</h1>
				</div>
			</div>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
				}}
			>
				{children}
			</div>
		</div>
	);
}
