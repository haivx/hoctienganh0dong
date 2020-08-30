import path from "path";

async function checkApikey(req, res, next) {
    const token = req.headers["api-key"];
    if (token) {
        if (token === process.env.API_KEY) {
            next();
        } else {
            res.send({
                success: false,
                message: "Wrong API Key",
            });
        }
    } else {
        res.send({
            success: false,
            message: "Missing API key",
        });
    }
}

export default {
    checkApikey
};
