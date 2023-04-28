import React from "react";
import styles from "./IslandMap.module.css";

export const IslandMap = (props: { islandMap: string[][], address: string }) => {
  const { islandMap, address } = props;
  return (
    <div className={styles.container}>
      <h3>{address}</h3>
      {islandMap.map((array) => {
        return (
          <div>
            {array.map((element) => {
              return <span>- {element} -</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};
