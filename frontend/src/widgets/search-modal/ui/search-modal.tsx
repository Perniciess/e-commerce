import { UiIconSearch } from '@/shared/ui/icons/search-icon'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { useState } from 'react'

export function UiSearchModal() {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<button type='button' onClick={() => setShowModal(true)}>
				<UiIconSearch className='mr-2' />
			</button>
			{showModal ? (
				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-40'
						onClick={() => setShowModal(false)}
					></div>
					<div className='flex items-center min-h-screen px-4 py-8'>
						<div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
							<div className='mt-2 mb-4'>
								<div className='text-center'>
									<h4 className='text-lg font-medium text-gray-800'>Поиск товаров</h4>
								</div>
							</div>

							<div className='flex items-center justify-center'>
								<UiTextField className='w-3/4' inputProps={{ className: 'rounded-l-md' }} />
								<button type='submit'>
									<UiIconSearch className='rounded-r bg-[#17171BFF] mb-1' color='white' />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}
