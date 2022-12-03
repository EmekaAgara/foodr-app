import React from 'react';
import {WebView} from 'react-native-webview';

const RemitaPaymentGateway = () =>{

const remitaCheckout = `<!DOCTYPE html>
<html lang="en">
<header><meta name="viewport" content="initial-scale=1.0" /></header>
<body onload="makePayment()">
<script>
function makePayment() 
{
var rrr = '220008254064'; //rrr 
var paymentEngine = RmPaymentEngine.init({
key:'QzAwMDAzNTQ0MDh8Nzg2Mzc0MTY1MnxhNjBlOTRjNTk0MjU3OTJlYjA1YjQzNGY0YzAyMTA1YWFhNzRiZGM2MzViZTIwMzY2ZTAxMzQyZDNhYWZiNGUxMDVjNTRkMDNmMjBkZjY4ZGYzYzdmMmY4ODU5YzNiOTk2OGI3MmFiODQ3NTUyNTYyNmVhYTQ2NDFjYmUwNTE5NA==',
processRrr: true,
extendedData:{customFields: [{name:"rrr", value:rrr}]},
onSuccess: function (response) {
console.log(JSON.stringify(response));
},
onError: function (response) {
console.log(JSON.stringify(response));
},
onClose: function () {
console.log("closed");
},
});
paymentEngine.openIframe();
}
</script id="helper" data-name="helper">
<script type="text/javascript" src= "https://remitademo.net/payment/v1/remita-pay-inline.bundle.js" \></script>
</body>
</html>`

return(<WebView
source={{ html: remitaCheckout }} 
javaScriptEnabled={true}
domStorageEnabled={true}
startInLoadingState={true}
/>)
}

export default RemitaPaymentGateway