import React from 'react';
import Postit from './components/postit';

import { useRecoilValue } from 'recoil';
import { postits } from './store/atom';

import { Stage, Layer } from 'react-konva';

function handleClick() {
  console.log('modal');
}

const App: React.FC = () => {
  const post = useRecoilValue(postits);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
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

export default App;
