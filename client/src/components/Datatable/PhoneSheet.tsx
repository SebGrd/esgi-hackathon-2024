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
import useModel, { MODELS } from "../../contexts/useApi";

export default function PhoneSheet({ calls, conversationId, isNotified }: { calls: Call[], conversationId: string, isNotified: boolean }) {
  const conversations = useModel(MODELS.conversation);
  const [call, setCall] = useState<Call | null>(null);
  const clearNotification = () => {
    conversations.update(conversationId, { newCall: false })
  }
  return (
    <Sheet>
      <SheetTrigger onClick={() => clearNotification()} className={`${!calls.length ? "cursor-not-allowed opacity-25" : ''}`}>
        <div className="relative">
          {isNotified && <div className="absolute size-2 rounded-full bg-red-500 top-0 right-0 animate-pulse"></div>}
          <Icon.Phone />
        </div>
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
          {call !== null && <PhoneSheetCall call={call} />}
        </div>
      </SheetContent>
    </Sheet>
  )
}