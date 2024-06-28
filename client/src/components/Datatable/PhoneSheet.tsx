import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import * as Icon from "../ui/icons"
import PhoneSheetCalls from "./PhoneSheetCalls"
import PhoneSheetCall, { Call } from "./PhoneSheetCall"
import { useState } from "react";

export default function PhoneSheet({ calls }: { calls: Call[]}) {
  const [call, setCall] = useState<Call | null>(null);
  return (
    <Sheet>
      <SheetTrigger className={`${!calls.length ? "cursor-not-allowed opacity-25" : ''}`}>
        <Icon.Phone />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Liste des appels</SheetTitle>
          <SheetDescription>
            Tous les appels sortant ou entrant du patient.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <PhoneSheetCalls calls={calls} setCall={setCall} />
          {call !== null&&  <PhoneSheetCall call={call} />}
        </div>
      </SheetContent>
    </Sheet>
  )
}