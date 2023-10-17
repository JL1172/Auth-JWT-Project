const db = require("../../data/db-config");

module.exports = {
    findAll,
    findByFilter,
    findById,
    add,
    findRoles
}

async function findAll() {
    const result = await db("users as u")
    .join("roles as r","u.role_id","r.role_id")
    .select("u.user_id","u.user_username","r.role_name");
    return result;
}

async function findByFilter(filter) {
    const result = await db("users as u")
    .join("roles as r","u.role_id","r.role_id")
    .select("u.user_id","u.user_username","u.user_password","r.role_name")
    .where(filter).first();
    return result; 
}

async function findById(id) {
    const result = await db("users as u")
    .join("roles as r","u.role_id","r.role_id")
    .select("u.user_id","u.user_username","r.role_name")
    .where("user_id",id).first();
    return result; 
}

async function findRoles() {
    return await db("roles");
}

async function add(newUser) {
    const {user_username,user_password} = newUser; 
    let createdUserId;
    await db.transaction(async trx => {
        let roleIdToUse;
        const [role] = await trx("roles").where("role_name",newUser.role_name);
        if (role) {
            roleIdToUse = role.role_id;
        } else {
            const [role_id] = await trx('roles').insert({role_name : newUser.role_name});
            roleIdToUse = role_id;
        }
        const [user_id] = await trx("users").insert({ user_username, user_password, role_id : roleIdToUse }); 
        createdUserId = user_id;
    })
    return await findById(createdUserId)
}