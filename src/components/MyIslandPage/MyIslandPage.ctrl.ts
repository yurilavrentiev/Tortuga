import { makeAutoObservable, runInAction } from "mobx";
import { DEFAULT_ISLAND_MAP_MATRIX } from "../../helper/constants";

class MyIslandController {
	inputValue = "";
	address = "";
	islandMap = DEFAULT_ISLAND_MAP_MATRIX;
	totalIslands = 0;
	totalProfit = 0;
	totalIslandCost = 0;
	currentIslandInfo = null;
	currentIslandName = null;
	isExistIsland = false;

	constructor() {
		makeAutoObservable(this);
	};

	setInputValue(value) {
		this.inputValue = value;
	};

  handleInputChange(event) {
    this.setInputValue(event.currentTarget.value);
  };

  handleButtonClick() {
    this.setAddress(this.inputValue);
    this.fetchIslandMap();
		this.fetchCurrentIslandInfo();
		this.fetchIslandName();
    this.setInputValue('');
  }

	setAddress(value) {
		this.address = value;
	};

	fetchIslandMap() {
		fetch("https://api2.quota.team/data/islandsMaps.json")
			.then(response => response.json())
			.then((response) => {
				runInAction(() => {
					if (response[this.address]) {
						this.islandMap = response[this.address];
					} else {
						this.islandMap = DEFAULT_ISLAND_MAP_MATRIX;
						this.setAddress("Остров не найден");
					}
				});
			});
	};
	
	fetchTotalIslandsInfo() {
		fetch("https://api2.quota.team/data/islandsInfo.json")
		.then(response => response.json())
		.then((response) =>{
			runInAction(() => {
				this.totalIslands = response.totalIslands;
				this.totalIslandCost = response.totalIslandsCost.toFixed(2);
				this.totalProfit = response.totalProfitWeek.toFixed(2);
			})
		})
	};

	fetchCurrentIslandInfo() {
		fetch("https://api2.quota.team/data/islandsInfo.json")
		.then(response => response.json())
		.then((response) => {
			runInAction(() => {
				if (response.info[this.address]) {
					this.currentIslandInfo = response.info[this.address];
					this.isExistIsland = true;
				} else {
					this.isExistIsland = false;
				}
			})
		})
	};
	fetchIslandName() {
		fetch("https://api2.quota.team/data/islandsNames.json")
		.then(response => response.json())
		.then((response) => {
			runInAction(() => {
				if (response[this.address]) {
					this.currentIslandName = response[this.address].name ? response[this.address].name : null
				} else {
					this.currentIslandName = null;
				}
			})
		})
	}
};

export { MyIslandController };
