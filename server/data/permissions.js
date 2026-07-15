const permissions = {
  admin: [
    "dashboard.read",
    "users.read",
    "users.create",
    "users.update",
    "users.delete",
    "system.read",
    "users2.read",
  ],

  manager: ["dashboard.read", "users.read", "system.read", "users2.read"],

  user: ["dashboard.read", "users.read", "users2.read"],
};

module.exports = permissions;
