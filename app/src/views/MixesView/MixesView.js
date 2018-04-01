import React from "react";
import "./MixesView.scss";
import { getData } from "../../utils/CardsRepository";
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';

class CardsView extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    getData().then(cards => {
      setTimeout(() => {
          this.setState({ cards });
      }, 1000);
    });
  }

  renderMixes = () => (
    <div>
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
  )

  render() {
    return (
      <div className="mixes-view">
      {
        !this.state.cards.length
          ? <Spinner />
          : this.renderMixes()
      }
        

      </div>
    );
  }
}

export default CardsView;
