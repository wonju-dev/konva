import React from 'react';
import Postit from '../postit';
import { Stage, Layer } from 'react-konva';

interface Props {
  post: any[];
  toggleShowModal: (event: any) => void;
}

const Canvas: React.FC<Props> = ({ post, toggleShowModal }) => {
  return (
    <Stage width={1000} height={800}>
      <Layer>
        {post.map((pp) => {
          return (
            <Postit
              key={pp.key}
              id={pp.key}
              x={pp.x}
              y={pp.y}
              title={pp.title}
              content={pp.content}
              color={pp.color}
              updatedDate={pp.updatedDate}
              toggleShowModal={toggleShowModal}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
