import React, { forwardRef, useRef, useImperativeHandle } from "react";
import "./css/video.scss";

interface VideoModalProps {
    showModal: boolean;
    hideModal: () => void;
    url: string;
};

/* eslint-disable react/display-name */
const VideoModal = forwardRef<HTMLVideoElement, VideoModalProps>(({ showModal, hideModal, url }, innerRef) => {

    const videoDemoRef = useRef<HTMLVideoElement>(null);
    // useImperativeHandle(videoDemoRef, () => innerRef as HTMLVideoElement);

    // const cleanUpTransition = () => {
    //     if (videoDemoRef) {
    //         console.log("video cleaned")
    //         videoDemoRef.style.viewTransitionName = "";
    //     };
    // };

    return (
        <div id="video-modal" style={{ display: showModal ? "flex" : "none" }} onClick={hideModal}>
            <video id="video-demo" controls muted loop autoPlay
                // onTransitionEnd={cleanUpTransition}
                ref={videoDemoRef}>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
});

export default VideoModal;
