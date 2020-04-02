import React, { Fragment } from "react";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="fixed text-white flex w-full">
                <div className="w-1/4 h-12 p-2 font-bold text-sm">Hotline: 04.7307.6699</div>
                <div className="w-3/4 h-12 flex justify-end p-2">
                    <a className='mr-2'>Login</a>
                    <a>Register</a>
                </div>
            </div>

            {children}
        </Fragment>
    );
};
export default Layout;
