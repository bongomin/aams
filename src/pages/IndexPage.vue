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
              color="primary"
              label="Add New Location"
              icon="location_on"
            />
            <q-btn
              class="q-mr-md"
              @click="AddAssets = true"
              outline
              color="primary"
              label="Add New Branch"
              icon="house_siding"
            />
            <q-btn
              class="q-mr-md"
              @click="AddAssets = true"
              outline
              color="primary"
              label="Add New Asset"
              icon="add"
            />
            <q-btn
              class="q-mr-md"
              @click="AddAssets = true"
              outline
              color="primary"
              label="Add Asset category"
              icon="category"
            />
          </div>
        </div>
      </div>
      <!-- Assets Table -->
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
              <q-input
                class="col-3 q-pa-xs"
                label="Asset Category Id"
                v-model="assets.assetCategoryId"
                bg-color="white"
                square
                dense
              >
              </q-input>
              <q-input
                class="col-6 q-pa-xs"
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
                v-model="model"
                :options="options"
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
                v-model="model"
                :options="location"
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
                label="Acquisition Details"
                class="col-3 q-pa-xs"
                v-model="assets.acquisitionDetails"
                bg-color="white"
                square
                dense
              >
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
              <!-- <q-input
                class="col-3 q-pa-xs"
                autogrow
                type="month"
                label="Depriciation Month"
                v-model="assets.depreciationMonths"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <q-input
                class="col-3 q-pa-xs"
                bg-color="white"
                label="Depriciation Month"
                square
                v-model="assets.depreciationMonths"
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
                      <q-date v-model="assets.depreciationMonths">
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
              <!-- <q-input
                class="col-3 q-pa-xs"
                autogrow
                label="Last Depriciation Month"
                v-model="assets.lastDepreciationMonth"
                bg-color="white"
                square
                dense
              >
              </q-input> -->
              <q-input
                class="col-3 q-pa-xs"
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
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref, reactive } from "vue";
import monthpicker from "quasar-monthpicker";

import AssetsTable from "src/components/AssetsTable.vue";

// store registration
import { useAssetstore } from "stores/assets";

export default defineComponent({
  name: "IndexPage",

  components: {
    AssetsTable,
    monthpicker,
  },

  setup() {
    const useAssets = useAssetstore();

    // onMount
    useAssets.fetchAsset();
    useAssets.assetCategory();
    useAssets.listBankBranches();
    useAssets.fetchAssetLocation();

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
      saveAsset,
      assets,
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      location: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

      useAssets,
    };
  },
});
</script>
<style scoped>
.assets-wrapper {
  margin-top: 10px;
  margin: 5px;
}
.q-field--square .q-field__control {
  border-radius: 0 !important;
  height: 45px;
}
</style>
