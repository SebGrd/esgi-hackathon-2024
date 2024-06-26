import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { DatePicker } from "../ui/datepicker";
import { Input } from "../ui/input";
import useEmulators from "../../contexts/useEmulators";

export default function NotifierEmulator() {
  const emulators = useEmulators()
  const [date, setDate] = useState<Date>()
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const EmulateNotification = () => {
    emulators.emulateNotification(title, date, message);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emuler une notif. fixe</CardTitle>
        <CardDescription>Simule un Text to Speech envoyé par appel téléphonique<br /> au patient de type "suivis fixe" (pas SMS)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Input placeholder="Titre de la notif" onChange={(e) => setTitle(e.target.value)}/>
          <Input placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
          <DatePicker onChange={(e) => setDate(e)}/>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => EmulateNotification()}>Emuler</Button>
      </CardFooter>
    </Card>
  )
}