import React from 'react';

export default function ScrollToTop() {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <div className="top-btn" onClick={goToBtn}>
        <h1>👆</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
