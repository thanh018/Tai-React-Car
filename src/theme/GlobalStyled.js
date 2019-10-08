import { injectGlobal } from 'styled-components';


injectGlobal`
  /*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box;height:100%}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
  /* stylelint-disable */
  @font-face {
    font-family: 'Gotham';
    src: url('./fonts/Gotham Bold Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  .mobile {
    body {
      &.ReactModal__Body--open {
        pointer-events: none;
        overflow: hidden;
      }
    }
  }
  body {
    position: relative;
    min-height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Gotham', Arial;
    font-size: 12px;
    text-rendering: optimizeSpeed;
    background-color: #EEEEEE;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    &.ReactModal__Body--open {
        overflow: visible !important;
        position: fixed;
        height: 100%;
        width: 100% !important;
      }
    @media screen and (max-width: 480px) {
      font-family: sans-serif!important;
      &.noScroll {
        overflow: hidden;
        position: fixed;
        height: 100%;
        width: 100% !important;
        pointer-events: none;
      }
      &.noScrollForm {
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        height: -webkit-fill-available;
        overflow: hidden;
      }
    }
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none;
  }

  .css-1fssbfx,
  .css-fqbl85,
  .css-dyiv37,
  .css-1re38q3,
  .css-qgek73 {
    position: relative;
    transition: all 0.3s ease;
    &:nth-child(4) {
      &:after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
          border-bottom: 1px dotted pink;
      }
    }
  }

  .app-wrap, .app-wrap button {
    font-family: Meiryo,"Hiragino Kaku Gothic Pro","MS PGothic",sans-serif;
  }

  @media screen and (max-width: 480px) {
    .app-wrap, .app-wrap button {
      font-family: sans-serif
    }
  }

  /*#react-select-4-option-3 {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      border-bottom: 1px dotted pink;
    }
  }*/
`;

export const defaultTheme = {
  name: 'defaultTheme',
  primary: '#6e27c5',
  light: '#ff0198',
  text: '#fff',
  // fonts: {
  //   sans: 'Meiryo, "Hiragino Kaku Gothic Pro", "MS PGothic", sans-serif',
  //   mono: 'monospace',
  // },
};

export const darkTheme = {
  name: 'darkTheme',
  primary: '#ff0198',
  light: '#6e27c5',
  text: '#6e27c5',
};
