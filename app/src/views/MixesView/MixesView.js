import React from "react";
import "./MixesView.scss";
import { getData } from "../../utils/CardsRepository";
import Card from '../../components/Card/Card';

class CardsView extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    getData().then(cards => {
      this.setState({ cards });
    });
  }

  render() {
    return (
      <div className="mixes-view">
        <div className="mixes-filter">
          <div className="filter active">Recent</div>
          <div className="filter">Popular</div>
        </div>
        <div className="mixes-list">
          {this.state.cards.map(card => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default CardsView;
