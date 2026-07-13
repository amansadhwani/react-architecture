// data.js
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    userName: "johndoe",
    password: "JohnDoe@123",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    userName: "janesmith",
    password: "JaneSmith@123",
    role: "manager",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    userName: "bob",
    password: "Bob@123",
    role: "user",
  },
];

const tokens = []; // [{userId: number, refreshToken: string, expirationTime: number }]

module.exports = { users, tokens };
