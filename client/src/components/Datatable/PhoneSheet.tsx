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
<<<<<<< HEAD
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
=======

export default function PhoneSheet({ calls }: { calls: Call[]}) {
  const [call, setCall] = useState<Call | null>(null);
  return (
    <Sheet>
      <SheetTrigger className={`${!calls.length ? "cursor-not-allowed opacity-25" : ''}`}>
        <Icon.Phone />
>>>>>>> 02b0968 (Add untracked files before rebase)
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
<<<<<<< HEAD
          {call !== null && <PhoneSheetCall call={call} />}
=======
          {call !== null&&  <PhoneSheetCall call={call} />}
>>>>>>> 02b0968 (Add untracked files before rebase)
        </div>
      </SheetContent>
    </Sheet>
  )
}