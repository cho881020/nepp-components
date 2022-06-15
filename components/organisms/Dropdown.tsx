import React, { ReactNode, useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Dropdown = ({
  activator,
  content,
}: {
  activator: (e: () => void) => ReactNode;
  content: ReactNode;
}) => {
  const el = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!el.current?.contains(e.target as HTMLElement)) {
        setShow(false);
      }
    };

    document.getElementById("root")?.addEventListener("click", onClick);
    return () => {
      document.getElementById("root")?.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={el}>
      {activator(() => setShow((prev) => !prev))}
      {show && <Content>{content}</Content>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  z-index: 1;
`;

export default Dropdown;
