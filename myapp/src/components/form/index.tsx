import React, { useRef, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { postits } from '../../store/atom';
const MyForm: React.FC = () => {
  const [postit, setPostit] = useRecoilState(postits);
  const titleInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (titleInput.current && descInput.current) {
      const title = titleInput.current.value;
      const desc = descInput.current.value;
      const newPost = {
        key: postit.length,
        title: title,
        content: desc,
        x: postit.length * 10,
        y: postit.length * 10,
        color: 'purple',
        updatedDate: 'date',
      };
      setPostit([...postit, newPost]);
    }
  };

  return (
    <>
      <input ref={titleInput} name="title" placeholder="tile" />
      <input ref={descInput} name="desc" placeholder="desc" />
      <button type="button" onClick={handleClick}>
        add
      </button>
    </>
  );
};

export default MyForm;
