import { makeAutoObservable, runInAction } from "mobx";

class MyIslandController {
  inputValue = "";
  address = "";
  islandMap = [
    ["Water", "i023", "i022", "Water", "Water"],
    ["Water", "Water", "Boat", "Water", "i022"],
    ["i022", "Water", "Water", "i023", "Water"],
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue(value) {
    runInAction(() => {
      this.inputValue = value;
    });
  }

  setAddress(value) {
    runInAction(() => {
      this.address = value;
    });
  }

  fetchIslandMap() {
    fetch("https://api2.quota.team/data/islandsMaps.json")
      .then((response) => response.json())
      .then((response) => {
        runInAction(() => {
          this.islandMap = response[this.address]
            ? response[this.address]
            : [
                ["Water", "i023", "i022", "Water", "Water"],
                ["Water", "Water", "Boat", "Water", "i022"],
                ["i022", "Water", "Water", "i023", "Water"],
              ];
          response[this.address]
            ? this.setAddress(this.address)
            : this.setAddress("Остров не найден");
        });
      });
  }
}
const islandController = new MyIslandController();
export default islandController;
