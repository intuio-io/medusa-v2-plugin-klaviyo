
# Plugins

Plugins offer a way to extend and integrate the core functionality of Medusa.

In the world of modern e-commerce, seamless integrations are key to delivering superior customer experiences. Recognizing this, **Medusa** provides a versatile framework for building powerful online stores. However, when it came to connecting **Klaviyo**—a leading email marketing and subscription management platform—Medusa suggested using a detour through **Segment**, adding unnecessary complexity for users.

This is where the **Medusa Plugin for Klaviyo** comes into play. Designed to eliminate the need for Segment, this plugin simplifies the process of configuring and using Klaviyo, making your subscription and marketing automation efforts faster, easier, and more efficient.

## Installation
```javascript
npm i @intuio/medusa-plugin-klaviyo
```

## Usage

```javascript
KLAVIYO_API_KEY : your_klaviyo_api_key
KLAVIYO_COMPANY_ID : your_klaviyo_company_id
```

```plaintext
For Medusa v2 please follow the below setup steps
```

Add the following in the `medusa-config.js` file:

```javascript
plugins: [
    {
      resolve: "./../node_modules/@intuio/medusa-plugin-klaviyo/src",
    },
  ],
```

## Usage of Routes

### Get All Lists
```plaintext
/store/klaviyo/fetchlists
```

### Get All Profiles Associated to a List
```plaintext
/store/klaviyo/[listId]/fetchprofiles
```

### Subscribe to a List
```plaintext
/store/klaviyo/[listId]/subscribe
```

### Unsubscribe from a List
```plaintext
/store/klaviyo/[listId]/unsubscribe
```

### Test the Plugin
```plaintext
/store/klaviyo/test
```

This plugin is supported by Medusa v2 only. If you are looking for support for medusa v2 then please refer to the v1 version of the plugin. 

```javascript
npm i @intuio/medusa-plugin-klaviyo@medusa-v1
```

**NOTE: Medusa v2 currently does not support plugins. We have created a way in which we can make usage of plugins possible in medusa v2.**