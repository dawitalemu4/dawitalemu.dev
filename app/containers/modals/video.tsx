import React from "react";
import "./css/video.scss";

interface VideoModalProps {
    showModal: boolean;
    hideModal: () => void;
    url: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ showModal, hideModal, url }) => {
    return (
        <div id="video-modal" style={{ display: showModal ? "flex" : "none" }} onClick={hideModal}>
            <video controls muted loop autoPlay>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoModal;
