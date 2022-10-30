import { data } from "autoprefixer";
import { defineStore } from "pinia";
import {
  postAssets,
  listAssets,
  listAssetCategories,
  bankBranches,
  assetLocations
} from "../service/assets.api";

export const useAssetstore = defineStore("counter", {
  state: () => ({
    allAssets: [],
    assetCategories: [],
    bankBranches : [],
    assetLocations:[],
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    allAssets: (state) => state.allAssets,
  },
  actions: {
    increment() {
      this.counter++;
    },

    fetchAsset() {
      listAssets()
        .then((data) => {
          this.allAssets = data[1];
          return data[1]
        })
        .catch((error) => console.log(error));
    },

    fetchAssetLocation() {
      assetLocations()
        .then((data) => {
          this.assetLocations = data;
          return data[1]
        })
        .catch((error) => console.log(error));
    },

     listBankBranches() {
      bankBranches()
        .then((data) => {
          this.bankBranches = data[1];
          return data[1]
        })
        .catch((error) => console.log(error));
    },

    assetCategory() {
      listAssetCategories()
        .then((data) => {
          this.assetCategories = data[1]
          return data
        })
        .catch((err) => console.log(err));
    },

    createAsset(asset) {
      postAssets(asset)
        .then((data) => {
          this.allAssets = data;
          console.log(data);
        })
        .catch((error) => console.log(error));
    },
  },
});
