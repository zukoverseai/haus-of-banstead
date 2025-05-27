"use client";
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function SocialLinks() {
    return (
        <div className="flex space-x-4">
            <a
                href="https://www.instagram.com/hausofbanstead?igsh=dzR4dWpqb215NGI2"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-all duration-300 ease-out hover:text-brand hover:scale-110"
            >
                <FaInstagram size={24} />
            </a>
            <a
                href="https://www.facebook.com/share/1BoRaZJtwr/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-all duration-300 ease-out hover:text-brand hover:scale-110"
            >
                <FaFacebookF size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/funmiadeojo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-all duration-300 ease-out hover:text-brand hover:scale-110"
            >
                <FaLinkedin size={24} />
            </a>
            <a
                href="https://x.com/hausofbanstead?s=21"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-all duration-300 ease-out hover:text-brand hover:scale-110"
            >
                <FaXTwitter size={24} />
            </a>
        </div>
    );
} 