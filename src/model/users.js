if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

// Request New User
function newUser() {
	const sql = `
		INSERT INTO users (ts)
		VALUES (extract(epoch from now()))
		RETURNING id;
	`;
	return db.one(sql);
}

module.exports = {
	newUser
}
