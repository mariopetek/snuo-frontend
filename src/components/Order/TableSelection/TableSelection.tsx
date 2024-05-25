import { useOrderContext } from '@/context/OrderContext'
import { Table } from '@/model/table'

import styles from './TableSelection.module.css'

type TableSelectionProps = {
    tables: Table[]
}

export default function TableSelection({ tables }: TableSelectionProps) {
    const { selectedTable, setSelectedTable } = useOrderContext()
    return (
        <div className={styles.selectionContainer}>
            <label className={styles.tablesLabel} htmlFor="tables">
                Stol:
            </label>
            <div className={styles.selectWrapper}>
                <select
                    title="Odaberi stol"
                    className={styles.tableSelection}
                    name="tables"
                    id="tables"
                    value={selectedTable === null ? '' : selectedTable.br_stol}
                    onChange={e => {
                        const selectedTableNumber = Number(e.target.value)
                        const selectedTable = tables.find(
                            table => table.br_stol === selectedTableNumber
                        )
                        setSelectedTable(
                            selectedTable === undefined ? null : selectedTable
                        )
                    }}>
                    <option value="">Odaberi stol</option>
                    {tables.map(table => (
                        <option key={table.br_stol} value={table.br_stol}>
                            {table.br_stol}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
