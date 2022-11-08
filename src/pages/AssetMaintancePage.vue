<template>
  <q-page>
    <div class="assets-wrapper">
      <div class="row q-mb-md" style="margin-top: 20px">
        <div class="col-md-1">
          <span style="font-size: 19px, font-wight:bold ,margin-left:100px">
          </span>
          <q-btn class="q-ml-md" flat round color="primary m-5" icon="east" />
        </div>
        <div class="col-md-11">
          <div class="btn-sec text-right">
            <q-btn
              class="q-mr-md"
              @click="AddLocation = true"
              outline
              style="color:#459755"
              label="Add New Location"
              icon="location_on"
            />
            <q-btn
              class="q-mr-md"
              @click="AddBranch = true"
              outline
              style="color:#459755"
              label="Add New Branch"
              icon="house_siding"
            />
          </div>
        </div>
      </div>
    <q-separator></q-separator>
          <LocationsTable />
      <!-- Asset Category dialoque -->
      <q-dialog
        v-model="AddAssetsCategory"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card
          style="max-width: 1500px; width: 1000px; height: 700px"
          class="bg-primary text-white"
        >
          <q-bar style="height: 50px">
            <q-icon style="font-size: 30px" name="category" />
            <div>Add Assets Category</div>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section class="q-pt-none q-mt-md">
            <div class="row q-col-gutter-xs">
              <q-input
                class="col-3 q-pa-xs"
                label="Category Id"
                v-model="category.assetCategoryId"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                v-model="category.categoryName"
                label="category Name"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                v-model="category.description"
                label="category Description"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                v-model="category.effectiveLifeInYears"
                label="effective Life In Years "
                bg-color="white"
                type="number"
                step="1"
                square
                dense
              >
              </q-input>
            </div>
            <div class="row q-col-gutter-xs">
              <q-input
                label="Effective Life in Months"
                class="col-3 q-pa-xs"
                v-model="category.effectiveLifeInMonths"
                bg-color="white"
                type="number"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                autogrow
                label="Depreciation Method Code"
                v-model="category.depreciationMethodCode"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                autogrow
                label="Created By"
                v-model="category.createdBy"
                bg-color="white"
                square
                dense
              >
              </q-input>
            </div>
            <div class="row q-col-gutter-xs q-mt-md">
              <q-btn
                class="col-1 q-pa-xs q-mr-md"
                color="white"
                text-color="black"
                label="Clear"
              />
              <q-btn
                class="col-1 q-pa-xs"
                @click="saveAsset"
                color="default"
                label="Save"
              />
            </div>
          </q-card-section>
          <q-separator class="q-mt-md q-mb-md"></q-separator>
          <AssetCategoriesTable />
        </q-card>
      </q-dialog>
      <!-- end -->

      <!-- Create Branch -->
      <q-dialog
        v-model="AddBranch"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card
          style="max-width: 1500px; width: 1000px; height: 700px"
          class="bg-primary text-white"
        >
          <q-bar style="height: 50px">
            <q-icon style="font-size: 30px" name="house_siding" />
            <div>Add Branch</div>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section class="q-pt-none q-mt-md">
            <div class="row q-col-gutter-xs">
              <q-input
                class="col-4 q-pa-xs"
                label="Branch Code"
                v-model="branch.branchCode"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-4 q-pa-xs"
                v-model="branch.branchName"
                label="Branch Name"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-4 q-pa-xs"
                v-model="branch.createdBy"
                label="Created By"
                bg-color="white"
                square
                dense
              >
              </q-input>
            </div>
            <div class="row q-col-gutter-xs q-mt-md">
              <q-space />
              <q-btn
                class="col-1 q-pa-xs q-mr-md"
                color="white"
                text-color="black"
                label="Clear"
              />
              <q-btn
                class="col-1 q-pa-xs"
                @click="saveAsset"
                color="default"
                label="Save"
              />
            </div>
          </q-card-section>
          <q-separator class="q-mt-md q-mb-md"></q-separator>
          <BranchesTable />
        </q-card>
      </q-dialog>
      <!-- end -->

      <!-- Create Location -->
      <q-dialog
        v-model="AddLocation"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card
         style="max-width: 1500px; width: 1000px; height: 700px"
          class="bg-primary text-white"
        >
          <q-bar style="height: 50px">
            <q-icon style="font-size: 30px" name="location_on" />
            <div>Add Location</div>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section class="q-pt-none q-mt-md">
            <div class="row q-col-gutter-xs">
              <q-input
                class="col-6 q-pa-xs"
                label="Branch Code"
                v-model="newlocation.description"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-6 q-pa-xs"
                v-model="newlocation.createdBy"
                label="Branch Name"
                bg-color="white"
                square
                dense
              >
              </q-input>
            </div>
            <div class="row q-col-gutter-xs q-mt-md">
              <q-space />
              <q-btn
                class="col-2 q-pa-xs q-mr-md"
                color="white"
                text-color="black"
                label="Clear"
              />
              <q-btn
                class="col-2 q-pa-xs"
                @click="saveAsset"
                color="default"
                label="Save"
              />
            </div>
          </q-card-section>
          <q-separator class="q-mt-md q-mb-md"></q-separator>
          <LocationsTable />
        </q-card>
      </q-dialog>
      <!-- end -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref, reactive } from "vue";
