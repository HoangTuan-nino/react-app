import React, { Component } from 'react'
import './phone.css'
import { ChildComp } from './ChildComp.js'

export class Phone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phonename: '',
            phoneprice: '',
            phones: [
                {
                    id: '1',
                    name: 'Realme 8',
                    price: '9900000',
                    subprice: '9.490.000',
                    discount: '5%',
                    image:
                        'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg',
                },
                {
                    id: '2',
                    name: 'Realme 7',
                    price: '8900000',
                    subprice: '9.490.000',
                    discount: '5%',
                    image:
                        'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg',
                },
                {
                    id: '3',
                    name: 'Realme 6',
                    price: '7900000',
                    subprice: '9.490.000',
                    discount: '5%',
                    image:
                        'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg',
                },
                {
                    id: '4',
                    name: 'Realme 5',
                    price: '6900000',
                    subprice: '9.490.000',
                    discount: '5%',
                    image:
                        'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg',
                },
                {
                    id: '5',
                    name: 'Realme 4',
                    price: '5900000',
                    subprice: '9.490.000',
                    discount: '5%',
                    image:
                        'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg',
                },
            ],
        }
    }
    showName = (item) => {
        this.setState({
            phonename: item.name,
            phoneprice: item.price,
        })
    }
    render() {
        const phones = this.state.phones
        return (
            <div className="container">
                <div className="header">
                    <span>12 Khuyến mãi hot nhất</span>
                    <br />
                    {this.state.phonename !== '' && (
                        <span>
                            {this.state.phonename} - {this.state.phoneprice}
                        </span>
                    )}
                </div>
                <div className="list-item">
                    {phones.map((item) => {
                        return (
                            <ChildComp
                                showName={this.showName}
                                item={item}
                                key={item.id}
                            />
                        )
                    })}

                    {/* Filter phone price below 7m */}

                    {/* {phones
                        .filter((phone) => phone.price < 7000000)
                        .map((filterPhone) => {
                            return (
                                <ChildComp
                                    showName={this.showName}
                                    item={filterPhone}
                                    key={filterPhone.id}
                                />
                            )
                        })} */}
                </div>
            </div>
        )
    }
}
