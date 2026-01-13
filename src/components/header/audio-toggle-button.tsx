import Image from "next/image";
import muteIcon from "@/../public/icons/mute-icon.svg";
import unmuteIcon from "@/../public/icons/unmute-icon.svg";

type AudioToggleButtonProps = {
  isMuted: boolean;
  onClick: () => void;
};

const AudioToggleButton = ({ isMuted, onClick }: AudioToggleButtonProps) => {
  return (
    <button
      className="shrink-0 group relative touch-manipulation"
      onClick={onClick}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      <Image
        src={isMuted ? muteIcon : unmuteIcon}
        alt={isMuted ? "mute" : "unmute"}
        className="transition-transform duration-200 group-hover:scale-110 invert dark:invert-0"
      />
      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-text-primary-light dark:text-text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {isMuted ? "Unmute" : "Mute"}
      </span>
    </button>
  );
};

export default AudioToggleButton;