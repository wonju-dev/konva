import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { postits } from './store/atom';
import Canvas from './components/canvas';
import MyForm from './components/form';
import Modal from './components/modal';
const App: React.FC = () => {
  const [post, setPost] = useRecoilState(postits);
  const [clickedPost, setClickedPost] = useState();
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = (event: any) => {
    setClickedPost(event.target.parent.parent.attrs.postId);
    setShowModal(!showModal);
  };

  const clickUpdate = () => {
    console.log('update post');
  };
  const clickDelete = () => {
    setPost(
      post.filter((pp) => {
        if (pp.key !== clickedPost) return pp;
      }),
    );
    setShowModal(!showModal);
  };

  return (
    <>
      <Canvas post={post} toggleShowModal={toggleShowModal} />
      <MyForm />
      <Modal
        clickUpdate={clickUpdate}
        clickDelete={clickDelete}
        showModal={showModal}
      />
    </>
  );
};

export default App;
