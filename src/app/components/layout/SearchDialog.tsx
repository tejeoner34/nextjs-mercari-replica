import { IoMdSearch } from 'react-icons/io';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetFooter,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from '@/components/ui/sheet';

type SearchDialogProps = {
  child: React.ReactNode;
};

export default function SearchDialog({ child }: SearchDialogProps) {
  return (
    <Sheet key={'bottom'}>
      <SheetTrigger asChild>{child}</SheetTrigger>
      <SheetContent side={'bottom'} className="h-screen">
        <SheetTitle className="hidden">Search modal</SheetTitle>
        <SheetDescription className="hidden">Modal to search information</SheetDescription>
        <SheetHeader className="mt-5 border-b border-primary pb-3">
          <div className="rounded-lg border solid border-border flex items-center px-3 py-1">
            <IoMdSearch size={20} className="" />
            <Input
              type="text"
              placeholder="何をお探しですか"
              className="focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none"
              autoFocus
            />
          </div>
        </SheetHeader>
        <SheetFooter>
          <div>
            <button className="w-full flex justify-between p-3 border-b border-primary">
              カテゴリーから探す
              <span>+</span>
            </button>
            <button className="w-full flex justify-between p-3 border-b border-primary">
              ブランドから探す
              <span>+</span>
            </button>
          </div>
          <div>
            <h2>検索履歴</h2>
            <h3>検索履歴はありません</h3>
          </div>
        </SheetFooter>
        <div></div>
      </SheetContent>
    </Sheet>
  );
}
