import React, { Component } from 'react'

export default class CartProduct extends Component {

    render() {

        return (
            <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src={this.props.img} width="100" height="100" />
                    <span class="cart-item-title">{this.props.title}</span>
                </div>
                <span class="cart-price cart-column">${this.props.price}</span>
                <div class="cart-quantity cart-column">

                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>
            </div>
        )
    }
}
