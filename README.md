# Paymongo API Client

A lightweight client-side API Integration for Paymongo.

## Installation

```bash
npm install paymongo-api-client
```
## Environment Variables
Must have the following variables declared in your application environment 

```php
#Paymongo version to use
PAYMONGO_VERSION

#Your account's Public Key
PAYMONGO_PUBLIC_KEY

#You account's Secret Key

PAYMONGO_SECRET_KEY

#Tells the package where this is test or live
PAYMONGO_ENV
```

## Usage
### Payment Intent

```python
import paymongo from 'paymongo-api-client'

paymongo.PaymentIntent.create(attributes) # create a payment intent 
paymongo.PaymentIntent.retrive(intentId, attributes) # retrieve a payment intent 
paymongo.PaymentIntent.attachPaymentMethod(intentId, attributes) # attach a payment method to a payment intent
```
### Payment Method

```python
import paymongo from 'paymongo-api-client'

paymongo.PaymentMethod.create(attributes) # create a payment method 
paymongo.PaymentMethod.retrive(methodId) # retrieve a payment method 
```
### Payment
```python
import paymongo from 'paymongo-api-client'

paymongo.Payment.create(attributes) # create a payment method 
paymongo.Payment.retrive(paymentId) # retrieve a payment method 
paymongo.Payment.list(params) # retrieve a payment method 
```
### Source

```python
import paymongo from 'paymongo-api-client'

paymongo.Source.create(attributes) # create a payment method 
paymongo.Source.retrive(sourceId) # retrieve a payment method 
```
### Webhook

```python
import paymongo from 'paymongo-api-client'

paymongo.Webhook.create(attributes) # create a payment method 
paymongo.Webhook.retrive(sourceId) # retrieve a payment method 
paymongo.Webhook.list(attributes) # create a payment method 
paymongo.Webhook.enable(sourceId) # retrieve a payment method 
paymongo.Webhook.disable(sourceId) # retrieve a payment method 
```
