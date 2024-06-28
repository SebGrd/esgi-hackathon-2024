import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import RowActions from "../Datatable/RowActions"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export enum STATUS {
  orange = "orange",
  jaune = "jaune",
  bleu = "bleu",
  gris = "gris",
}

export enum TYPE_SUIVIS {
  fixe = "fixe",
  mobile = "mobile",
}

export enum SENDER {
  medic = "medic",
  patient = "patient",
}

export enum STATE {
  active = "active",
  inactive = "inactive",
}

export type Conversation = {
  "_id": string
  "status": STATUS,
  "type": TYPE_SUIVIS,
  "step": string,
  "protocole": string,
  "phone": string,
  "referenceDate": Date,
  "state": STATE,
  "operationNumber": number,
  "lastname": string,
  "firstname": string,
  "birthdate": Date,
  "medic": string,
<<<<<<< HEAD
  "newCall": boolean,
=======
>>>>>>> 02b0968 (Add untracked files before rebase)
  "sms": {
    "date": Date,
    "sender": SENDER,
    "message": string
  }[],
  "calls": {
    "id": string,
    "date": Date,
    "title": string,
    "messages": string[]
  }[]
}

export const columns: ColumnDef<Conversation>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const colors = {
        orange: "bg-orange-500",
        jaune: "bg-yellow-500",
        bleu: "bg-blue-500",
        gris: "bg-gray-500",
      }
      return (
        <div className={cn("size-6 rounded-full", colors[row.getValue("status") as Conversation["status"]])}></div>
      )
    }
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <RowActions conversation={row.original} />
      )
    }
  },
  {
    accessorKey: "step",
    header: "Etape",
  },
  {
    accessorKey: "protocole",
    header: "Protocole",
  },
  {
    accessorKey: "phone",
    header: "Téléphone",
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type de suivis
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const type = row.getValue("type") as Conversation["type"];
      return <Badge variant={type === 'fixe' ? 'secondary' : 'outline'}>
        {type}
      </Badge>
    }
  },
  {
    accessorKey: "referenceDate",
    header: "Date de référence",
    cell: ({ row }) => {
      return <time>{[row.getValue("referenceDate") as Conversation["referenceDate"]].toLocaleString()}</time>
    }
  },
  {
    accessorKey: "state",
    header: "Etat",
  },
  {
    accessorKey: "operationNumber",
    header: "Numéro d'opération",
  },
  {
    accessorKey: "lastname",
    header: "Nom",
  },
  {
    accessorKey: "firstname",
    header: "Prénom",
  },
  {
    accessorKey: "birthdate",
    header: "Date de naissance",
    cell: ({ row }) => {
      return <time>{[row.getValue("birthdate") as Conversation["referenceDate"]].toLocaleString()}</time>
    }
  },
  {
    accessorKey: "medic",
    header: "Médecin",
  },
]
