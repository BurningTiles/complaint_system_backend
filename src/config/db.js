const mongoose = require("mongoose");
const config = require("./");

const init = async () => {
	try {
		await mongoose.connect(config.DB_URL);
		console.log("Connection to database is successful.");
	} catch (err) {
		console.error("Error in connecting database.");
		console.error(err);
		process.exit(2);
	}
};

module.exports = { init };
