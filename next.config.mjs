/** @type {import('next').NextConfig} */
const nextConfig = {
    // Custom Webpack configuration
    webpack: (config) => {
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
  