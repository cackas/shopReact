import React, { Component } from 'react'
import Item from './item'

export default class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item addToOrder={this.props.addToOrder} item={el} key={el.id} />
        ))}
      </main>
    )
  }
}
