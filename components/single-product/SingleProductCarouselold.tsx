import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ItemMedia } from "@/lib/api/types/itemTypes/itemMedia";
import Image from "next/image";

export default function SingleProductCarousel({
  mediaName,
  media,
}: {
  mediaName: string;
  media: ItemMedia[];
}) {
  return (
    <Carousel>
      <CarouselContent>
        {media.map((m) => {
          const { id, path, mime } = m;
          const isVideo = mime.startsWith("video/");

          return (
            <CarouselItem key={id}>
              <div className="relative w-full h-80">
                {isVideo ? (
                  <video
                    src={path}
                    controls
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <Image
                    src={path}
                    alt={mediaName}
                    fill
                    priority
                    className="rounded-md object-cover"
                  />
                )}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
