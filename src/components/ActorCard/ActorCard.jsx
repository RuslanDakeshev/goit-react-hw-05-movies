import { Img, Name, Character, Item } from "./ActorCard.styled";
import PropTypes from 'prop-types';

export const ActorCard = ({ name, role, photo_path }) => {
  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/ios-filled/512/gender-neutral-user.png';
    }
    return `https://image.tmdb.org/t/p/w200${image}`;
  };
  return (
    <>
      <Item>
        <Img src={getImgUrl(photo_path)} alt={name} width="200" />
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
