import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  render () {
    return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
    )
  }
}

export default App;
