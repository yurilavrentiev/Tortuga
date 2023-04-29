import React from "react";
import styles from "./MyIslandPage.module.css";
import { IslandMap } from "./IslandMap/IslandMap";
import { observer } from "mobx-react-lite";
import { MyIslandController } from "./MyIslandPage.ctrl";

const INPUT_PLACEHOLDER = "Введи адрес острова";
const controller = new MyIslandController();

export const MyIslandPage = observer(() => {
  
	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder={INPUT_PLACEHOLDER}
				className={styles.input}
				value={controller.inputValue}
				onChange={(event)=> {controller.handleInputChange(event)}}
			/>
			<button className={styles.btn} onClick={()=>{controller.handleButtonClick()}}>
				Найти
			</button>
			<IslandMap
				islandMap={controller.islandMap}
				address={controller.address}
			/>
		</div>
	);
});
