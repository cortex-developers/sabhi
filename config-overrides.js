const { override, addWebpackPlugin, adjustWorkbox, getBabelLoader } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  (config, env) => {
    // Find the existing webpack rule that handles images
    const rule = config.module.rules.find(
      r => r.oneOf && r.oneOf.find(o => o.test && o.test.toString().includes('png|jpg|jpeg|gif|svg'))
    );

    if (rule) {
      const imageRule = rule.oneOf.find(o => o.test && o.test.toString().includes('png|jpg|jpeg|gif|svg'));
      if (imageRule) {
        // Add image-webpack-loader to the existing image loader rule
        imageRule.use.push({
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            }
          }
        });
      }
    }

    return config;
  }
);
