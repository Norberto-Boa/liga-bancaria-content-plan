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
          <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 shadow-2xl space-y-4 ">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-xl font-bold text-primary">
                {item.title}
              </Dialog.Title>

              <Dialog.Close>
                <X />
              </Dialog.Close>
            </div>

            {item.type === "Static" && item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full h-60 object-cover"
              />
            )}

            <p className="text-gray-700">{item.caption}</p>

            {item.type === "Dynamic" && (
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                {item.script?.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            )}

            <div className="flex gap-3 text-gray-500 mt-4">
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
