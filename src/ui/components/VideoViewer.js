import React, { useEffect, useRef } from 'react';

const VideoViewer = ({ videoSrc, poses }) => {
    const canvasRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const video = videoRef.current;

        const drawPoses = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Draw video frame
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            // TODO: Add code to draw poses on the canvas based on the poses data
        };

        video.addEventListener('play', () => {
            const interval = setInterval(() => {
                if (!video.paused && !video.ended) {
                    drawPoses();
                }
            }, 100);
            return () => clearInterval(interval);
        });
    }, [poses]);

    return (
        <div>
            <video ref={videoRef} src={videoSrc} width="640" height="480" controls />
            <canvas ref={canvasRef} width="640" height="480" style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>
    );
};

export default VideoViewer;