import type { ContentItem, Platform } from "@/data/contentPlan";
import * as Dialog from "@radix-ui/react-dialog";
import { Facebook, Instagram, Linkedin, MessageCircle, X } from "lucide-react";

interface Props {
  item: ContentItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContentModal({ item, open, onOpenChange }: Props) {
  const renderIcon = (platform: Platform) => {
    switch (platform.name) {
      case "instagram":
        return <Instagram size={16} />;
      case "facebook":
        return <Facebook size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "whatsapp":
        return <MessageCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-darker/60 backdrop-blur-sm">
          <Dialog.Content
            className="fixed
              top-1/2 left-1/2
              max-w-lg
              -translate-x-1/2 -translate-y-1/2
              bg-white
              rounded-xl
              shadow-2xl
              flex flex-col
              max-h-[95vh]
              overflow-hidden
              "
          >
            <div className="flex justify-between items-center p-4 border-b">
              <Dialog.Title className="text-lg font-bold text-primary">
                {item.title}
              </Dialog.Title>

              <Dialog.Close className="text-gray-500 hover:text-black cursor-pointer">
                <X />
              </Dialog.Close>
            </div>

            <div className="flex-1 px-4 py-2 space-y-3 overflow-y-auto sm:overflow-hidden">
              {item.type === "Static" && item.image && (
                <div
                  className={`w-full ${item.image.aspectRatio === "1:1" ? "max-w-105" : "max-w-74"} mx-auto mt-4 overflow-hidden rounded-lg ${item.image.aspectRatio === "1:1" ? "aspect-square" : "aspect-4/5"}`}
                >
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className={`rounded-lg w-full object-cover ${item.image.aspectRatio === "1:1" ? "aspect-square" : "aspect-4/5"}`}
                  />
                </div>
              )}

              <p className="text-gray-700">{item.caption}</p>

              {item.type === "Dynamic" && (
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {item.script?.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="px-5 py-3 border-t flex gap-3 text-gray-500">
              {item.platforms.map((p) => (
                <div key={p.name}>{renderIcon(p)}</div>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
