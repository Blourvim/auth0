import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

// Auth0 configuration
const authConfig = {
  issuer: 'https://dev-w-xp6bpi.us.auth0.com/',
  audience: 'https://review-blourvim.herokuapp.com',
  algorithms: ['RS256'],
};

const secret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  //jwksUri: `${authConfig.issuer}/.well-known/jwks.json`,
  jwksUri: 'https://dev-w-xp6bpi.us.auth0.com/.well-known/jwks.json'
});

const authenticated = jwt({ secret, ...authConfig });

export default authenticated;