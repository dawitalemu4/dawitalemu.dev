import React, { forwardRef, useState, useRef, useImperativeHandle } from "react";
import "./css/video.scss";

interface VideoModalProps {
    hideModal: () => void;
    projectID: string;
    url: string;
};

/* eslint-disable react/display-name */
const VideoModal = forwardRef<HTMLVideoElement, VideoModalProps>(({ hideModal, projectID, url }, ref) => {

    const videoDemoRef = useRef<HTMLVideoElement>(null);
    useImperativeHandle(ref, () => videoDemoRef.current as HTMLVideoElement);

    const transitionBack = () => {

        const thumbnail = document.getElementById(projectID);

        if (videoDemoRef.current) {
            videoDemoRef.current.style.viewTransitionName = "video-demo";
        };

        document.startViewTransition(() => {
            if (videoDemoRef.current && thumbnail) {
                videoDemoRef.current.style.viewTransitionName = "";
                thumbnail.style.viewTransitionName = "video-demo";
            }; 
        });

        setTimeout(() => {

            hideModal();

            if (thumbnail) {
                thumbnail.style.viewTransitionName = "";
            };

        }, 100);
    };

    return (
        <div id="video-modal" onClick={transitionBack}>
            <video controls muted loop autoPlay ref={videoDemoRef}>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
});

export default VideoModal;
