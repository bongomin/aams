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
              @click="AddAssets = true"
              outline
              style="color: #459755"
              label="Add New Asset"
              icon="add"
            />
            <q-btn
              class="q-mr-md"
              @click="AddAssetsCategory = true"
              outline
              style="color: #459755"
              label="Add Asset category"
              icon="category"
            />
          </div>
        </div>
      </div>
      <!-- Assets Table -->
      <!-- {{ useAssets.assetLocations }} -->
      <AssetsTable></AssetsTable>
      <!-- Add assets Dialoque -->
      <q-dialog
        v-model="AddAssets"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card
          style="max-width: 1500px; width: 1000px; height: 700px"
          class="bg-primary text-white"
        >
          <q-bar style="height: 50px">
            <q-icon style="font-size: 30px" name="account_balance" />

            <div>Add Assets</div>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <!-- <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section> -->

          <q-card-section class="q-pt-none q-mt-md">
            <div class="row q-col-gutter-xs">
              <!-- <q-input
                class="col-3 q-pa-xs"
                label="Asset Category Id"
                v-model="assets.assetCategoryId"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <q-select
                class="col-3 q-pa-xs"
                outlined
                v-model="assets.assetCategoryId"
                :options="useAssets.assetCategories.map(foo=>foo.assetCategoryId)"
                label="Asset Category"
                bg-color="white"
                square
                dense
              />
                <q-input
                class="col-3 q-pa-xs"
                v-model="assets.InventoryNumber"
                label="Asset Tag"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                v-model="assets.assetDescription"
                label="Asset Description"
                bg-color="white"
                square
                dense
              >
              </q-input>
              {{ bankBranches }}
              <!-- <q-input
                class="col-3 q-pa-xs"
                v-model="assets.branchCode"
                label="Branch"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <!-- {{useAssets}} -->
              <q-select
                class="col-3 q-pa-xs"
                outlined
                v-model="assets.branchCode"
                :options="useAssets.bankBranches.map(foo=>foo.branchCode)"
                label="Branch"
                bg-color="white"
                square
                dense
              />
              <!-- <QDatetime v-model="model" type="datetime" /> -->
            </div>
            <div class="row q-col-gutter-xs">
              <!-- <q-input
                class="col-3 q-pa-xs"
                label="Location"
                v-model="assets.locationId"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <q-select
                class="col-3 q-pa-xs"
                outlined
                v-model="assets.locationId"
                :options="useAssets.assetLocations.map(foo=>foo.locationId)"
                label="Location"
                bg-color="white"
                square
                dense
              />
              <q-input
                style="height: 56px"
                label="Current User"
                class="col-3 q-pa-xs"
                v-model="assets.currentAssetUser"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <!-- <q-input
                class="col-3 q-pa-xs"
                label="Acquisition Date"
                v-model="assets.acquisitionDate"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <q-input
                label="Acquisition Details"
                class="col-3 q-pa-xs"
                v-model="assets.acquisitionDetails"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                autogrow
                label="Acquisition Cost"
                v-model="assets.acquisitionCost"
                bg-color="white"
                square
                dense
              >
              </q-input>
            </div>
            <div class="row q-col-gutter-xs">
              <q-input
                class="col-3 q-pa-xs"
                bg-color="white"
                label="Acquisition Date"
                square
                v-model="assets.acquisitionDate"
                mask="####-##-##"
                :rules="['####-##-##']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="assets.acquisitionDate">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          ></q-btn>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <!-- <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" /> -->

              <!-- <q-input
                class="col-3 q-pa-xs"
                label="Initial Depreciation Month"
                v-model="assets.initialDepreciationMonth"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <q-input
                class="col-3 q-pa-xs"
                bg-color="white"
                label="Initial Depreciation Month"
                square
                v-model="assets.initialDepreciationMonth"
                mask="####-##-##"
                :rules="['####-##-##']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="assets.initialDepreciationMonth">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          ></q-btn>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                autogrow
                label="Depriciation Month"
                v-model="assets.depreciationMonths"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-3 q-pa-xs"
                disabled
                bg-color="white"
                label="Last Depriciation Month"
                square
                v-model="assets.lastDepreciationMonth"
                mask="####-##-##"
                :rules="['####-##-##']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="assets.lastDepreciationMonth">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          ></q-btn>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
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
          <NewAssetsTable />
        </q-card>
      </q-dialog>

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
              <!-- <q-input
                class="col-3 q-pa-xs"
                label="Category Id"
                v-model="category.assetCategoryId"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
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
            </div>
            <div class="row q-col-gutter-xs">
              
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
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import { ref, reactive, onMounted,computed } from "vue";
import monthpicker from "quasar-monthpicker";

import AssetsTable from "src/components/AssetsTable.vue";
import AssetCategoriesTable from "src/components/AssetCategoriesTable.vue";
import NewAssetsTable from "src/components/NewAssetsTable.vue";
import BranchesTable from "src/components/BranchesTable.vue";
import LocationsTable from "src/components/LocationsTable.vue";

// store registration
import { useAssetstore } from "stores/assets";
const useAssets = useAssetstore();

    const category  = reactive({
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
      depreciationMonths: "",
      lastDepreciationMonth: "2020-02-01",
      createdBy: "Ivan",
      InventoryNumber: "",
    });

    const  AddAssets= ref(false)
    const  AddAssetsCategory= ref(false)
    const  AddBranch= ref(false)
    const   AddLocation= ref(false)

    // methods
    onMounted(() => {
    useAssets.fetchAsset();
    useAssets.assetCategory();
    useAssets.listBankBranches();
    useAssets.fetchAssetLocation();
    });

    const lastDepriciationMonth = computed(() => {
  return `${assets.initialDepreciationMonth}, ${assets.depreciationMonths}` 
})

    const saveAsset = async () => {
      await useAssets.createAsset(assets);
    };
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
