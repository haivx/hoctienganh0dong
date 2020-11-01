import moment from "moment";
import Api from 'Utils/Api'

const jwtDecode = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

const refreshToken = (callback) => {
    const auth = JSON.parse(localStorage.getItem("auth")) || {};
    Api.post(
        "auth/refresh-token",
        {
            refreshToken: auth.refreshToken,
            email: auth.user.email,
        },
        (res, error) => {
            if (res.code === 0) {
                auth = { ...auth, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken };
                localStorage.setItem("auth", JSON.stringify(auth));
                setTimeout(() => callback(), 200);
            } else {
                // Refresh Token has been revoked, user must login again
                localStorage.removeItem("auth");
                window.location.href = "/login";
            }
        }
    );
};

export const jwt = ({ dispatch, getState }) => {
    return (next) => (action) => {
        const auth = JSON.parse(localStorage.getItem("auth")) || {};
        if (typeof action === "function") {
            if (auth) {
                const tokenDetail = jwtDecode(auth.jwt);
                if (!tokenDetail) return next(action);

                if (moment(tokenDetail.exp * 1000).diff(moment()) < 120000) {
                    // 2 minutes
                    dispatch({
                        type: "BEGIN_FETCHING",
                    });
                    refreshToken(() => {
                        dispatch({
                            type: "FINISH_FETCHING",
                        });
                        return next(action);
                    });
                } else {
                    return next(action);
                }
            }
        } else {
            return next(action);
        }
    };
};
