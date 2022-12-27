import { Img, Name, Character, Item } from "./ActorCard.styled";
import PropTypes from 'prop-types';

export const ActorCard = ({ name, role, photo_path }) => {
  return (
    <>
      <Item>
        <Img src={`https://image.tmdb.org/t/p/w500${photo_path}`} alt={name} />
        <Name>{name}</Name>
        <Character>{role}</Character>
      </Item>
    </>
  );
};

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  photo_path: PropTypes.string,
};
