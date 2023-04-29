import React, { useEffect } from "react";
import styles from "./MainPage.module.css";
import { MAIN_PAGE_WELLCOME_MESSAGE } from "../../helper/constants";
import { MyIslandController } from "../MyIslandPage/MyIslandPage.ctrl";
import { observer } from "mobx-react";

const controller = new MyIslandController();

export const MainPage = observer(() => {
	useEffect(() => {
		controller.fetchIslandsInfo();
	}, []);

	return (
		<div className={styles.container}>
			<img
				src="https://tortuga.farm/images/main001.PNG"
				alt="islandLogo"
				className={styles.logo}
			/>
			<h3>{MAIN_PAGE_WELLCOME_MESSAGE}</h3>
			<div className={styles.islandsInfo}>
				<p>Всего островов: {controller.totalIslands}</p>
				<p>Общая стоимость: $ {controller.totalIslandCost}</p>
				<p>Еженедельная прибыль всех островов: $ {controller.totalProfit}</p>
			</div>
		</div>
	);
});
