import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [ //Modulo para que se compilen archivos con terminacion .Js, Jsx, Ts, Tsx
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        }
      },
      {//Modulo para que se compilen archivos .css
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      }
    ],
  },
  resolve: { //extenciones que soporta la compilacion
    extensions: [".tsx", ".ts", ".js","jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ // plugin para archivos Html
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({//plugin para librerias de stylos agenas al Dom
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(), // pugin para webpack-server
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({ // plugin para terminaciones
      extensions: ["js", "jsx", "ts", "tsx"]
    })
  ],
  devtool: "inline-source-map", // configuracion del puerto
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },
};

export default config;
