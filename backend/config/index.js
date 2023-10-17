const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || "9000";
const BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS || 10;

module.exports = {
    NODE_ENV,
    PORT,
    BCRYPT_ROUNDS
}
