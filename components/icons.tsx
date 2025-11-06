import React from 'react';

// Moon icon for dark theme
export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M70 20C60 20 50 25 44 34C55 35 65 45 65 57C65 69 55 79 44 80C50 89 60 94 70 94C85 94 97 82 97 67C97 52 85 20 70 20Z" fill="#FDB813" opacity="0.9"/>
    <circle cx="50" cy="40" r="2" fill="#F59E0B"/>
    <circle cx="60" cy="55" r="1.5" fill="#F59E0B"/>
    <circle cx="45" cy="60" r="2.5" fill="#F59E0B"/>
  </svg>
);

// Star icon for decorative elements
export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 10L55 40L85 40L60 60L70 90L50 70L30 90L40 60L15 40L45 40Z" fill="#FDB813"/>
  </svg>
);

// Rain cloud icon
export const RainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M70 30C70 20 62 12 52 12C46 12 41 15 38 20C36 19 34 18 32 18C24 18 18 24 18 32C18 40 24 46 32 46H68C76 46 82 40 82 32C82 26 78 21 73 19C72 18 71 17 70 16Z" fill="#60A5FA" opacity="0.7"/>
    <path d="M35 55L32 65M45 55L42 65M55 55L52 65M65 55L62 65" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

// Alarm bell icon
export const AlarmBellIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 20C40 20 32 28 32 38V55C32 60 30 65 27 68H73C70 65 68 60 68 55V38C68 28 60 20 50 20Z" fill="#F59E0B" stroke="#FDB813" strokeWidth="2"/>
    <path d="M43 72C43 76 46 80 50 80C54 80 57 76 57 72" stroke="#FDB813" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="50" cy="15" r="3" fill="#FDB813"/>
    <path d="M20 30L15 25M80 30L85 25" stroke="#FDB813" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Snooze icon (sleeping moon)
export const SnoozeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M60 30C50 30 40 35 34 44C45 45 55 55 55 67C55 79 45 89 34 90C40 99 50 104 60 104C75 104 87 92 87 77C87 62 75 30 60 30Z" fill="#818CF8" opacity="0.8"/>
    <text x="70" y="30" fontSize="18" fill="#A5B4FC" fontWeight="bold">Z</text>
    <text x="80" y="20" fontSize="14" fill="#A5B4FC" fontWeight="bold">Z</text>
    <text x="88" y="12" fontSize="10" fill="#A5B4FC" fontWeight="bold">Z</text>
  </svg>
);

// Plus icon for adding alarms
export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
    <path d="M50 20V80M20 50H80"/>
  </svg>
);

// Delete/Trash icon
export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
    <path d="M30 30L70 70M70 30L30 70"/>
  </svg>
);

// Edit icon
export const EditIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
    <path d="M20 80H80M25 60L60 25L75 40L40 75L25 75Z"/>
  </svg>
);

// Volume icon
export const VolumeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M30 35H15V65H30L50 80V20L30 35Z"/>
    <path d="M60 35C65 40 65 60 60 65M70 25C80 35 80 65 70 75" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Mute icon
export const MuteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M30 35H15V65H30L50 80V20L30 35Z"/>
    <path d="M70 40L85 55M85 40L70 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Checkmark icon
export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
    <path d="M20 50L40 70L80 30"/>
  </svg>
);

// Egg icons for timer
export const SoftBoiledIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="55" rx="30" ry="35" fill="#FFF8DC" stroke="#F59E0B" strokeWidth="3"/>
    <ellipse cx="50" cy="55" rx="15" ry="18" fill="#FFD700" opacity="0.6"/>
    <circle cx="45" cy="50" r="2" fill="#FFF" opacity="0.8"/>
  </svg>
);

export const MediumBoiledIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="55" rx="30" ry="35" fill="#FFF8DC" stroke="#F59E0B" strokeWidth="3"/>
    <ellipse cx="50" cy="58" rx="15" ry="18" fill="#FFD700" opacity="0.8"/>
    <circle cx="45" cy="50" r="2" fill="#FFF" opacity="0.8"/>
  </svg>
);

export const HardBoiledIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="55" rx="30" ry="35" fill="#FFF8DC" stroke="#F59E0B" strokeWidth="3"/>
    <ellipse cx="50" cy="55" rx="15" ry="18" fill="#FFD700"/>
    <circle cx="45" cy="50" r="2" fill="#FFF" opacity="0.8"/>
  </svg>
);

// Bouncing toast icon
export const BouncingToastIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="15" y="35" width="70" height="50" rx="5" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
    <rect x="15" y="35" width="70" height="15" rx="5" fill="#FBBF24"/>
    <path d="M30 55Q40 45 50 55T70 55" fill="#FFD700" opacity="0.6"/>
    <circle cx="35" cy="60" r="2" fill="#FFF" opacity="0.8"/>
    <circle cx="55" cy="60" r="2" fill="#FFF" opacity="0.8"/>
    <path d="M35 70Q45 75 55 70" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// Rocking egg cup icon
export const RockingEggCupIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M30 60L35 80H65L70 60Z" fill="#FB923C" stroke="#F97316" strokeWidth="2"/>
    <ellipse cx="50" cy="55" rx="25" ry="30" fill="#FFF8DC" stroke="#F59E0B" strokeWidth="2"/>
    <circle cx="45" cy="48" r="2" fill="#FFF" opacity="0.8"/>
    <path d="M25 82H75" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
