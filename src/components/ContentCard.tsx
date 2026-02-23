import type { ContentItem } from "../data/contentPlan";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { PlayCircle } from "lucide-react";

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
        {item.type === "Static" && item.image && (
          <img
            src={item.image.src}
            alt={item.title}
            className="rounded-lg h-48 w-full object-cover"
          />
        )}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-darker">{item.title}</h3>

          {item.type === "Static" ? (
            <Badge className="bg-secondary text-black">Estatico</Badge>
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
