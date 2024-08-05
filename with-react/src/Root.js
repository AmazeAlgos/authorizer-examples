import { BrowserRouter } from 'react-router-dom';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import App from './App';

export default function Root() {
  return (
    <BrowserRouter>
      <AuthorizerProvider
        config={{
          authorizerURL: `https://authorizer-production-8a03.up.railway.app`,
          redirectURL: window.location.href,
          clientID: '8ea026bd-1bec-4b97-8b11-2f7d6e0ac0e7',
        }}
      >
        <App />
      </AuthorizerProvider>
    </BrowserRouter>
  );
}
