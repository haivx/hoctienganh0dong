module.exports = {
    development: {
        username: "xuanhai",
        password: "nobodyknow",
        database: "hoctienganh0dong_development",
        host: "127.0.0.1",
        dialect: "postgres",
        dialectOptions: {
            ssl: false,
            dateStrings: true,
        },
    },
    production: process.env.DATABASE_URL,
};
