import React from "react";
import styles from "./IslandMap.module.css";
import { mapIsland } from "../../../helper/functions";

export const IslandMap = (props: {
	islandMap: string[][];
	address: string;
	name: string | null;
}) => {
	const { islandMap, address, name: islandName } = props;

	return (
		<div className={styles.container}>
			<h3>{islandName}</h3>
			<p>{address}</p>
			{islandMap.map((mapColumnElements) => {
				return (
					<div className={styles.row}>{mapColumnElements.map(mapIsland)}</div>
				);
			})}
		</div>
	);
};
