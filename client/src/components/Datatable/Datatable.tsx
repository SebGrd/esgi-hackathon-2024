import RowActions from "./RowActions"
import { Badge } from "../ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

export default function Datatable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[125px]"></TableHead>
          <TableHead>Actions</TableHead>
          <TableHead className="w-[50px]">Etape</TableHead>
          <TableHead>Protocole</TableHead>
          <TableHead>Tel. protable</TableHead>
          <TableHead>Suivis</TableHead>
          <TableHead>Date de référence</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell><Badge>En attente</Badge></TableCell>
          <TableCell><RowActions/></TableCell>
          <TableCell className="font-medium">J+1</TableCell>
          <TableCell>PROTO</TableCell>
          <TableCell>098765432321</TableCell>
          <TableCell>SMS</TableCell>
          <TableCell>20/04/2024 07:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Badge variant="secondary">Notifié</Badge></TableCell>
          <TableCell><RowActions/></TableCell>
          <TableCell className="font-medium">J-5</TableCell>
          <TableCell>PROTO</TableCell>
          <TableCell>045678976523</TableCell>
          <TableCell>Fixe</TableCell>
          <TableCell>20/04/2024 07:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Badge variant="destructive">Urgence</Badge></TableCell>
          <TableCell><RowActions/></TableCell>
          <TableCell className="font-medium">J-0</TableCell>
          <TableCell>PROTO</TableCell>
          <TableCell>092648362846</TableCell>
          <TableCell>Fixe</TableCell>
          <TableCell>20/04/2024 07:00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

