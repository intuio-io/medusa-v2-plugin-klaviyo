
# Plugins

Plugins offer a way to extend and integrate the core functionality of Medusa.

In most commerce solutions, you can extend the basic features, but it often comes at the expense of having to build standalone web applications. Our architecture is built such that plugins run within the same process as the core, eliminating the need for extra server capacity, infrastructure, and maintenance. As a result, the plugins can use all other services as dependencies and access the database.

## Usage

Add the following in the `medusa-config.js` file:

```javascript
KLAVIYO_API_KEY : your_klaviyo_api_key
KLAVIYO_COMPANY_ID : your_klaviyo_company_id
```

```javascript
{
  resolve: "medusa-plugin-klaviyo2.0",
  options: {
    klaviyo_api_key: process.env.KLAVIYO_API_KEY,
    klaviyo_company_id: process.env.KLAVIYO_COMPANY_ID,
  },
}
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
