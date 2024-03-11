import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "./components/ui/label";

export default function App() {
  return (
    <div className="p-6 max-w-4xl space-y-4 mx-auto">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do pedido" className="w-auto" />
          <Input name="name" placeholder="nome do produto" />
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>
                Criar um novo produto no sistema
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-4" id="name" />
              </div>

              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-4" id="price" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit" variant="ghost">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>Basd23985</TableCell>
                  <TableCell>Produto {i}</TableCell>
                  <TableCell>R$ 192,00</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
