const permissions = {
  admin: [
    "dashboard.read",
    "users.read",
    "users.create",
    "users.update",
    "users.delete",
    "system.read",
  ],

  manager: ["dashboard.read", "users.read", "system.read"],

  user: ["dashboard.read", "users.read"],
};

module.exports = permissions;
