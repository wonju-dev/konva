import React from 'react';

interface Props {
  clickUpdate: () => void;
  clickDelete: () => void;
  showModal: boolean;
}

const Modal: React.FC<Props> = ({ clickUpdate, clickDelete, showModal }) => {
  return (
    <>
      {showModal && (
        <>
          <button onClick={clickUpdate}>수정</button>
          <button onClick={clickDelete}>삭제</button>
        </>
      )}
    </>
  );
};

export default Modal;
