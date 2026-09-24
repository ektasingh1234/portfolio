import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const LeetcodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.416.928l-.008.066a1.37 1.37 0 0 0 .424.966l5.406 5.348a1.355 1.355 0 0 0 1.916 0 1.355 1.355 0 0 0 0-1.916l-4.448-4.4 4.428-4.382A1.355 1.355 0 0 0 13.483 0zm-8.89 8.286a1.37 1.37 0 0 0-1.373 1.372v4.684a1.37 1.37 0 0 0 1.373 1.372h1.372a1.37 1.37 0 0 0 1.373-1.372V9.658a1.37 1.37 0 0 0-1.373-1.372H4.593zm14.814 0a1.37 1.37 0 0 0-1.372 1.372v4.684a1.37 1.37 0 0 0 1.372 1.372h1.373a1.37 1.37 0 0 0 1.372-1.372V9.658a1.37 1.37 0 0 0-1.372-1.372h-1.373z" />
  </svg>
);
