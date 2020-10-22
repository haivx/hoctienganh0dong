import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default function (User, models) {
    User.prototype.asJson = async function () {
        let user = this.toJSON();
        user = {
            ...user,
            customer: (
                await this.getCustomer({
                    attributes: [
                        "id",
                        "card_brand",
                    ],
                })
            ).toJSON(),
            avatar: this.avatarUrl(),
        };
        return user;
    };

    User.prototype.getLoginDetail = async function () {
        const jwtToken = jwt.sign({ payload: this.id }, process.env.API_KEY, {
            expiresIn: "365d",
        });
        const user = await this.asJson();
        return { jwtToken, user };
    };
}
