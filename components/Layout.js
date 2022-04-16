import { Component } from 'react';
import Head from "next/head";

const Layout = ({children, title}) => (
    <div>
      <Head>
        {/* <link
            rel="preload"
            href="/fonts/wotford-regular-webfont.ttf"
            as="font"
            crossOrigin=""
            /> */}
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
      </Head>
      {children}
    </div>
);

export default Layout;
