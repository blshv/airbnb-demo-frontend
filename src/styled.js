import styled from 'styled-components';
import 'flexboxgrid2';

export const Header = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const Logo = styled.img`
  width: 30px;
  height: 32px;
`;

export const Input = styled.input`
  width: 392px;
  height: 48px;
  padding-left: 50px;
  margin-left: 40px;
  font: 16px "Circular Air Book";
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url() no-repeat 16px 50%;
  box-sizing: border-box;
  box-shadow: 0 1px 0 0 rgba(72, 72, 72, 0.08);
`;

export const Link = styled.a`
  text-decoration: none;
  color: #383838;
  font-size: 14px;
`;

export const Nav = styled.nav`
  display: flex;
  margin-right: 0px;
  justify-content: space-between;
`;

// export const Explore = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: block;
//   justify-content: space-between;
//   margin-top: 15px;
// `;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 33px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 96px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ExploreLink = styled.a`
  display: flex;
  align-items: center;
  width: 310px;
  height: 72px;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 0 0 rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;
`;

export const Name = styled.span`
  padding-left: 24px;
  color: #383838;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
`;
