const axios = require("axios");

axios.defaults.headers.common["Content-Type"] = "application/json";

const request = (endpoint, requestObj) => {

    axios.defaults.headers.common["Authorization"] = `Basic ${requestObj.key}`;

    return axios({
        url: `https://api.paymongo.com/${process.env.PAYMONGO_VERSION}/${endpoint}`,
        method: requestObj.method || "POST",
        data: { data: { attributes: requestObj.body || {} } }
    });
}

  class PaymentIntent {

    api_endpoint = `payment_intents`;

    create(attributes) {
        return request(this.api_endpoint, {
            body: attributes,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    retrieve(intentId) {
        return request(`${this.api_endpoint}/${intentId}`, {
            method: "GET",
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }

    attachPaymentMethod(intentId, attributes) {
        return request(`${this.api_endpoint}/${intentId}/attach`, {
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
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }

    retrieve(methodId) {
        return request(`${this.api_endpoint}/${methodId}`, {
            method: "GET",
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
            key: process.env.PAYMONGO_PUBLIC_KEY,
        });
    }

    list(params) {
        return request(`${this.api_endpoint}?${params}`, {
            method: "GET",
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
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    retrieve(id) {
        return request(`${this.api_endpoint}/${id}`, {
            method: "GET",
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    disable(id) {
        return request(`${this.api_endpoint}/${id}/disable`, {
            key: process.env.PAYMONGO_SECRET_KEY
        })
    }

    enable(id) {
        return request(`${this.api_endpoint}/${id}/enable`, {
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