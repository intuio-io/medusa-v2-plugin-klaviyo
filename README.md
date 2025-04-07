# 📨 Medusa Plugin Klaviyo for Medusa V2

Medusa Plugin Klaviyo makes it simple to connect your Medusa store directly to Klaviyo—no need for Segment or complex setups. Sync customer and order data seamlessly to power better email campaigns, automation, and audience segmentation.

Built for modern e-commerce teams who want powerful marketing without the extra steps.


## ✨ Features

- ✅ Automatically send customer data to Klaviyo from the newsletter signup
- ✅ Event-based triggers for customer signup to send customer data to Klaviyo
- ✅ Extendable architecture for custom event mapping


## Installation
```javascript
npm i @intuio/medusa-plugin-klaviyo
```

## Usage

Add the following in the `.env` file:

```javascript
# The Klaviyo API Key and comapny ID should be added to .env file

KLAVIYO_API_KEY : your_klaviyo_api_key
KLAVIYO_COMPANY_ID : your_klaviyo_company_id
```

Add the following in the `medusa-config.js` file:

```javascript
plugins: [
    {
      resolve: "./../node_modules/@intuio/medusa-plugin-klaviyo/src",
    },
  ],
```
**NOTE: Medusa v2 recently announced support for plugins. This approach allowed usage of plugins possible in medusa v2 since the time v2 didn't support plugins.**

## 📘 API Endpoints
The lists will need to be planned in Kalviyo and List IDs will need to be kept at hand. Developers can request these list ID urls from Marketing team ( the last slug in the URL being the list ID ). There can be unique lists per marketing effort - Newsletter list, New Customer list etc.

| Method | Endpoint                                         | Description                                                  |
|--------|--------------------------------------------------|--------------------------------------------------------------|
| GET    | `/store/klaviyo/fetchlists`                     | Fetches all Klaviyo lists in your account.                  |
| GET    | `/store/klaviyo/[listId]/fetchprofiles`         | Retrieves all profiles (contacts) in a specific list.       |
| POST   | `/store/klaviyo/[listId]/subscribe`             | Subscribes a profile to the specified list.                 |
| POST   | `/store/klaviyo/[listId]/unsubscribe`           | Unsubscribes a profile from the specified list.             |
| GET    | `/store/klaviyo/test`                           | Tests if the plugin is properly configured and functional.  |


## 🧪 Roadmap
 - Ability to create a custom list
 - Support for product view and cart events
 - Support Order data and Order Creation event
 - Customizable customer properties mapping
 - Sync product catalog to Klaviyo

Want a feature? Open an [issue](https://github.com/intuio-io/medusa-v2-plugin-klaviyo/issues)!

## Support for Medusa V1
This plugin is supported by Medusa v2 only. If you are looking for support for medusa v2 then please refer to this link : [Medusa V1 Klaviyo Plugin](https://github.com/intuio-io/medusa-plugin-klaviyo)


```javascript
// NPM Installation command for Medusa V1 Klaviyo Plugin

npm i @intuio/medusa-plugin-klaviyo@medusa-v1
```

## 💬 Let's Connect
We’re building this in public at Intuio Software Labs — a premium product studio focused on ecommerce and open-source innovation.
☕ Like the plugin? Buy us a coffee or support our efforts : [Donate here](https://buymeacoffee.com/intuio)

### 👥 Collaborate With Us
We’re looking for contributors, collaborators, and ecommerce founders to partner with. If you’re doing something cool with Medusa or want to build the next big thing, reach out!

📩 info@intuio.io / sales@intuio.io

🌐 https://intuio.io

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

Check out the contributing guide to get started.

## 📜 License
MIT © Intuio Software Labs

## 📈 Loved By the Community?
If you’ve used this plugin and found it helpful, leave us a ⭐ on GitHub and share it with others using Medusa.
