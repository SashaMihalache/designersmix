import React from 'react';
import './Card.css';

class Cards extends React.Component {
  handleMouseEnter = () => this.cardRef.classList.add('active');

  handleMouseLeave = () => this.cardRef.classList.remove('active');

  render() {
    return (
      <div 
        className='card-container'
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}>
        <div
          className='card'
          ref={crd => {
            this.cardRef = crd;
          }}
        >
          <img src={this.props.card.mixArt} />
          <div className='designer'>
            <img src={this.props.card.designerPic} />
            <div className='name'>{this.props.card.designer}</div>
          </div>
        </div>
        <div className='card-overlay'>
          <div className='fa fa-heart'>{this.props.card.hearts}</div>
          <div className='fa fa-eye'>{this.props.card.views}</div>
          <div className='fa fa-comments'>{this.props.card.comments}</div>
        </div>
      </div>
    );
  }
}

export default Cards;
