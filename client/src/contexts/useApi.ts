import { Conversation } from "../components/datatable-wip/columns";

export enum MODELS {
  conversation = "conversation",
  emulators = "emulators"
}

type PatchReturnObject = {
  acknowledged: boolean,
  modifiedCount: number,
  upsertedId: string | null,
  upsertedCount: number,
  matchedCount: number
}

export default function useModel(model: MODELS) {
  const models = {
    [MODELS.conversation]: {
      list: async () => {
        const res = await fetch("http://localhost:3000/conversation");
        return await res.json() as Conversation[];
      },
      update: async (id: string, data: Partial<Conversation>) => {
        const res = await fetch(`http://localhost:3000/conversation/${id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        return await res.json() as PatchReturnObject;
      }
    },
    [MODELS.emulators]: {
      emulateNotification: async (title: string, date: Date, message: string) => {
        const res = await fetch("http://localhost:3000/emulate-outbound-call", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, date, message }),
        });
        return await res.json();
      }
    }
  }
  return models[model];
}