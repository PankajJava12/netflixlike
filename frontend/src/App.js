import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`${BACKEND_URL}/videos`)
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div className="container">
            <h1 className="title">🎬 Video Streaming</h1>
            <div className="video-grid">
                {videos.map((video, index) => (
                    <VideoPlayer 
                        key={index} 
                        title={video.title} 
                        src={`${BACKEND_URL}/video/${encodeURIComponent(video.filename)}`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
