import { Conversation } from "../components/datatable-wip/columns";

export enum MODELS {
  conversation = "conversation"
}


export default function useModel(model: MODELS) {
  const models = {
    [MODELS.conversation]: {
      list: async () => {
        const res = await fetch("http://localhost:3000/conversation");
        return await res.json() as Conversation[];
      },
    }
  }
  return models[model];
}