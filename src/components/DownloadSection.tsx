'use client';

import { Apple, Check } from 'lucide-react';

import { Button } from './ui/button';
import Image from 'next/image';
import React from 'react';

interface DownloadSectionProps {
	title?: string;
	description?: string;
	appStoreLink?: string;
	compatibilityInfo?: string[];
}

export default function DownloadSection({
	title = 'Get PixioX Today',
	description = 'Start organizing your photos smarter, not harder. Download PixioX and rediscover your memories with ease.',
	appStoreLink = 'https://apps.apple.com/app/pixiox',
	compatibilityInfo = [
		'Compatible with iOS 15.0 and later',
		'Optimized for iPhone and iPad',
		'iCloud sync supported',
		'Free updates for life',
	],
}: DownloadSectionProps) {
	return (
		<section
			id='download'
			className='w-full py-20 bg-gradient-to-b from-background to-secondary/20'>
			<div className='container max-w-6xl mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center text-center'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
						{title}
					</h2>
					<p className='text-muted-foreground max-w-2xl mb-8'>
						{description}
					</p>

					<div className='mb-10'>
						<button
							className='
									relative inline-flex items-center justify-center
									rounded-lg font-medium text-sm tracking-normal
									px-4 py-3
									bg-brand-black text-brand-white
									border border-black
									transition-colors
									overflow-hidden
									disabled:pointer-events-none disabled:opacity-50

									before:absolute before:inset-0
									before:bg-[radial-gradient(circle_120px_at_var(--mask-x)_var(--mask-y),rgba(255,255,255,0.2),transparent)]
									before:opacity-0 before:transition-opacity before:duration-700
									hover:before:opacity-100
								'>
							<span className='relative z-10 flex items-center gap-2'>
								<svg
									className='w-4 h-4'
									fill='none'
									viewBox='0 0 14 18'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden='true'>
									<path
										d='M13.5545 6.1362c-.0997.081-1.8609 1.1196-1.8609 3.429 0 2.6712 2.241 3.6162 2.3081 3.6396-.0103.0576-.356 1.2942-1.1816 2.5542-.7361 1.1088-1.5049 2.2158-2.6744 2.2158-1.16953 0-1.47052-.711-2.82064-.711-1.31572 0-1.78354.7344-2.85332.7344-1.06977 0-1.81621-1.026-2.67444-2.286C.8032 14.2326 0 11.934 0 9.7524c0-3.4992 2.17396-5.355 4.31351-5.355 1.13686 0 2.08452.7812 2.79828.7812.67936 0 1.73882-.828 3.03221-.828.4902 0 2.2513.0468 3.4105 1.7856Zm-4.02453-3.267c.53493-.6642.91323-1.5858.91323-2.5074 0-.1278-.0103-.2574-.0326-.3618-.87031.0342-1.90569.6066-2.53001 1.3644-.49017.5832-.94767 1.5048-.94767 2.439 0 .1404.02236.2808.03268.3258.05504.0108.14447.0234.23391.0234.78083 0 1.7629-.5472 2.33046-1.2834Z'
										fill='currentColor'
									/>
								</svg>
								Download
							</span>
						</button>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl'>
						{compatibilityInfo.map((info, index) => (
							<div key={index} className='flex items-center'>
								<Check className='h-5 w-5 text-primary mr-2' />
								<span className='text-sm'>{info}</span>
							</div>
						))}
					</div>

					<div className='mt-16 flex items-center justify-center'>
						<div className='relative'>
							<div className='absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse'></div>
							<Image
								src='/appstore1024.png'
								alt='PixioX Logo'
								width={64}
								height={64}
								className='h-16 w-16 rounded-full border-2 border-primary'
							/>
							<div className='absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/10 animate-pulse delay-300'></div>
						</div>
						<div className='ml-4 text-left'>
							<p className='font-medium'>PixioX Team</p>
							<p className='text-sm text-muted-foreground'>
								Helping you rediscover your memories
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
