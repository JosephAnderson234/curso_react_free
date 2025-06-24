import { useState } from "react";

import {
    createColumnHelper,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    ColumnFiltersState,
    flexRender
} from "@tanstack/react-table";

interface Person {
    name: string;
    age: number;
    job: string;
}

const data: Person[] = [
    { name: "Carlos", age: 30, job: "Ingeniero" },
    { name: "Ana", age: 25, job: "Diseñadora" },
    { name: "Luis", age: 40, job: "Gerente" },
    { name: "Marta", age: 29, job: "Desarrolladora" },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor("name", {
        header: "Nombre",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
        header: "Edad",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job", {
        header: "Puesto",
        cell: (info) => info.getValue(),
    }),
];



export default function TenStackTable() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable<Person>({
        data,
        columns,
        state: { columnFilters },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="p-4 bg-[var(--color-background)] text-[var(--color-text)]">
            <input
                className="mb-2 px-2 py-1 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)]"
                placeholder="Filtrar por nombre"
                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
            />
            <table className="w-full border-collapse">
                <thead className="bg-[var(--color-primary)] text-white">
                    {table.getHeaderGroups().map((hg) => (
                        <tr key={hg.id}>
                            {hg.headers.map((h) => (
                                <th
                                    className="px-4 py-2 cursor-pointer border-b border-[var(--color-border)]"
                                    key={h.id}
                                    onClick={h.column.getToggleSortingHandler()}
                                >
                                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr className="hover:bg-[var(--color-secondary)]" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    className="px-4 py-2 border-b border-[var(--color-border)]"
                                    key={cell.id}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}