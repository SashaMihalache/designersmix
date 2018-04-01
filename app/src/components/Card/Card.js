import React from 'react';
import './Card.scss';

class Cards extends React.Component {
  handleMouseEnter = () => this.cardRef.classList.add('active');
  handleMouseLeave = () => this.cardRef.classList.remove('active');

  handleMixClick = () => {
    console.log("Clicked Mix");
  }

  handleDesignerClick = () => {
    console.log("Clicked designer");
  }

  render() {
    const card = this.props.card;
    const fullName = `${card.owner.first_name} ${card.owner.last_name}`;
    return (
      <div 
        className='card-container'
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}>
        <div
          className='card'
          ref={crd => { this.cardRef = crd; }}>
          <img src={card.cover_photo.url_base} alt='Not found'/>
        </div>
        <div className='card-overlay' onClick={this.handleMixClick}>
          <div className='fa fa-heart'><span>{card.likes}</span></div>
          <div className='fa fa-eye'><span>{card.views}</span></div>
          <div className='fa fa-comments'><span>{card.comments}</span> </div>
        </div>
        <div className='card-designer' onClick={this.handleDesignerClick}>
            <img src={card.owner.avatar.url_base} alt='Not Found' />
            <div className='name'>{fullName}</div>
          </div>
      </div>
    );
  }
}

export default Cards;
