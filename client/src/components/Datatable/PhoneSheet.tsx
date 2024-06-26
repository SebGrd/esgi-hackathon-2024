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
import PhoneSheetCall from "./PhoneSheetCall"
import { useState } from "react";

const calls = [{
  id: "1",
  date: "2021-08-30 14h32",
  title: "Notification opération J-1",
  messages: [
    "Notification de l'hoptital de Paris",
    "Vous avez rendez-vous pour votre opération le 31/08/2021 à 14h30",
    "Merci de venir à jeun",
  ]
}, {
  id: "2",
  date: "2021-09-02 14h30",
  title: "Notification opération J+2",
  messages: [
    "Notification de l'hoptital de Paris",
    "Nous esperons que votre rétablissement se passe bien",
    "Si vous avez des douleurs ou des questions, n'hésitez pas à nous contacter",
  ]
}, {
  id: "3",
  date: "2021-09-06 14h30",
  title: "Notification opération J+5",
  messages: [
    "Notification de l'hoptital de Paris",
    "Nous esperons que votre rétablissement s'est bien passé",
    "Si vous avez des retours ou des commentaires, n'hésitez pas à nous contacter",
  ]
}];

export default function PhoneSheet() {
  const [call, setCall] = useState(calls[0]);
  return (
    <Sheet>
      <SheetTrigger>
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
          <PhoneSheetCall call={call} />
        </div>
      </SheetContent>
    </Sheet>
  )
}