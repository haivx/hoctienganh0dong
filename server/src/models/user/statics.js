import { Op } from "sequelize";
import bcrypt from "bcrypt";

export default function (User, models) {
    User.login = async function (email, password) {
        let user = await User.findOne({ where: { email: email || "" } });
        if (!user)
            return {
                success: false,
                message: "Email has not registered yet",
            };
        if (bcrypt.compareSync(password, user.encryptedPassword || "")) {
            const loginDetail = await user.getLoginDetail();
            return { success: true, ...loginDetail };
        } else {
            return {
                success: false,
                message: "Incorect email or password",
            };
        }
    };
}
