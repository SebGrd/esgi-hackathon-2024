import Datatable from "./components/Datatable/Datatable"
import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"




function App() {
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

        <Datatable />
      </main>
    </>
  )
}

export default App
