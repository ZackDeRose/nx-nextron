// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {};

// This is working
// module.exports = nextConfig

// This is not working
module.exports = withNx(nextConfig);
