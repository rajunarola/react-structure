import React from 'react'
import { Dropdown } from 'react-bootstrap';

export default function AdminHeader() {
    return (
        <div>
            <Dropdown className="custom_dropdown" id="custom_dropdown_header">
                <Dropdown.Toggle id="dropdown-basic" className="main_dropdown">
                    Toggle Menu
                </Dropdown.Toggle>
                <Dropdown.Menu id="custom_dropdown_header_menu">
                    <Dropdown.Item variant="primary">
                        Name
                    </Dropdown.Item>
                    <Dropdown.Item variant="primary">
                        LogOut
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
