import { notification } from "antd";
import { adminLogin, adminRegistering } from "./Services/Admin";
import { getAllManufacturers } from "./Services/TableService";

export function adminClientLogin(data, props) {
    console.log('props => ', props);

    adminLogin(data).then(res => {
        if (res.data.statusCode === 200) {
            notification.success({
                message: "Success",
                description: `${res.data.message}`
            });
            props.history.push('/admin-dashboard')
        } else if (res.data.statusCode === 204) {
            notification.error({
                message: "Error",
                description: `${res.data.message}`
            });
        }
    }).catch(err => {
        notification.error({
            message: "Error",
            description: 'Something went wrong. Please try again!'
        });
    });
}

export function adminRegister(data) {
    adminRegistering(data).then(res => {
        if (res.data.statusCode === 200) {
            notification.success({
                message: "Success",
                description: `${res.data.message}`
            });
            // props.history.push('/admin-dashboard')
        } else if (res.data.statusCode === 204) {
            notification.error({
                message: "Error",
                description: `${res.data.message}`
            });
        }
    }).catch(err => {
        notification.error({
            message: "Error",
            description: 'Something went wrong. Please try again!'
        });
    });
}