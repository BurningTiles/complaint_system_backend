const dotenv=require('dotenv');
dotenv.config();

module.exports = { 
	ENV: process.env.ENV || "TEST",
	DB_URL: process.env.DB_URL || "URL",
	PORT: process.env.PORT || 3000,
};