const axios = require("axios");

const paymongoAPI = (url, key, body) => {
    return axios.post(url, JSON.stringify({ data: { attributes: { body } } }), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authentication": `Basic ${key}`
        }
    }).catch((error) => {

        console.log(error.message);

        //Request has been made but no response recivied
        if(error.request){
            
        }
    });
}

const createIntent = (key, attributes) => {
    return paymongoAPI(`https://api.paymongo.com/v1/payment_intents`, key, attributes);
}
const attachPaymentMethodToIntent = (IntentId, key, attributes) => {
    return paymongoAPI(`https://api.paymongo.com/v1/payment_intents/${IntentId}/attach`, key, attributes);
}

const createdPaymentMethod = (key, attributes) => {
    return paymongoAPI(`https://api.paymongo.com/v1/payment_methods`, key, attributes);
}

const createSource = (key, attributes) => {
    return paymongoAPI(`https://api.paymongo.com/v1/sources`, key, attributes);
}

const paySource = (key, attributes) => {
    return paymongoAPI(`https://api.paymongo.com/v1/payments`, key, attributes);
}

module.exports.createIntent = createIntent;
module.exports.attachPaymentMethodToIntent = attachPaymentMethodToIntent;
module.exports.createdPaymentMethod = createdPaymentMethod;
module.exports.createSource = createSource;
module.exports.paySource = paySource;
