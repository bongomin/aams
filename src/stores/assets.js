import { defineStore } from "pinia";
import axios from "axios";
import {
  postAssets,
  listAssets,
  listAssetCategories,
  bankBranches,
  assetLocations,
  postLocation,
  postBranch
} from "../service/assets.api";

export const useAssetstore = defineStore("assets", {
  state: () => ({
    allAssets: [],
    assetCategories: [],
    bankBranches : [],
    assetLocations:[],
  }),

  getters: {
    getAllAssets: (state) => state.allAssets,
    getAllBranches: (state) => state.bankBranches,
    getAssetCategories: (state) => state.assetCategories,
    getAllAssetsLocation:(state)=> state.assetLocations
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
          this.assetLocations = data[1];
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
      console.log('assets to save',asset)
      postAssets(asset)
        .then((data) => {
          this.allAssets = data;
          console.log(data);
        })
        .catch((error) => console.log('failed to save',error));
    },


    createNewLocation(location) {
      console.log('location to save',location)
      postLocation(location)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log('failed to save',error));
    },

    createNewBranch(branch) {
      console.log('branch to save',branch)
      postBranch(branch)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log('failed to save',error));
    },
  },
});
