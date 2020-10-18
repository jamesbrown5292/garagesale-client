import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './styles.scss';

const SaleCard = () => (
  <>
    <div className="img-card-wrapper">
      <img src="https://picsum.photos/300/210" alt="garage" />
    </div>
    <div className="sale-card__info-position">
      <div className="sale-card__info">
        <h4>Title</h4>
        <p>Location</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </>
);

export default SaleCard;
