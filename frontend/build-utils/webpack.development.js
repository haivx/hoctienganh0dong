module.exports = () => ({
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader",  "postcss-loader", "sass-loader"]
        }, 
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    }
  });