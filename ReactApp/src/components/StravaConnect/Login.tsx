import { useEffect, useState } from 'react';
import axios from 'axios';

const CLIENT_ID = '158384';
const REDIRECT_URI = 'http://localhost:3000/redirect';
const STRAVA_AUTHORIZE_URL = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&approval_prompt=force&scope=activity:read_all`;

export const Login = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [token, setToken] = useState<string | null>(null);

    interface Activity {
        id: number;
        name: string;
        distance: number;
    }

    const getActivities = async (access_token: string): Promise<void> => {
        try {
            const res = await axios.get<Activity[]>(`https://www.strava.com/api/v3/athlete/activities`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            setActivities(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    interface TokenResponse {
        access_token: string;
    }

    const exchangeToken = async (code: string): Promise<void> => {
        try {
            const res = await axios.get<TokenResponse>(`http://localhost:4000/api/exchange_token?code=${code}`);
            const access_token = res.data.access_token;
            setToken(access_token);
            getActivities(access_token);
        } catch (err) {
            console.error('Token exchange failed:', err);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code) {
            exchangeToken(code);
        }
    }, []);

    return (
        <div>
            <h1>Strava Activities</h1>
            {!token && (
                <a href={STRAVA_AUTHORIZE_URL}>
                    <button>Connect to Strava</button>
                </a>
            )}
            {activities.map((act) => (
                <div key={act.id}>
                    <h3>{act.name}</h3>
                    <p>{act.distance} meters</p>
                </div>
            ))}
        </div>
    );
}

