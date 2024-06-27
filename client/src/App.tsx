import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

import { STATE, STATUS, TYPE_SUIVIS, columns } from "./components/datatable-wip/columns"
import { DataTable } from "./components/datatable-wip/data-table"




function App() {
  const data = [
    { "_id": "667bdbd702bcd2adf29e850e", "type": TYPE_SUIVIS.fixe, "step": "J+5", "protocole": "Protocole exemple", "phone": "0698765432", "referenceDate": new Date("06/24/2024 07:00:00"), "state": STATE.active, "operationNumber": 3297, "lastname": "Doe", "firstname": "John", "birthdate": new Date("02/01/1996"), "medic": "Dr. Mundo", "sms": [], "calls": [{ "id": "1", "title": "Notification opération J+1", "date": new Date("06/24/2024 07:00:00"), "messages": ["Notification de l'Hoptital de Paris. Vous avez un rendez vous demain à 14h. Merci de venir a jeun."] }], "status": STATUS.jaune },
    { "_id": "667bdbd702bcd2adf29e8501", "type": TYPE_SUIVIS.fixe, "step": "J+1", "protocole": "Protocole exemple", "phone": "0345678976", "referenceDate": new Date("06/24/2024 07:00:00"), "state": STATE.active, "operationNumber": 3297, "lastname": "Doe", "firstname": "John", "birthdate": new Date("02/01/1996"), "medic": "Dr. Mundo", "sms": [], "calls": [{ "id": "1", "title": "Notification opération J-1", "date": new Date("06/24/2024 07:00:00"), "messages": ["Notification de l'Hoptital de Paris. Vous avez un rendez vous demain à 14h. Merci de venir a jeun."] }], "status": STATUS.gris }
  ];
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
          <Card>
            <CardHeader>
              <CardTitle>Emuler une notif. fixe</CardTitle>
              <CardDescription>Simule un Text to Speech envoyé par appel téléphonique<br /> au patient de type "suivis fixe" (pas SMS)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Data mock</p>
            </CardContent>
            <CardFooter>
              <Button>Emuler</Button>
            </CardFooter>
          </Card>
        </div>

        <DataTable columns={columns} data={data} />

        {/* <Datatable /> */}
      </main>
    </>
  )
}

export default App
