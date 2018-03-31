import React from "react";
import "./CardsView.css";
import { getData } from "../../utils/CardsRepository";
import Card from './Card/Card';

class CardsView extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    getData().then(cards => {
      console.log("intra", cards);
      this.setState({ cards });
    });
  }

  render() {
    return (
      <div className="cards-view">
        <div className="cards-list">
          {this.state.cards.map(card => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default CardsView;
