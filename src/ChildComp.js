import React, { Component, Fragment } from 'react'

export class ChildComp extends Component {
    constructor(props) {
        super(props)
    }
    selectItem = () => {
        this.props.showName(this.props.item)
    }
    render() {
        const item = this.props.item;
        return (
            <div className="item" key={item.id} onClick={this.selectItem}>
                <div className="installment">
                    <span>
                        Trả góp <b>0%</b>
                    </span>
                </div>
                <div className="image-container">
                    <img src={item.image} className="image" />
                </div>
                <span className="span-name">{item.name}</span>
                <div className="price">
                    <div className="main-price">
                        <span>{item.price}đ</span>
                    </div>
                    <div className="sub-price">
                        <span>{item.subprice}đ</span>
                    </div>
                    <div className="discount">
                        <span>{item.discount}</span>
                    </div>
                </div>
                <div className="rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            </div>
        )
    }
}
