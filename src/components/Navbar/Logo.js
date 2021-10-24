import React from "react";
import styled from "@emotion/styled";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;
const Logo = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       file(name: { eq: "bbbLogo" }, extension: { eq: "png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 150, pngQuality: 80) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `);

  return (
    <LogoWrap>
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="logo" /> */}
    </LogoWrap>
  );
};

export default Logo;
