// src/types/global.d.ts
interface Toast {
    id: string;
    title?: string;
    description?: string;
    action?: React.ReactNode;
  }
  
  declare module '@/lib/utils' {
    export function cn(...inputs: ClassValue[]): string;
  }
  
  declare module '@/hooks/use-toast' {
    export function useToast(): {
      toast: (props: Toast) => void;
      dismiss: (toastId?: string) => void;
      toasts: Toast[];
    };
  }