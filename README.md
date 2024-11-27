# Plugins

Plugins offer a way to extend and integrate the core functionality of Medusa.

In most commerce solutions, you can extend the basic features but it often comes with the expense of having to build standalone web applications. Our architecture is built such that plugins run within the same process as the core eliminating the need for extra server capacity, infrastructure and maintenance. As a result, the plugins can use all other services as dependencies and access the database.

<h1>Usage</h1>
<p>Add the following in the medusa-config.js file. </p>

KLAVIYO_API_KEY : your_klaviyo_api_key
KLAVIYO_COMPANY_ID : your_klaviyo_company_id

<code>
  {
    resolve: "medusa-plugin-klaviyo2.0",
    options: {
      klaviyo_api_key: process.env.KLAVIYO_API_KEY,
      klaviyo_company_id: process.env.KLAVIYO_COMPANY_ID,
    },
  }
</code>


<h1>Usage of routes</h1>
Get all the lists
<code>
/store/klaviyo/fetchlists
</code>

Get all the profiles associated to list
<code>
/store/klaviyo/[listId]/fetchprofiles
</code>

Subscribe to list
<code>
/store/klaviyo/[listId]/subscribe
</code>

Unsubscribe to list
<code>
/store/klaviyo/[listId]/subscribe
</code>

Test the plugin
<code>
/store/klaviyo/test
</code>