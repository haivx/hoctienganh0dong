import React from "react";
import Layout from "Components/layout";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";

import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Add from "@material-ui/icons/Add";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import Search from "@material-ui/icons/Search";
import Remove from "@material-ui/icons/Remove";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const AdminPage = () => {
    const [state, setState] = React.useState({
        columns: [
            { title: "Name", field: "name" },
            { title: "Address", field: "address" },
            { title: "email", field: "email", type: "email" },
            {
                title: "Role",
                field: "role",
                lookup: { 1: "Admin", 2: "SuperAmind", 3: "Member" },
            },
        ],
        data: [
            { name: "Nguyen Hoang", address: "121 Nguyen Khang, Cau Giay, HN", email: "Barang@mail.com", role: 1 },
            {
                name: "Le Van A",
                surname: "55 Nguyen Phong Sac, Cau Giay, Hn",
                email: "aLevan@gmail.com",
                role: 3,
            },
            {
                name: "Xuan Hai",
                surname: "1 Ha Dong, Ha Noi",
                email: "haixuan@gmail.com",
                role: 2,
            },
        ],
    });
    return (
        <Layout>
            <MaterialTable
                icons={{
                    Add: Add,
                    Edit: Edit,
                    Delete: DeleteOutline,
                    Check: Check,
                    Clear: Clear,
                    Search: Search,
                    ThirdStateCheck: Remove,
                    FirstPage: FirstPage,
                    LastPage: LastPage,
                    NextPage: ChevronRight,
                    PreviousPage: ChevronLeft,
                }}
                title="Users's List"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </Layout>
    );
};

export default AdminPage;