import monthpicker from "quasar-monthpicker";

import AssetsTable from "src/components/AssetsTable.vue";
import AssetCategoriesTable from "src/components/AssetCategoriesTable.vue";
import NewAssetsTable from "src/components/NewAssetsTable.vue";
import BranchesTable from "src/components/BranchesTable.vue";
import LocationsTable from "src/components/LocationsTable.vue";

// store registration
import { useAssetstore } from "stores/assets";

export default defineComponent({
  name: "AssetMaintancePage",

  components: {
    AssetsTable,
    monthpicker,
    AssetCategoriesTable,
    NewAssetsTable,
    BranchesTable,
    LocationsTable,
  },

  setup() {
    const useAssets = useAssetstore();

    // onMount
    useAssets.fetchAsset();
    useAssets.assetCategory();
    useAssets.listBankBranches();
    useAssets.fetchAssetLocation();
    const category = reactive({
      assetCategoryId: "",
      categoryName: " ",
      description: " ",
      effectiveLifeInYears: "",
      effectiveLifeInMonths: "",
      depreciationMethodCode: " ",
      createdBy: " ",
    });

    const newlocation = reactive({
      description: "",
      createdBy: "",
    });

    const branch = reactive({
      branchCode: "",
      branchName: "",
      createdBy: "",
    });

    const assets = reactive({
      assetCategoryId: "",
      assetDescription: "",
      branchCode: "",
      locationId: "",
      currentAssetUser: "",
      acquisitionDate: "2020-02-01",
      acquisitionCost: "",
      acquisitionDetails: "",
      initialDepreciationMonth: "2020-02-01",
      depreciationMonths: "2020-02-01",
      lastDepreciationMonth: "2020-02-01",
      createdBy: "danny daniel",
      InventoryNumber: "BOAU00001",
    });

    // methods
    const saveAsset = async () => {
      console.log("Assets", assets);
      // await useAssets.createAsset(assets);
    };
    return {
      model: ref("2019-02-22 21:02"),
      AddAssets: ref(false),
      AddAssetsCategory: ref(false),
      AddBranch: ref(false),
      AddLocation: ref(false),
      saveAsset,
      assets,
      category,
      branch,
      newlocation,

      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      location: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

      useAssets,
    };
  },
});
</script>
<style scoped>
.bg-primary {
  background: #459755 !important;
}
.assets-wrapper {
  margin-top: 10px;
  margin: 5px;
}
.q-field--square .q-field__control {
  border-radius: 0 !important;
  height: 45px;
}
</style>
