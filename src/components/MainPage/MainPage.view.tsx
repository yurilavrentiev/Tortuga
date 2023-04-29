import React from "react";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  
	return (
		<div className={styles.container}>
			<img
				src="https://tortuga.farm/images/main001.PNG"
				alt="islandLogo"
				className={styles.logo}
			/>
			Здесь будет главная страница
		</div>
	);
};
