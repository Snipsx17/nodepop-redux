import { useRef, useState } from 'react';
import T from 'prop-types';

import placeholder from '../../assets/images/placeholder.png';
const defaultAlt = 'placeholder.png';

const defaultImg = {
  alt: defaultAlt,
  src: placeholder,
};

function InputFile({ onChange, value, ...props }) {
  const inputRef = useRef(null);
  const [img, setImg] = useState(defaultImg);

  const loadSrcFromFile = file => {
    if (!file) {
      setImg(defaultImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setImg({ alt: file.name, src: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = ev => {
    const file = ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        {...props}
      />
      <img
        onClick={handleClick}
        src={img.src}
        alt={img.alt}
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
    </>
  );
}

InputFile.propTypes = {
  onChange: T.func.isRequired,
};

export default InputFile;
