export enum MODELS {
  conversation = "conversation",
  emulators = "emulators"
}

export default function useModel() {
  const models = {
    [MODELS.emulators]: {
      emulateNotification: async (title: string, date: Date | undefined, message: string) => {
        date = date ?? new Date();
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
  return models[MODELS.emulators];
}