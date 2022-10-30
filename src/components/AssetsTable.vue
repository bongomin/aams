<template>
  <div id="q-app">
    <div class="q-pa-xs">

      <q-table
        class="my-sticky-header-table"
        title="All Assets"
        :rows="rows"
        :columns="columns"
        row-key="name"
        flat
        bordered
      ></q-table>
    </div>
  </div>
</template>
<script setup>
// store registration
import { useAssetstore } from "stores/assets";

const useAssets = useAssetstore();
const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "left",
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "assetId",
    required: true,
    label: "Asset ID",
    align: "left",
    field: (row) => row.assetId,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "assetCategoryId",
    required: true,
    label: "Asset Category ID",
    align: "left",
    field: (row) => row.assetCategoryId,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "assetDescription",
    required: true,
    label: "Asset Decription",
    align: "left",
    field: (row) => row.assetDescription,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
    {
    name: "branchCode",
    required: true,
    label: "Branch Code.",
    align: "left",
    field: (row) => row.branchCode,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
   {
    name: "locationId",
    required: true,
    label: "location Id",
    align: "left",
    field: (row) => row.locationId,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "currenctAssetUser",
    required: true,
    label: "Currenct AssetUser",
    align: "left",
    field: (row) => row.currenctAssetUser,
    format: (val) => `${val}`,
        sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
     {
    name: "acquisitionDate",
    required: true,
    label: "Acquisition Date",
    align: "left",
    field: (row) => row.acquisitionDate,
    format: (val) => `${val}`,
        sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
    {
    name: "acquisitionCost",
    required: true,
    label: "Acquisition Cost",
    align: "left",
    field: (row) => row.acquisitionCost,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "acquisitionDetails",
    required: true,
    label: "Acquisition Details",
    align: "left",
    field: (row) => row.acquisitionDetails,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "initialDepreciationMonth",
    required: true,
    label: "Initial Depreciation Month",
    align: "left",
    field: (row) => row.initialDepreciationMonth,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "depreciationMonths",
    required: true,
    label: "Depreciation Months",
    align: "left",
    field: (row) => row.depreciationMonths,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "lastDepreciationMonth",
    required: true,
    label: "Last Depreciation Month",
    align: "left",
    field: (row) => row.lastDepreciationMonth,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "isDisposed",
    required: true,
    label: "Is Disposed",
    align: "left",
    field: (row) => row.isDisposed,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "disposalAmount",
    required: true,
    label: "Disposal Amount",
    align: "left",
    field: (row) => row.disposalAmount,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "disposalDate",
    required: true,
    label: "Disposal Date",
    align: "left",
    field: (row) => row.disposalDate,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "disposalDetails",
    required: true,
    label: "Disposal Details",
    align: "left",
    field: (row) => row.disposalDetails,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "isWrittenOff",
    required: true,
    label: "Is Written Off",
    align: "left",
    field: (row) => row.isWrittenOff,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "writeOffAmount",
    required: true,
    label: "Write Off Amount",
    align: "left",
    field: (row) => row.writeOffAmount,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "writeOffDate",
    required: true,
    label: "Write Off Date",
    align: "left",
    field: (row) => row.writeOffDate,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "writeOffDetails",
    required: true,
    label: "Write Off Details",
    align: "left",
    field: (row) => row.writeOffDetails,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "isVerified",
    required: true,
    label: "Is Verified",
    align: "left",
    field: (row) => row.isVerified,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "verifiedBy",
    required: true,
    label: "Verified By",
    align: "left",
    field: (row) => row.verifiedBy,
    format: (val) => `${val}`,
    sortable: true,
  },
    {
    name: "isDeleted",
    required: true,
    label: "Is Deleted",
    align: "left",
    field: (row) => row.isDeleted,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "createdOn",
    required: true,
    label: "Created On",
    align: "left",
    field: (row) => row.createdOn,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "lastModifiedOn",
    required: true,
    label: "last Modified On",
    align: "left",
    field: (row) => row.lastModifiedOn,
    format: (val) => `${val}`,
    sortable: true,
  },
   {
    name: "lastModifiedBy",
    required: true,
    label: "last Modified By",
    align: "left",
    field: (row) => row.lastModifiedBy,
    format: (val) => `${val}`,
    sortable: true,
  },
];

const rows = [
  ...useAssets.allAssets
];
</script>
<style scoped>
.my-sticky-header-table {
  /* height or max-height is important */
  height: 700px;
  /* this is when the loading indicator appears */
}
.my-sticky-header-table .q-table__top,
.my-sticky-header-table .q-table__bottom,
.my-sticky-header-table thead tr:first-child th {
  /* bg color is important for th; just specify one */
  background-color: #c1f4cd;
}
.my-sticky-header-table thead tr th {
  position: sticky;
  z-index: 1;
}
.my-sticky-header-table thead tr:first-child th {
  top: 0;
}
.my-sticky-header-table.q-table--loading thead tr:last-child th {
  /* height of all previous header rows */
  top: 48px;
}
</style>
