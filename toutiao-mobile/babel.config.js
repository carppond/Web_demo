module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "9"
        }
      }
    ]
  ]
}
