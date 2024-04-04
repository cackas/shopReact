import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
        
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render () {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} addToOrder={this.addToOrder} items={this.state.currentItems}/>
      
      {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} addToOrder={this.addToOrder}/>}
      <Footer />
    </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(cat) {
    if(cat === 'all'){
      this.setState({ currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === cat)
    })
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
