module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src', './shared'],
        alias: {
          "src" : "./src",
          "styles": "./src/views/styles",
          "apis" : "./shared/redux/api",
          "screens": "./src/views/screens"
        }
      },
    ],
  ],
}
