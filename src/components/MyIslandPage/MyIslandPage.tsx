import React from "react";
import styles from "./MyIslandPage.module.css";
import { IslandMap } from "./IslandMap/IslandMap";
import { observer } from "mobx-react-lite";
import {controller} from "./MyIslandController";

export const MyIslandPage = observer(() => {
  const INPUT_PLACEHOLDER = "Введи адрес острова";

  const inputHandler = (event) => {
    controller.setInputValue(event.target.value);
  };
  const buttonHandler = () => {
    controller.setAddress(controller.inputValue);
    controller.fetchIslandMap();
    controller.setInputValue("");
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        className={styles.input}
        value={controller.inputValue}
        onChange={inputHandler}
      />
      <button className={styles.btn} onClick={buttonHandler}>
        Найти
      </button>
      <IslandMap islandMap={controller.islandMap} address={controller.address}/>
    </div>
  );
});
