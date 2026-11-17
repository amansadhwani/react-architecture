const router = require("express").Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");

/**
 * @openapi
 * /auth/sign-up:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, username, email, password]
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created and authenticated
 *       422:
 *         description: Missing fields or username/email already exists
 */
router.post(
  "/sign-up",
  authController.signUp,
  authMiddleware.generateAuthTokens,
);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Log in with username/email and password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authenticated successfully
 *       401:
 *         description: Invalid username or password
 *       422:
 *         description: Missing fields
 */
router.post("/login", authController.login, authMiddleware.generateAuthTokens);

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     summary: Log out the current user
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       204:
 *         description: Logged out successfully
 */
router.post("/logout", authMiddleware.isAuthenticated, authController.logout);

/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     summary: Refresh the access token using the refresh token cookie
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: New access token issued
 *       204:
 *         description: No refresh token present or refresh token invalid
 */
router.post("/refresh", authController.refreshAccessToken);

module.exports = router;
