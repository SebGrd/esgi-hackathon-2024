import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

import { Conversation, columns } from "./components/datatable-wip/columns"
import { DataTable } from "./components/datatable-wip/data-table"
import { useEffect, useState } from "react";
import useConversations from "./contexts/useConversations";
import NotifierEmulator from "./components/Emulators/NotifierEmulator";




function App() {
  const conversation = useConversations();
  const [data, setData] = useState<Conversation[]>([]);
  useEffect(() => {
    const interval = setInterval(async () => {
      conversation.list().then((data) => {
        setData(data);
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <header className="p-8">
        <img src="/calmedica-logo.png" alt="Calmedica" className="" />
      </header>
      <main className="px-4">
        <div className="flex gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Emuler un appel</CardTitle>
              <CardDescription>Simule (mp3 + AI) un appel entrant/sortant afin<br /> de le rajouter dans le tableau.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Data mock</p>
            </CardContent>
            <CardFooter>
              <Button>Emuler</Button>
            </CardFooter>
          </Card>
          <NotifierEmulator />
        </div>
        <DataTable columns={columns} data={data} />
      </main>
    </>
  )
}

export default App
