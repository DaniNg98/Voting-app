import React, { Component } from 'react';
import './App.css';



class ProductList extends React.Component {

  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: products });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  render() {
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));

    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return (
      <div className='items'>
        {productComponents}
      </div>
    );
  }
}

class Product extends React.Component {

  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img className='product-image' src={this.props.productImageUrl} />
        </div>
        <div className='content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i class='fas fa-caret-up'></i>
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Sendt inn av:</span>
            <img
              className='avatar'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

function generateVoteCount() {
  return Math.floor((Math.random() * 40) + 15)
}

const products = [
      {
        id: 1,
        title: 'Nespresso Maskin',
        description: 'Kapsel-kaffemaskin med melkeskummer.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        productImageUrl: 'images/products/image-aqua.png',
      },
      {
        id: 2,
        title: 'JBL-Charge 3',
        description: 'Høytaler som er lett å fraktes.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/elliot.jpg',
        productImageUrl: 'images/products/image-rose.png',
      },
      {
        id: 3,
        title: 'Smartshake',
        description: 'Lag dine shakes lydløs!',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/jenny.jpg',
        productImageUrl: 'images/products/image-steel.png',
      },
      {
        id: 4,
        title: 'Bose QC 2',
        description: 'Hodetelefon med god støyreduksjon',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/helen.jpg',
        productImageUrl: 'images/products/image-yellow.png',
      },
    ];




export default ProductList;
