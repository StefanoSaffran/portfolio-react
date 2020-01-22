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
      /* document.body.style.position = 'fixed';           && document.URL.endsWith('about')     document.URL  // eslint-disable-line
       document.body.style.top = `-${window.scrollY}px`; */
    } else {
      bodyScroll.enable();
      /* const scrollY = document.body.style.top; */
      /* document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1); */
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
            <LinkWrapper to="/home">Home</LinkWrapper>
            <LinkWrapper to="/about">About</LinkWrapper>
          </div>
          <div />
        </>
      ) : null}
    </Container>
  );
}
