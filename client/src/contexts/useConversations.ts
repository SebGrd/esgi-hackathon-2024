import { Conversation } from "../components/datatable-wip/columns";

export enum MODELS {
  conversation = "conversation",
}

type PatchReturnObject = {
  acknowledged: boolean,
  modifiedCount: number,
  upsertedId: string | null,
  upsertedCount: number,
  matchedCount: number
}


export default function useConversations() {
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
  }
  return models[MODELS.conversation];
}