/** @type {import('next').NextConfig} */
const nextConfig = {
    // This is to include assets like .glb files in the Next.js static assets
    assetsInclude: ['**/*.glb'],
  
    // Custom Webpack configuration
    webpack: (config, { isServer }) => {
      // Add a rule to handle .glb files using file-loader
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/models/',
              publicPath: '/_next/static/models/',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  