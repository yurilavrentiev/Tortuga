import React from "react";
import styles from "./NotFoundPage.module.css";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
	
	return (
		<div className={styles.container}>
			<h3>Страница не найдена 404</h3>
			<NavLink to="/" className={styles.link}>
				Вернуться на главную
			</NavLink>
		</div>
	);
};
