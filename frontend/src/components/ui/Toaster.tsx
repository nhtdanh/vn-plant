import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      theme="light"
      className="toaster group font-sans"
      position="bottom-right"
      toastOptions={{
        style: {
          width: "fit-content",
          minWidth: "220px",
          maxWidth: "320px",
        },
        classNames: {
          toast:
            "group toast rounded-none border border-border bg-background text-foreground shadow-sm hover:shadow-[var(--shadow-soft-hover)] transition-all duration-300 px-4 py-3",
          description: "text-muted-foreground text-xs leading-snug",
          actionButton:
            "bg-primary text-primary-foreground font-sans font-semibold uppercase tracking-widest text-[10px] rounded-none py-2 px-3",
          cancelButton:
            "bg-muted text-muted-foreground font-sans font-semibold uppercase tracking-widest text-[10px] rounded-none py-2 px-3",
          success: "text-primary border-primary/20",
          error: "text-destructive border-destructive/20",
        },
      }}
    />
  );
}
