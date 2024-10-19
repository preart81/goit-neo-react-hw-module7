import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <BeatLoader
      color="#1dab0b"
      size={20}
      cssOverride={{ position: 'absolute', left: '50%', top: '50%' }}
    />
  );
};

export default Loader;
