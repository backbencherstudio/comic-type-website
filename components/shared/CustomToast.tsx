'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

interface CustomToastProps {
    message?: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    onClose?: () => void;
}

const CustomToast: React.FC<CustomToastProps> = ({ 
    message = "This is a custom toast message!", 
    type = 'info',
    duration = 3000,
    onClose 
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
    const remainingTimeRef = useRef<number>(duration);

    useEffect(() => {
        // Show toast after 3 seconds
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            // Start auto-hide timer
            startHideTimer();
        }, 3000);

        return () => {
            clearTimeout(showTimer);
            clearHideTimer();
        };
    }, []);

    const startHideTimer = () => {
        clearHideTimer();
        hideTimerRef.current = setTimeout(() => {
            handleClose();
        }, remainingTimeRef.current);
    };

    const clearHideTimer = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        // Pause the timer when mouse enters
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        // Resume the timer when mouse leaves
        if (isVisible && !isClosing) {
            startHideTimer();
        }
    };

    const handleClose = () => {
        setIsClosing(true);
        clearHideTimer();
        setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, 300); // Animation duration
    };

    const getToastStyles = () => {
        const baseStyles = "fixed top-4 right-4 z-50 max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 p-4 transform transition-all duration-300 ease-in-out cursor-pointer";
        
        const typeStyles = {
            success: "border-green-500 bg-green-50",
            error: "border-red-500 bg-red-50", 
            warning: "border-yellow-500 bg-yellow-50",
            info: "border-blue-500 bg-blue-50"
        };

        const animationStyles = isVisible && !isClosing 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0";

        return `${baseStyles} ${typeStyles[type]} ${animationStyles}`;
    };

    const getIconColor = () => {
        const colors = {
            success: "text-green-600",
            error: "text-red-600",
            warning: "text-yellow-600", 
            info: "text-blue-600"
        };
        return colors[type];
    };

    if (!isVisible && !isClosing) return null;

    return (
        <div 
            className={getToastStyles()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className={`text-sm font-medium ${getIconColor()}`}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </p>
                    <p className="text-gray-700 mt-1">
                        {message}
                    </p>
                </div>
                <button
                    onClick={handleClose}
                    className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                    aria-label="Close toast"
                >
                    <IoClose className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default CustomToast;