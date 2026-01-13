import Image from "next/image";
import { cn } from "@/lib/utils/cn";

const CarouselArrows = ({
  onPrev,
  onNext,
  canScrollPrev,
  canScrollNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}) => {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        className={cn(
          "w-6 h-6 flex items-center justify-center",
          "rounded-full border border-black dark:border-white shrink-0 transition-all duration-200",
          canScrollPrev
            ? "hover:opacity-80 cursor-pointer"
            : "opacity-30 cursor-not-allowed"
        )}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          className="text-[#616161] dark:text-white rotate-180"
        >
          <path
            d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269203 5.65973 0.269203 5.46447 0.464466C5.2692 0.659728 5.2692 0.97631 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM1 4.5L9 4.5L9 3.5L1 3.5L1 4.5Z"
            className="fill-current"
          />
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={!canScrollNext}
        className={cn(
          "w-6 h-6 flex items-center justify-center",
          "rounded-full border border-black dark:border-white shrink-0 transition-all duration-200",
          canScrollNext
            ? "hover:opacity-80 cursor-pointer"
            : "opacity-30 cursor-not-allowed"
        )}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          className="text-[#616161] dark:text-white"
        >
          <path
            d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269203 5.65973 0.269203 5.46447 0.464466C5.2692 0.659728 5.2692 0.97631 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM1 4.5L9 4.5L9 3.5L1 3.5L1 4.5Z"
            className="fill-current"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselArrows;
