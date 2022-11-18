module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_PROD_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    "https://bug-reproduction-eta.vercel.app",
  generateRobotsTxt: true,
};
