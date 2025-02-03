import clsx from 'clsx'
import { PropsWithRef, TableHTMLAttributes } from 'react'

export type UiTableProps = {
	className?: string
	headers: string[]
	data: (string | JSX.Element)[][]
	tableProps?: PropsWithRef<TableHTMLAttributes<HTMLTableElement>>
}

export function UiTable({ className, headers, data, tableProps }: UiTableProps) {
	return (
		<table {...tableProps} className={clsx(className, 'w-full divide-y divide-gray-200 border-collapse')}>
			<thead className='bg-gray-50'>
				<tr>
					{headers.map((header, index) => (
						<th
							key={index}
							scope='col'
							className='pl-8 py-4 text-left text-xs font-medium bg-zinc-200 text-black uppercase tracking-wider'
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody className='bg-white divide-y divide-gray-200 border'>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex} className='pl-8 py-4 border-b whitespace-nowrap text-sm text-black'>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
