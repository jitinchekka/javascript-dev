// facebook-nodejs-business-sdk
// reads campaign name data using API
const adsSdk = require("facebook-nodejs-business-sdk");
const accessToken = "<VALID_ACCESS_TOKEN>";
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount("act_<AD_ACCOUNT_ID>");
account
  .read(AdAccount.Fields.name)
  .then((Campaign) => {
    console.log(Campaign);
  })
  .catch((error) => {});
