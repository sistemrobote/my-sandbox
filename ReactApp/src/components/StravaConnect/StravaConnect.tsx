import { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import axios from 'axios';
// import polyline from '@mapbox/polyline'

interface Node {
    activityPositions: any;
    activityName: string;
}
export const StravaConnect = () => {


    const [nodes, setNodes] = useState<Node[]>([]);

    const clientID = "158384";
    const clientSecret = "6fa55aac116bb6af74948605717ebe65633c8622";
    const refreshToken = "c84bde076979599174a2936bde9b934fb0963c58"
    const auth_link = "https://www.strava.com/oauth/token"
    const activities_link = `https://www.strava.com/api/v3/athlete/activities`

    useEffect(() => {
        async function fetchData() {
            const stravaAuthResponse = await axios.all([
                axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
            ]);
            console.log(" stravaAuthResponse:", stravaAuthResponse)
            const accessToken = stravaAuthResponse[0].data.access_token

            const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${accessToken}`);
            console.log(stravaActivityResponse.data[0]);
            const polylines = [];
            for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
                const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
                const activity_name = stravaActivityResponse.data[i].name;
                polylines.push({ activityPositions: polyline.decode(activity_polyline), activityName: activity_name });
            }
            console.log(polylines)
            setNodes(polylines);
        }

        fetchData();
    }, []);

    return (
        <h1>test</h1>
        // <MapContainer center={[42.585444, 13.257684]} zoom={6} scrollWheelZoom={true}>
        //     <TileLayer
        //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />

        //     {nodes.map((activity, i) => (
        //         <Polyline key={i} positions={activity.activityPositions}>
        //             <Popup>
        //                 <div>
        //                     <h2>{"Name: " + activity.activityName}</h2>
        //                 </div>
        //             </Popup>
        //         </Polyline>
        //     ))}
        // </MapContainer>
    );
}
