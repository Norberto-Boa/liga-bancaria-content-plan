import type { ContentItem } from "../data/contentPlan";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { PlayCircle, Video } from "lucide-react";

interface Props {
  item: ContentItem;
  onClick: () => void;
}

export function ContentCard({ item, onClick }: Props) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02] border-none"
    >
      <div className="space-y-4">
        {item.type === "Static" && item.image && (
          <img
            src={item.image.src}
            alt={item.title}
            className={`rounded-lg w-full object-cover ${item.image.aspectRatio === "1:1" ? "aspect-square" : "aspect-4/5"}`}
          />
        )}

        {item.type === "Dynamic" && (
          <div className="aspect-4/5 w-full rounded-lg bg-darker/15 flex items-center justify-center">
            <Video size={48} className="text-white opacity-90" />
            {/* <div className="absolute inset-0 bg-black/10 rounded-lg" /> */}
          </div>
        )}

        <div className="px-4 space-y-2 py-3">
          <div className="flex items-start justify-between flex-col ">
            <h3 className="font-semibold  text-darker">{item.title}</h3>
          </div>

          {item.type === "Static" ? (
            <Badge className="bg-secondary text-black">Cartaz</Badge>
          ) : (
            <Badge className="bg-primary">
              <PlayCircle size={16} className="mr-1" />
              Reel
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
