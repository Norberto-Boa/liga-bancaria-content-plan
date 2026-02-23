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
      className="cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02] border-t-4 border-primary"
    >
      <div className="p-4 space-y-4">
        {item.type === "Static" ? (
          <Badge className="bg-secondary text-black">Cartaz</Badge>
        ) : (
          <Badge className="bg-primary">
            <PlayCircle size={16} className="mr-1" />
            Reel
          </Badge>
        )}
        {item.type === "Static" && item.image && (
          <img
            src={item.image.src}
            alt={item.title}
            className="rounded-lg h-58 w-full object-cover"
          />
        )}

        {item.type === "Dynamic" && (
          <div className="aspect-square w-full rounded-lg bg-darker/15 flex items-center justify-center">
            <Video size={48} className="text-white opacity-90" />
            {/* <div className="absolute inset-0 bg-black/10 rounded-lg" /> */}
          </div>
        )}

        <div className="flex items-start justify-between flex-col ">
          <h3 className="font-semibold text-lg text-darker">{item.title}</h3>
        </div>
      </div>
    </Card>
  );
}
