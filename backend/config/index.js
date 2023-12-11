const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || "7000";
const BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS || 16;

module.exports = {
    NODE_ENV,
    PORT,
    BCRYPT_ROUNDS
}
