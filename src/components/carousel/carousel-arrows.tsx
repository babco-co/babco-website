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
    <div className="flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        className={cn(
          "w-10 h-10 flex items-center justify-center",
          "rounded-full bg-green-dark shrink-0 transition-all duration-200",
          canScrollPrev
            ? "hover:opacity-80 cursor-pointer"
            : "opacity-30 cursor-not-allowed"
        )}
        aria-label="Previous slide"
      >
        <Image
          src="/icons/arrow-white.svg"
          alt="Previous"
          width={16}
          height={16}
          className="rotate-180"
        />
      </button>

      <button
        onClick={onNext}
        disabled={!canScrollNext}
        className={cn(
          "w-10 h-10 flex items-center justify-center",
          "rounded-full bg-green-dark shrink-0 transition-all duration-200",
          canScrollNext
            ? "hover:opacity-80 cursor-pointer"
            : "opacity-30 cursor-not-allowed"
        )}
        aria-label="Next slide"
      >
        <Image src="/icons/arrow-white.svg" alt="Next" width={16} height={16} />
      </button>
    </div>
  );
};

export default CarouselArrows;
