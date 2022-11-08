<template>
 <div id="q-app">
    <div class="table-wrapper1">
         <div class="table-wrapper">
      <div class="assets-header"> New Added Assets</div>
     <table class="fl-table">
        <thead>
          <tr>
            <th>assetId</th>
            <th>assetCategoryId</th>
            <th>inventoryNumber</th>
            <th>assetDescription</th>
            <th>branchCode</th>
            <th>locationId</th>
            <th>currenctAssetUser</th>
            <th>acquisitionDate</th>
            <th>acquisitionCost</th>
            <th>acquisitionDetails</th>
            <th>initialDepreciationMonth</th>
            <th>depreciationMonths</th>
            <th>lastDepreciationMonth</th>
            <th>isDisposed</th>
            <th>branchCode</th>
            <th>locationId</th>
            <th>currenctAssetUser</th>
            <th>acquisitionDate</th>
            <th>acquisitionCost</th>
            <th>acquisitionDetails</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in useAssets.allAssets" :key="index">
            <td>{{ item.assetId }}</td>
            <td>{{ item.assetCategoryId }}</td>
            <td>{{ item.inventoryNumber }}</td>
            <td>{{ item.assetDescription }}</td>
            <td>{{ item.branchCode }}</td>
            <td>{{ item.locationId }}</td>
            <td>{{ item.currenctAssetUser }}</td>
            <td>{{ item.acquisitionDate }}</td>
            <td>{{ item.acquisitionCost }}</td>
            <td>{{ item.acquisitionDetails }}</td>
            <td>{{ item.initialDepreciationMonth }}</td>
            <td>{{ item.depreciationMonths }}</td>
            <td>{{ item.lastDepreciationMonth }}</td>
            <td>{{ item.isDisposed }}</td>
            <td>{{ item.branchCode }}</td>
            <td>{{ item.locationId }}</td>
            <td>{{ item.currenctAssetUser }}</td>
            <td>{{ item.acquisitionDate }}</td>
            <td>{{ item.acquisitionCost }}</td>
            <td>{{ item.acquisitionDetails }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
   
  </div>
</template>
<script setup>
import AssetsTable from "src/components/AssetsTable.vue";

// store registration
import { useAssetstore } from "stores/assets";
const useAssets = useAssetstore();

</script>
<style scoped>
.table-wrapper1 {
    padding: 5px;
    border-radius: 20px;
    background-color: #fcfcfc;
    height: 440px;
}
.assets-header {
   padding: 10px;
  font-size: 19px;
  font-weight: bold;
}
/* Table Styles */

.table-wrapper {
  margin: 10px 70px 70px 10px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  width: 100%;
  width: 97.5%;
  overflow-Y: scroll;
     color: black;
}

.fl-table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
}

.fl-table td,
.fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
}

.fl-table thead th {
  color: #ffffff;
  background: #459755;
}

.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #459755;
}

.fl-table tr:nth-child(even) {
  background: #f8f8f8;
}

/* Responsive */

@media (max-width: 767px) {
  .fl-table {
    display: block;
    width: 100%;
  }
  .table-wrapper:before {
    content: "Scroll horizontally >";
    display: block;
    text-align: right;
    font-size: 11px;
   color: black;    padding: 0 0 10px;
  }
  .fl-table thead,
  .fl-table tbody,
  .fl-table thead th {
    display: block;
  }
  .fl-table thead th:last-child {
    border-bottom: none;
  }
  .fl-table thead {
    float: left;
  }
  .fl-table tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
  }
  .fl-table td,
  .fl-table th {
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
    color: black;
  }
  .fl-table thead th {
    text-align: left;
    border-bottom: 1px solid #f7f7f9;
  }
  .fl-table tbody tr {
    display: table-cell;
  }
  .fl-table tbody tr:nth-child(odd) {
    background: none;
  }
  .fl-table tr:nth-child(even) {
    background: transparent;
  }
  .fl-table tr td:nth-child(odd) {
    background: #f8f8f8;
    border-right: 1px solid #e6e4e4;
  }
  .fl-table tr td:nth-child(even) {
    border-right: 1px solid #e6e4e4;
  }
  .fl-table tbody td {
    display: block;
    text-align: center;
  }
}
</style>