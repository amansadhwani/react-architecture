const router = require("express").Router();

const { isAuthenticated } = require("../middlewares/auth");

const usersController = require("../controllers/users");

/**
 * @openapi
 * /users/list:
 *   get:
 *     summary: Get the list of all users
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/list", isAuthenticated, usersController.getUsersList);

/**
 * @openapi
 * /users/me:
 *   get:
 *     summary: Get the currently authenticated user
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: The authenticated user
 *       404:
 *         description: User not found
 */
router.get("/me", isAuthenticated, usersController.getAuthenticatedUser);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested user
 *       404:
 *         description: User not found
 */
router.get("/:id", isAuthenticated, usersController.getUserById);

module.exports = router;
