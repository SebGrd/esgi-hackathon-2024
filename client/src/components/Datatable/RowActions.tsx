import { Conversation } from "../datatable-wip/columns";
import * as Icon from "../ui/icons";
import PhoneSheet from "./PhoneSheet";

export default function RowActions({ conversation }: { conversation: Conversation }) {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <Icon.Trash />
      </li>
      <li>
        <Icon.Edit />
      </li>
      <li>
        <Icon.Pause />
      </li>
      <li>
        <Icon.Play />
      </li>
      <li>
        <Icon.Chat />
      </li>
      <li>
        <PhoneSheet calls={conversation.calls ?? []}/>
      </li>
      <li>
        <Icon.Download />
      </li>
      <li>
        <Icon.Eye />
      </li>
      <li>
        <Icon.Photo />
      </li>
      <li>
        <Icon.Time />
      </li>
      <li>
        <Icon.Info />
      </li>
    </ul>
  )
}