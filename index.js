const axios = require("axios");
const PAYMENT_INTENTS = 'payment_intents';
const PAYMENT_METHODS = 'payment_methods';
const PAYMENTS = 'payments';
const SOURCES = 'sources';
const WEBHOOKS = 'webhooks';
const HTTP_GET = 'get';
const HTTP_POST = 'post';
const HTTP_PUT = 'put';

axios.defaults.headers.common["Content-Type"] = "application/json";

const request = (endpoint, requestObj) => {
    axios.defaults.headers.common["Authorization"] = `Basic ${requestObj.key}`;
    return axios({
        url: `https://api.paymongo.com/${process.env.PAYMONGO_VERSION}/${endpoint}`,
        method: requestObj.method || HTTP_POST,
        data: { data: { attributes: requestObj.body || {} } }
    });
}

class PaymentIntent {
    api_endpoint = PAYMENT_INTENTS;

    create(attributes) {
        return request(this.api_endpoint, {
            body: attributes,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    retrieve(intentId) {
        return request(`${this.api_endpoint}/${intentId}`, {
            method: HTTP_GET,
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
    api_endpoint = PAYMENT_METHODS;

    create(attributes) {
        return request(`${this.api_endpoint}`, {
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }

    retrieve(methodId) {
        return request(`${this.api_endpoint}/${methodId}`, {
            method: HTTP_GET,
            key: process.env.PAYMONGO_PUBLIC_KEY,
        });
    }
}

class Payments {
    api_endpoint = PAYMENTS;

    create(attributes) {
        return request(`${this.api_endpoint}`, {
            body: attributes,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    retrieve(paymentId) {
        return request(`${this.api_endpoint}/${paymentId}`, {
            method: HTTP_GET,
            key: process.env.PAYMONGO_PUBLIC_KEY,
        });
    }

    list(params) {
        return request(`${this.api_endpoint}?${params}`, {
            method: HTTP_GET,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }
}
class Source {
    api_endpoint = SOURCES;

    create(attributes) {
        return request(`${this.api_endpoint}`, {
            body: attributes,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }

    retrieve(sourceId) {
        return request(`${this.api_endpoint}/${sourceId}`, {
            method: HTTP_GET,
            key: process.env.PAYMONGO_PUBLIC_KEY
        });
    }
}

class Webhook {
    api_endpoint = WEBHOOKS;

    create(url, events = 'source.chargeable') {
        return request(`${this.api_endpoint}`, {
            body: { url: url, events: events },
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    list() {
        return request(`${this.api_endpoint}`, {
            method: HTTP_GET,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    retrieve(id) {
        return request(`${this.api_endpoint}/${id}`, {
            method: HTTP_GET,
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    disable(id) {
        return request(`${this.api_endpoint}/${id}/disable`, {
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    enable(id) {
        return request(`${this.api_endpoint}/${id}/enable`, {
            key: process.env.PAYMONGO_SECRET_KEY
        });
    }

    update(id, events) {
        return request(`${this.api_endpoint}/${id}`, {
            method: HTTP_PUT,
            body: { url: url, events: events },
            key: process.env.PAYMONGO_SECRET_KEY
        });
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
