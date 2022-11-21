import { request, methods } from "./http-common";

export async function listAssets() {
  return request(`/Assets/GetAssets`, methods.GET);
}

export async function listAssetCategories() {
  return request(`/Assets/GetAssetCategories`, methods.GET);
}

export async function bankBranches() {
  return request(`/Assets/GetBranches`, methods.GET);
}

export async function assetLocations() {
  return request(`/Assets/GetLocations`, methods.GET);
}

export async function postAssets(assets) {
  return request(`/Assets/AddNewAsset`, methods.POST, assets);
}

export async function postLocation(location) {
  return request(`/System/AddLocation`, methods.POST, location);
}

export async function postBranch(branch) {
  return request(`/System/AddBranch`, methods.POST, branch);
}

export async function updateAsset(assetId) {
  return request(`/UpdateAsset/${assetId}`, methods.PATCH, careerGoal);
}

export async function deleteAsset(assetId) {
  return request(`/assets/${assetId}`, methods.DELETE);
}
