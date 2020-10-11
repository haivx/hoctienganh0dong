import path from "path";

 async function checkApikey(req, res, next) {
     const token = req.headers["api-key"];
     console.log('checkApikey', token)
    if (token) {
        if (token === process.env.API_KEY) {
            next();
        } else {
            res.send({
                code: -1,
                success: false,
                message: "Wrong API Key",
            });
        }
    } else {
        res.send({
            code: -1,
            success: false,
            message: "Missing API key",
        });
    }
}

module.exports = checkApikey;
