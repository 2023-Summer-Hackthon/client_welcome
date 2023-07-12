import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Main = styled.div`
  max-width: 780px;
  width: 100%;
  min-height: 100vh;
`;

// eslint-disable-next-line react/prop-types
// export const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({
//     query: "(max-width:768px)",
//   });

//   return <>{isMobile && children}</>;
// };
