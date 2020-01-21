import React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import useComponentVisible from '~/helpers/hooks/useComponentVisible';
import LinkWrapper from '~/helpers/LinkWrapper';

import { Container } from './styles';

export default function Menu() {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  return (
    <Container visible={isComponentVisible}>
      <button type="button" onClick={setIsComponentVisible}>
        {isComponentVisible ? (
          <MdClose size={26} color="#fff" />
        ) : (
          <MdMenu size={26} color="#fff" />
        )}
      </button>

      {isComponentVisible ? (
        <>
          <div ref={ref}>
            <LinkWrapper to="/home">Home</LinkWrapper>
            <LinkWrapper to="/about">About</LinkWrapper>
          </div>
        </>
      ) : null}
    </Container>
  );
}
