import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { Call } from "./PhoneSheetCall"


type Calls = Call[]

export default function PhoneSheetCalls({ calls, setCall }: { calls: Calls, setCall: (call: Call) => void }) {
  return (
    <ScrollArea className="h-48 rounded-md border mb-8">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Appels</h4>
        {calls.map((call) => (
          <div key={`calls-${call.id}`}>
            <div
              className="flex justify-between items-center p-2 rounded hover:cursor-pointer hover:bg-zinc-100"
              onClick={() => setCall(call)}
            >
              <div className="text-sm">
                {call.title}
              </div>
              <div>
                <time className="text-[10px] text-gray-500">{call.date.toLocaleString()}</time>
              </div>
            </div>
            <div className="px-2">
              <Separator className="my-1" />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}