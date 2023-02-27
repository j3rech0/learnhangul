import * as React from "react";
import { Head } from "../../style";
import Svg from "react-native-svg";
import { SVGLogo } from "../../style";

const Header = () => {
  return (
    <Head>
      <Svg
        width="150"
        height="17"
        viewBox="0 0 150 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SVGLogo />
      </Svg>
    </Head>
  );
};

export default Header;
