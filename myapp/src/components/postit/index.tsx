import React from 'react';
import { Group, Rect, Text } from 'react-konva';

interface Props {
  id: number;
  x: number;
  y: number;
  title: string;
  content: string;
  color: string;
  updatedDate: string;
  toggleShowModal: (event: any) => void;
}

const LENGTH = {
  WIDTH: 250,
  HEIGHT: 250,
};

const POSITION = {
  CONTENT_Y: 15,
  FOOTER_X: 120,
  FOOTER_Y: 235,
};

const Postit: React.FC<Props> = ({
  id,
  x,
  y,
  title,
  content,
  color,
  updatedDate,
  toggleShowModal,
}) => {
  return (
    <Group postId={id} x={x} y={y} draggable={true}>
      <Rect width={LENGTH.WIDTH} height={LENGTH.HEIGHT} fill={color} />
      <Group>
        <Text text={title}></Text>
        <Text onClick={toggleShowModal} x={LENGTH.WIDTH - 20} text="..."></Text>
      </Group>
      <Group y={POSITION.CONTENT_Y}>
        <Text text={content} width={LENGTH.WIDTH} />
      </Group>
      <Group x={POSITION.FOOTER_X} y={POSITION.FOOTER_Y}>
        <Text text={`최근 수정 : ${updatedDate}`} />
      </Group>
    </Group>
  );
};

export default Postit;
