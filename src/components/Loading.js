import React from "react";
import loadingIcon from "./loading.svg";
import { Grid } from "semantic-ui-react";

const Loading = () => {
	return (
		<Grid columns="12">
			<Grid.Row centered>
				<img src={loadingIcon} alt="Loading..." />
				<h2 className="loading">Loading Posts...</h2>
			</Grid.Row>
		</Grid>
	);
};

export default Loading;
