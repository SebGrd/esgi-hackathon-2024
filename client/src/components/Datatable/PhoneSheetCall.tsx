import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const calls = [{
  date: "2021-08-30 14h32",
  title: "Notification opération J-1",
  messages: [
    "Notification de l'hoptital de Paris",
    "Vous avez rendez-vous pour votre opération le 31/08/2021 à 14h30",
    "Merci de venir à jeun",
  ]
}, {
  date: "2021-09-02 14h30",
  title: "Notification opération J+2",
  messages: [
    "Notification de l'hoptital de Paris",
    "Nous esperons que votre rétablissement se passe bien",
    "Si vous avez des douleurs ou des questions, n'hésitez pas à nous contacter",
  ]
}, {
  date: "2021-09-06 14h30",
  title: "Notification opération J+5",
  messages: [
    "Notification de l'hoptital de Paris",
    "Nous esperons que votre rétablissement s'est bien passé",
    "Si vous avez des retours ou des commentaires, n'hésitez pas à nous contacter",
  ]
}];

export type Call = {
  id: string
  date: string
  title: string
  messages: string[]
}

export default function PhoneSheetCall({ call }: { call: Call }) {
  return (
    <ScrollArea className="h-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">{call.title}</h4>
        {call.messages.map((message, i) => (
          <div
            key={`call-${call.id}-${i}`}
            className="flex flex-col p-2 rounded bg-zinc-100 mb-2"
          >
            <div className="text-sm">
              {message}
            </div>
            <div>
              <time className="text-xs text-gray-500">{call.date}</time>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}