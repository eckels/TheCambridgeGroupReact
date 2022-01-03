module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '389cc428dc9e96e2ec843181a10f6f85'),
  },
});
