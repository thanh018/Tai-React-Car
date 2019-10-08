const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const { injectBabelPlugin } = require('react-app-rewired');
const { rewireWorkboxInject, defaultInjectConfig } = require('react-app-rewire-workbox');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');
const rewireUglifyjs = require('react-app-rewire-uglifyjs');
// const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
const rewireWebpackOutput = require('react-app-rewire-output');

const path = require('path');
/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config = rewireStyledComponents(config, env);
  config = injectBabelPlugin(['@babel/plugin-proposal-optional-chaining'], config);
  if (env === "production") {
    config = injectBabelPlugin(['@babel/plugin-transform-react-constant-elements'], config);
    config = injectBabelPlugin(['@babel/plugin-transform-react-inline-elements'], config);
    config = injectBabelPlugin(['transform-react-remove-prop-types'], config);
    config = injectBabelPlugin(['closure-elimination'], config);
    config = rewireDefinePlugin(config, env, {
      'process.env.NODE_ENV': JSON.stringify('production'),
    });
    config = rewireUglifyjs(config);
    // console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc: path.join(__dirname, 'src', 'custom-sw.js')
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
    // config = rewireWebpackBundleAnalyzer(config, env, {
    //   analyzerMode: 'static',
    //   reportFilename: 'report.html'
    // })
    config = rewireWebpackOutput(config, env, {
        publicPath: '/',
    });
  }

  return config;
};
