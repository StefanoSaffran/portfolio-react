import React, { useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import bodyScroll from 'body-scroll-toggle';

import useComponentVisible from '~/helpers/hooks/useComponentVisible';
import LinkWrapper from '~/helpers/LinkWrapper';

import { Container } from './styles';

export default function Menu() {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  useEffect(() => {
    if (isComponentVisible) {
      bodyScroll.disable();
    } else {
      bodyScroll.enable();
    }
  }, [isComponentVisible]);

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
            <LinkWrapper to="/home">HOME</LinkWrapper>
            <LinkWrapper to="/about">ABOUT ME</LinkWrapper>
            <LinkWrapper to="/skills">SKILLS</LinkWrapper>
          </div>
          <div />
        </>
      ) : null}
    </Container>
  );
}
