module.exports = {
  gifsicle: { optimizationLevel: 2, interlaced: false, colors: 10 },
  mozjpeg: { progressive: true, quality: 9 },
  pngquant: { quality: 9 },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }]
  },
  webp: { quality: 9 }
};
