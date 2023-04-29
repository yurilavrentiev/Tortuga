import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const activeClassName = (isActive: boolean) => {
	return isActive ? `${styles.active}` : null;
};

export const Header = () => {
	
  return (
		<div className={styles.header}>
			<div>
				<NavLink to="/" className={({ isActive }) => activeClassName(isActive)}>
					<img
						className={styles.logo}
						src="https://tortuga.farm/images/tortuga.png"
						alt="tortuga"
					/>
				</NavLink>
			</div>
			<div>
				<NavLink
					to="/myIsland"
					className={({ isActive }) => activeClassName(isActive)}
				>
					<span className={styles.link}>Мой Остров</span>
				</NavLink>
			</div>
			<div>
				<NavLink
					to="/howToStart"
					className={({ isActive }) => activeClassName(isActive)}
				>
					<span className={styles.link}>Как начать</span>
				</NavLink>
			</div>
			<div>
				<NavLink
					to="/info"
					className={({ isActive }) => activeClassName(isActive)}
				>
					<span className={styles.link}>Справка</span>
				</NavLink>
			</div>
		</div>
	);
};
