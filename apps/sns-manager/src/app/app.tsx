import { ApiClient } from '@kumi-arts/api-client';
import { useState } from 'react';
import { environment } from '../environments/environment';
import PostForm from './post-form/post-form';
import SnsLogins from './sns-logins/sns-logins';
import { SocialProviderContext, Tokens } from './social-provider-context';

export function App() {
  const api = new ApiClient(environment.api);

  const [tokens, setTokens] = useState({} as Tokens);

  return (
    <div>
      <SnsLogins
        api={api}
        updateToken={(t) => setTokens((v) => ({ ...v, ...t }))}
      />

      <SocialProviderContext.Provider value={tokens}>
        <PostForm api={api} />
      </SocialProviderContext.Provider>
    </div>
  );
}

export default App;
