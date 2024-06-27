import { ScrollArea } from "../ui/scroll-area"

export type Call = {
  id: string
  date: Date
  title: string
  messages: string[]
}

export default function PhoneSheetCall({ call }: { call: Call }) {
  return (
    <>
      <h2 className="font-medium mb-2">Retranscription :</h2>
      <ScrollArea className="min-h-96 rounded-md border">
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
                <time className="text-xs text-gray-500">{call.date.toLocaleString()}</time>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}