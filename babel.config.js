module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Use this preset
    plugins: [
      // Remove "expo-router/babel" as it's deprecated in SDK 50
      "react-native-reanimated/plugin",
    ],
  };
};
