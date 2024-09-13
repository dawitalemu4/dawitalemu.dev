import React, { RefObject, forwardRef, useState, useRef, useImperativeHandle } from "react";
import "./css/video.scss";

interface VideoModalProps {
    modalView: boolean;
    hideModal: () => void;
    url: string;
    thumbnailRef: RefObject<HTMLImageElement>;
};

/* eslint-disable react/display-name */
const VideoModal = forwardRef<HTMLVideoElement, VideoModalProps>(({ modalView, hideModal, url, thumbnailRef }, ref) => {

    const [showModal, setShowModal] = useState(modalView);
    const videoDemoRef = useRef<HTMLVideoElement>(null);
    useImperativeHandle(ref, () => videoDemoRef.current as HTMLVideoElement);

    const transitionBack = () => {

        if (videoDemoRef.current) {
            videoDemoRef.current.style.viewTransitionName = "video-demo";
        };

        document.startViewTransition(() => {
            if (videoDemoRef.current && thumbnailRef.current) {
                videoDemoRef.current.style.viewTransitionName = "";
                thumbnailRef.current.style.viewTransitionName = "video-demo";
            }; 
        });

        setTimeout(() => {

            setShowModal(false);
            hideModal();

            if (thumbnailRef.current) {
                thumbnailRef.current.style.viewTransitionName = "";
            };

        }, 100);
    };

    return (
        <div id="video-modal" style={{ display: showModal ? "flex" : "none" }} onClick={transitionBack}>
            <video controls muted loop autoPlay ref={videoDemoRef}>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
});

export default VideoModal;
