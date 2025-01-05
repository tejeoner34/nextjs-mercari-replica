import { Sheet, SheetClose, SheetFooter, SheetTrigger, SheetContent } from '@/components/ui/sheet';

type SearchDialogProps = {
  child: React.ReactNode;
};

export default function SearchDialog({ child }: SearchDialogProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{child}</SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4"></div>
      </SheetContent>
    </Sheet>
  );
}
