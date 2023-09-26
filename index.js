class MojangAPI {
  static async GetBlockedServers() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(
      "https://sessionserver.mojang.com/blockedservers",
      requestOptions
    );
    return (await resp.text()).split("\n");
  }

  static async GetUUIDFromUsername(username) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(
      "https://api.mojang.com/users/profiles/minecraft/" + username,
      requestOptions
    );
    return await resp.json();
  }

  static async GetMultipleUUIDFromUsername(Usernames) {
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Usernames),
      redirect: "follow",
    };

    const resp = await fetch(
      "https://api.mojang.com/profiles/minecraft",
      requestOptions
    );
    return await resp.json();
  }

  static async GetProfileFromUUID(uuid) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const resp = await fetch(
      "https://sessionserver.mojang.com/session/minecraft/profile/" + uuid,
      requestOptions
    );
    const obj = await resp.json();
    if (obj.properties.length > 0 && obj.properties[0].name == "textures") {
      const textures = JSON.parse(
        Buffer.from(obj.properties[0].value, "base64").toString()
      );
      return {
        name: obj.name,
        id: obj.id,
        textures: textures,
        profileActions: obj.profileActions,
      };
    }
    return {
      name: obj.name,
      id: obj.id,
      textures: null,
      profileActions,
    };
  }
}

module.exports = MojangAPI;
