import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// confirmdialog - hộp thoại xác nhận cho các hành động quan trọng
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  variant?: "default" | "destructive" | "emerald";
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Xác nhận",
  cancelText = "Hủy bỏ",
  isLoading = false,
  variant = "default"
}: ConfirmDialogProps) {
  
  const getButtonClass = () => {
    switch (variant) {
      case "destructive":
        return "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/10";
      case "emerald":
        return "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/10";
      default:
        return "bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/10";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[340px] p-0 overflow-hidden border-none shadow-2xl rounded-sm">
        <div className="p-8 space-y-4 text-center">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-800 text-center leading-relaxed">
              {title}
            </DialogTitle>
            <DialogDescription className="text-xs text-zinc-400 leading-relaxed text-center px-4">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-2 pt-4">
            <Button
              type="button"
              onClick={onConfirm}
              disabled={isLoading}
              className={cn(
                getButtonClass(),
                "text-[10px] font-bold uppercase tracking-widest h-11 rounded-sm transition-all"
              )}
            >
              {isLoading && <Loader2 className="mr-2 h-3 w-3 animate-spin" />}
              {confirmText}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              disabled={isLoading}
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600 h-10 px-6 rounded-sm"
            >
              {cancelText}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
