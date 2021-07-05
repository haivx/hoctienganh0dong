module.exports = {
    development: {
        username: "xuanhai",
        password: "nobodyknow",
        database: "hoctienganh0dong_dev",
        host: "postgres",
        dialect: "postgres",
        dialectOptions: {
            ssl: false,
            dateStrings: true,
        },
    },
    production: process.env.DATABASE_URL,
};
