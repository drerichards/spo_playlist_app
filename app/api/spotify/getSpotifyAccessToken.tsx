import { useState, useEffect } from "react";
import axios from "axios";

const GetSpotifyAccessToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getToken = async () => {
      if (token) return;

      try {
        const response = await fetchNewToken();
        const { access_token, expires_in } = response.data;

        setToken(access_token);

        // Set timeout to refresh token 10 seconds before it expires
        const newTimeoutId = setTimeout(() => {
          setToken(null);
          getToken();
        }, expires_in * 1000 - 10000);

        setTimeoutId(newTimeoutId);
      } catch (error) {
        console.error("Failed to fetch or refresh the token: ", error);
      }
    };

    getToken();

    // Clear timeout
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return token;
};

const fetchNewToken = async () => {
  const url = "https://accounts.spotify.com/api/token";
  const clientID = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientID || !clientSecret) {
    throw new Error("Spotify client ID or secret is undefined");
  }

  return await axios.post(
    url,
    {
      grant_type: "client_credentials",
      client_id: clientID,
      client_secret: clientSecret,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export default GetSpotifyAccessToken;
