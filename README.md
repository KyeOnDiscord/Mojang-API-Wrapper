# Mojang-API

Mojang API Wrapper made in JavaScript. Everything is asynchronous and uses Promises.

![npm (scoped)](https://img.shields.io/npm/v/%40kye5000/mojang-api)
![npm](https://img.shields.io/npm/dt/%40kye5000%2Fmojang-api)

## Installation

```
npm install @kye5000/mojang-api
```

## Usage

```js
const mojang = require("@kye5000/mojang-api");

// Get UUID from username
mojang.GetUUIDFromUsername("JEB_").then((user) => {
  //Capitalization of name is fetched from Mojang API
  console.log(`${user.name}'s UUID is ${user.id}`);
});

// Get multiple UUIDs from usernames
mojang.GetMultipleUUIDFromUsername(["JEB_", "Notch"]).then((uuids) => {
  uuids.forEach((uuid) => {
    console.log(`${uuid.name}'s UUID is ${uuid.id}`);
  });
});

// Get user's profile from UUID (includes currently equipped skin and cape data)
mojang
  .GetProfileFromUUID("853c80ef3c3749fdaa49938b674adae6")
  .then((profile) => {
    console.log(JSON.stringify(profile));
  });

mojang.GetBlockedServers().then((resp) => {
  console.log(resp.length);
  console.log(resp);
});
```
