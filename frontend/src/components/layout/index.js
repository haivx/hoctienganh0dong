import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="fixed text-white flex w-full">
                <div className="w-1/4 h-12 p-2 font-bold text-sm">Hotline: 04.7307.6699</div>
                <div className="w-3/4 h-12 flex justify-end p-2">
                    <Link className="mr-4" to="/login">Login</Link>
                    <a>Register</a>
                </div>
            </div>

            {children}
            <div className="footer">
                <div className="titlePage">
                    <p>
                        Câu lạc bộ ngoại ngữ vì cộng đồng là một tổ chức phi lợi nhuận hoạt động trong lĩnh vực phát
                        triển cộng đồng
                    </p>
                </div>

                <div className="copyright mt-4">
                    <p>Copyright 2017 COMMUNITY LANGUAGE CLUB | All Rights Reserved</p>
                </div>
            </div>
        </Fragment>
    );
};
export default Layout;
