module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["www.gravatar.com", "https://readit-server-jpc.herokuapp.com"],
  },
};
