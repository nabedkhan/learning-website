import React from 'react';
import logo from '../../src/logo.svg';
import './Header.css'
import { Button, Badge, Dropdown } from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Header = (props) => {
    const carts = props.carts;
    console.log(carts);

    const totalPrice = carts.reduce((prevPrice, currPrice) => prevPrice + currPrice.price, 0);

    return (
        <div className="header bg-light">
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <img src={logo} className='img-fluid p-2' alt="Logo" />
                    </div>
                    <div className="col-md-6">
                        <Dropdown className='cart text-right p-2'>
                            <Dropdown.Toggle id="dropdown-basic">
                                <AddShoppingCartIcon className='icon'></AddShoppingCartIcon> <Badge variant="light">{carts.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Courses: {carts.length}</Dropdown.Item>
                                <Dropdown.Item>Total Price: ${totalPrice.toFixed(2)}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;