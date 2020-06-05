const axios = require("axios");

axios.defaults.headers.common["Content-Type"] = "application/json";

const request = (endpoint, requestObj) => {

    axios.defaults.headers.common["Authorization"] = `Basic ${requestObj.key}`;

    return axios({
        url: `https://api.paymongo.com/${process.env.PAYMONGO_VERSION}/${endpoint}`,
        method: requestObj.method || "POST",
        data: { data: { attributes: requestObj.body } }
    }).catch(err => console.log({
        headers: err.response.headers,
        errors: err.response.data.errors
    }));
}

class PaymentIntent {

    api_endpoint = `payment_intents`;

    create(attributes) {
        return request(this.api_endpoint, {
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }

    retrieve(intentId, attributes) {
        return request(`${this.api_endpoint}/${intentId}`, {
            method: "GET",
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }

    attachPaymentMethod(intentId, attributes) {
        return request(`${this.api_endpoint}/${intentId}`, {
            body: attributes,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }
}

class PaymentMethod {

    api_endpoint = `payment_methods`;

    create(attributes) {
        return request(`${this.api_endpoint}`, {
            body: attributes,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    retrieve(methodId, attributes) {
        return request(`${this.api_endpoint}/${methodId}`, {
            method: "GET",
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY,
        });
    }
}

class Payments {

    api_endpoint = 'payments';

    create(attributes) {
        return request(`${this.api_endpoint}`, {
            body: attributes,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    retrieve(paymentId) {
        return request(`${this.api_endpoint}/${paymentId}`, {
            method: "GET",
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY,
        });
    }

    list(params) {
        return request(`${this.api_endpoint}?${parms}`, {
            method: "GET",
            body: null,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }
}

class Source {

    api_endpoint = "sources";

    create(attributes) {
        return request(`${this.api_endpoint}`, {
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }
    retrieve(sourceId) {
        return request(`${this.api_endpoint}/${sourceId}`, {
            method: "GET",
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }
}

class Webhook {

    api_endpoint = `webhooks`;

    create(id, events = 'source.chargeable') {
        return request(`${this.api_endpoint}`, {
            body: { id: id, events: events },
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    list() {
        return request(`${this.api_endpoint}`, {
            method: "GET",
            body: {},
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    retrieve(id) {
        return request(`${this.api_endpoint}/${id}`, {
            method: "GET",
            body: {},
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    disable(id) {
        return request(`${this.api_endpoint}/${id}/disable`, {
            body: {},
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    enable() {
        return request(`${this.api_endpoint}/${id}/enable`, {
            body: {},
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

}

class Paymongo {

    Webhook = new Webhook();

    PaymentIntent = new PaymentIntent();

    PaymentMethod = new PaymentMethod();

    Payments = new Payments();

    Source = new Source();
}

module.exports = new Paymongo();