import { SNSPost, SocialProvider, User } from '@kumi-arts/core';
import { Axios } from 'axios';
import { createClient } from './client';

export interface RedditPost extends SNSPost {
  subreddits: string[];
}

export class RedditClient {
  private client: Axios;

  constructor() {
    this.client = createClient(SocialProvider.REDDIT, {
      baseURL: '/api/reddit',
    });
  }

  async postMedia(media: SNSPost): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async getUser(): Promise<User> {
    const { data } = await this.client.get('/api/v1/me');
    if (!data.name) {
      throw new Error('Failed to get user');
    }

    return { id: data.name, name: data.name };
  }

  async querySubreddit(query: string): Promise<string[]> {
    const urlParam = new URLSearchParams({ query });

    const { data } = await this.client.get(`/api/subreddit_autocomplete_v2?${urlParam.toString()}`)

    return data.data.children.map((child: Record<string, Record<string, string>>) => child.data.display_name_prefixed)
      .filter((x: string) => !!x);
  }

}
