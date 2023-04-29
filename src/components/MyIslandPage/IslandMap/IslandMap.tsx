import React from "react";
import styles from "./IslandMap.module.css";
import { mapIsland } from "../../../helper/functions";

export const IslandMap = (props: {
	islandMap: string[][];
	address: string;
}) => {
	const { islandMap, address } = props;

	return (
		<div className={styles.container}>
			<h3>{address}</h3>
			{islandMap.map((mapColumnElements) => {

				return <div className={styles.row}>{mapColumnElements.map(mapIsland)}</div>;
			})}
		</div>
	);
};
