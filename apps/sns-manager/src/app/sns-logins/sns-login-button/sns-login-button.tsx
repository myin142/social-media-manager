import './sns-login-button.module.scss';
import {
  faFacebook,
  faInstagram,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { SocialProvider, User } from '@kumi-arts/core';
import { environment } from '../../../environments/environment';
import { ApiClient } from '@kumi-arts/api-client';

export interface SnsButtonProps {
  provider: SocialProvider;
  api: ApiClient;
  setToken: (t: string | null) => void;
}

const data = {
  [SocialProvider.TWITTER]: {
    icon: faTwitter,
    profileUrl: ({ id }: User) => `https://twitter.com/${id}`,
  },
  [SocialProvider.REDDIT]: {
    icon: faReddit,
    profileUrl: ({ id }: User) => `https://reddit.com/u/${id}`,
  },
  [SocialProvider.FACEBOOK]: {
    icon: faFacebook,
    profileUrl: ({ id }: User) =>
      `https://www.facebook.com/profile.php?id=${id}`,
  },
  [SocialProvider.INSTAGRAM]: {
    icon: faInstagram,
    profileUrl: ({ name }: User) => `https://instagram.com/${name}`,
  },
  [SocialProvider.IMGUR]: {
    icon: faImages,
    profileUrl: ({ name }: User) => `https://imgur.com/user/${name}/posts`,
  },
};

export function SnsLoginButton({ api, provider, setToken }: SnsButtonProps) {
  const [user, setUser] = useState(null as User | null);

  useEffect(() => {
    api
      .getUser(provider)
      .then((user) => setUser(user))
      .then(() => api.getToken(provider))
      .then((t) => setToken(t))
      .catch((err) => {
        setUser(null);
        setToken(null);
      });
  }, []);

  const buildUrl = () => {
    if (user?.id) {
      return data[provider].profileUrl(user);
    } else {
      return `${environment.api}/${provider}/login`;
    }
  };

  return (
    <a href={buildUrl()} target={user?.id ? '_blank' : ''} rel="noreferrer">
      <FontAwesomeIcon icon={data[provider].icon} />
      {user?.name ? user.name : `${provider} login`}
    </a>
  );
}

export default SnsLoginButton;