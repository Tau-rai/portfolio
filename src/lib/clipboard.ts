import { toast } from "sonner";

export const copyToClipboard = async (text: string, label: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copied`, { description: text });
  } catch {
    toast.error(`Couldn't copy ${label.toLowerCase()}`, { description: text });
  }
};
