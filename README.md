
# Plugins

Plugins offer a way to extend and integrate the core functionality of Medusa.

In the world of modern e-commerce, seamless integrations are key to delivering superior customer experiences. Recognizing this, **Medusa** provides a versatile framework for building powerful online stores. However, when it came to connecting **Klaviyo**—a leading email marketing and subscription management platform—Medusa suggested using a detour through **Segment**, adding unnecessary complexity for users.

This is where the **Medusa Plugin for Klaviyo** comes into play. Designed to eliminate the need for Segment, this plugin simplifies the process of configuring and using Klaviyo, making your subscription and marketing automation efforts faster, easier, and more efficient.

## Usage


```javascript
KLAVIYO_API_KEY : your_klaviyo_api_key
KLAVIYO_COMPANY_ID : your_klaviyo_company_id
```

```plaintext
For Medusa v2 please follow the below setup steps
NOTE: Medusa v2 currently does not support plugins. We have created a way in which we can make usage of plugins possible in medusa v2.
```

Add the following in the `medusa-config.js` file:

```javascript
plugins: [
    {
      resolve: "./../node_modules/medusa-v2-plugin-klaviyo/src",
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

If you are uding v1 of medusa please refer to the below link as this setup is only supported for medusa v2
https://www.npmjs.com/package/medusa-plugin-klaviyo