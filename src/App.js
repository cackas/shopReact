import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Красивый серый стул',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpeg',
          desc: 'Красивый стол',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван красный',
          img: 'sofa.jpeg',
          desc: 'Красивый красный диван',
          category: 'sofas',
          price: '99.99'
        },
        {
          id: 4,
          title: 'Шкаф черный',
          img: 'board.jpeg',
          desc: 'Красивый черный шкаф',
          category: 'boards',
          price: '149.99'
        },
        {
          id: 5,
          title: 'Стеллаж',
          img: 'rack.png',
          desc: 'Красивый стеллаж',
          category: 'racks',
          price: '79,99'
        },
        
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  render () {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items addToOrder={this.addToOrder} items={this.state.items}/>
      <Footer />
    </div>
    )
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {

    let isInArray = false

    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })

    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
