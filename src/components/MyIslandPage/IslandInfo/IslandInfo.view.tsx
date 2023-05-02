import React from "react";
import styles from "./IslandInfo.module.css";
import { IslandInfoProps } from "../../../types";

export const IslandInfo = (props: {info: IslandInfoProps}) => {

	const { 
		Cost: totalIslandCost, 
		ProfitWeek: totalIslandProfit,
		Tickets: totalLotteryTickets,
	} = props.info;
	
	return (
		<div className={styles.infoContainer}>
			<p>Оценка Острова: $ {totalIslandCost.toFixed(2)}</p>
			<p>Еженедельная прибыль: $ {totalIslandProfit.toFixed(2)}</p>
			<p>Всего лотерейных билетов: {totalLotteryTickets}</p>
		</div>
	);
};