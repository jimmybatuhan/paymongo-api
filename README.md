# Paymongo API Client

#### A lightweight client-side API Integration for [Paymongo API](https://www.paymongo.com).

## Installation

```bash
npm install paymongo-api-client
```

## Environment Variables
following variables have to be declared in your application environment ```.env```
```
PAYMONGO_VERSION=v1
PAYMONGO_PUBLIC_KEY=<ACCOUNT API PUBLIC KEY>
PAYMONGO_SECRET_KEY=<ACCOUNT SECRET KEY>
```

## Usage
#### Import the package in your project by.
```import paymongo from 'paymongo-api-client'```

## Payment Method
##### A ```PaymentMethod``` resource describes which payment method was used to fulfill a payment. It is used with a PaymentIntent to collect payments.

##### Creating a Payment Method
```paymongo.PaymentMethod.create(attributes)```

###### The ```attributes``` nedded to create a **Payment Method** are documented [here](https://developers.paymongo.com/reference#create-a-paymentmethod)

##### Retrieving a Payment Method
```paymongo.PaymentMethod.retrive(methodId)```

## Payment Intent
##### A ```PaymentIntent``` resource is used to track and handle different states of the payment until it succeeds. for a more detailed explanation on how Payment Intent works, you can refer to their official documentation [here](https://developers.paymongo.com/reference#the-payment-intent-object)

##### Creating a Payment Intent
```paymongo.PaymentIntent.create(attributes) ```
###### The ```attributes``` nedded to create a **Payment Intent** are documented [here](https://developers.paymongo.com/reference#create-a-paymentintent)

##### Retrieving a Payment Intent
```paymongo.PaymentIntent.retrive(intentId)```

##### Attaching a Payment Method to a Payment Intent
```paymongo.PaymentIntent.attachPaymentMethod(intentId, attributes)```
###### The ```attributes``` nedded to complete attaching a **Payment Method** to a **Payment Intent** are documented [here](https://developers.paymongo.com/reference#attach-to-paymentintent)

## Payment
##### A ```Payment``` resource is an attempt by your customer to send you money in exchange for your product. This is a reference to an amount that you are expecting to receive if a payment resource with paid status becomes a part of a payout. If the payment status is failed, you can determine the reason for failure.

##### Creating a Payment
```paymongo.Payment.create(attributes)```
###### The ```attributes``` nedded to create **Payment** are documented [here](https://developers.paymongo.com/reference#create-a-payment)

##### Retrieving a Payment
```paymongo.Payment.retrive(paymentId)```

##### Retrieving a list of Payments
```paymongo.Payment.list(params)```
###### The ```params``` nedded to get a list of **Payments** are documented [here](https://developers.paymongo.com/reference#list-all-payments)

## Source
##### A ```Source``` is a resource to generate your customer's payment instrument. This is normally used to generate check out URLs for e-wallet payments.

##### Creating a Source
```paymongo.Source.create(attributes)```
###### The ```attributes``` nedded to create **Source** are documented [here](https://developers.paymongo.com/reference#create-a-source)

##### Retrieving a Source
```paymongo.Source.retrive(sourceId)```

## Webhook
##### A ```Webhook``` resource primarily refers to a certain URL where we send events that are happening from your account.

##### Creating a Webhook
```paymongo.Webhook.create(attributes)```
###### The ```attributes``` nedded to create **Webhook** are documented [here](https://developers.paymongo.com/reference#create-a-webhook)

##### Retrieve a Webhook
```paymongo.Webhook.retrieve(webhookId)```

##### Retrieve a list of Webhooks
```paymongo.Webhook.list(attributes)```
###### The ```params``` nedded to get a list of **Webhooks** are documented [here](https://developers.paymongo.com/reference#list-all-webhooks)

##### Enable a Webhook
```paymongo.Webhook.enable(webhookId)```

##### Disable a Webhook
```paymongo.Webhook.disable(webhookid)```

##### Update a Webhook
```paymongo.Webhook.update(webhookid, atributes)```
###### The ```attributes``` nedded to update **Webhook** are documented [here](https://developers.paymongo.com/reference#update-a-webhook)
