import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SPOTIFY_ACCESS_TOKEN_URL } from '@/utils/constants';

interface TokenResponse {
  access_token: string;
}

const useGetSpotifyAccessToken = (): string | null => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.post<TokenResponse>(SPOTIFY_ACCESS_TOKEN_URL, {
        grant_type: 'client_credentials',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setToken(response.data.access_token);
    };

    fetchToken();
  }, []);

  return token;
};

export default useGetSpotifyAccessToken
