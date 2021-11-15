import React from 'react';
import Postit from '../postit';
import { useRecoilValue } from 'recoil';
import { postits } from '../../store/atom';
import { Stage, Layer } from 'react-konva';

const Canvas: React.FC = () => {
  const post = useRecoilValue(postits);
  function handleClick() {
    console.log('modal');
  }
  return (
    <Stage width={1000} height={800}>
      <Layer>
        {post.map((pp) => {
          return (
            <Postit
              key={pp.key}
              x={pp.x}
              y={pp.y}
              title={pp.title}
              content={pp.content}
              color={pp.color}
              updatedDate={pp.updatedDate}
              onClick={handleClick}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
