import React from 'react';
import {Title, Img, ExploreLink, Name, Wrap} from './styled';
import pic1 from './01.png';
import pic2 from './02.png';
import pic3 from './03.png';

export default function () {
  return (
    <div className="row">
      <div className="col-xl-12">
        <Title>Explore Airbnb</Title>
        <div className="col-xl-12">
          <Wrap>
            <ExploreLink className="col-xl-4" href="#">
              <Img src={pic1} />
              <Name>Home</Name>
            </ExploreLink>
            <ExploreLink href="#">
              <Img src={pic2} />
              <Name>Experiences</Name>
            </ExploreLink>
            <ExploreLink href="#">
              <Img src={pic3} />
              <Name>Restaurants</Name>
            </ExploreLink>
          </Wrap>
        </div>
      </div>
    </div>
  );
}
