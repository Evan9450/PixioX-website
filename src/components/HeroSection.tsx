'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import React from 'react';

interface HeroSectionProps {
	title?: string;
	subtitle?: string;
	ctaText?: string;
}

export default function HeroSection({
	title = 'Rediscover Your Memories with PixioX',
	subtitle = 'A powerful photo management app designed for iOS, offering a smarter way to organize, browse, and manage your photos and videos.',
	ctaText = 'Download Now',
}: HeroSectionProps) {
	return (
		<section className="relative w-full min-h-[800px] bg-gradient-to-b from-background to-background/80 flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden pt-20">
			{/* Background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 pb-10">
				{/* Text content */}
				<div className="flex flex-col space-y-6 max-w-xl text-center lg:text-left">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
					<p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<a
							href="https://apps.apple.com/app/pixiox/id6751848707"
							target="_blank"
							rel="noopener noreferrer"
							className="
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
  "
						>
							<span className="relative z-10 flex items-center gap-2">
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 14 18"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										d="M13.5545 6.1362c-.0997.081-1.8609 1.1196-1.8609 3.429 0 2.6712 2.241 3.6162 2.3081 3.6396-.0103.0576-.356 1.2942-1.1816 2.5542-.7361 1.1088-1.5049 2.2158-2.6744 2.2158-1.16953 0-1.47052-.711-2.82064-.711-1.31572 0-1.78354.7344-2.85332.7344-1.06977 0-1.81621-1.026-2.67444-2.286C.8032 14.2326 0 11.934 0 9.7524c0-3.4992 2.17396-5.355 4.31351-5.355 1.13686 0 2.08452.7812 2.79828.7812.67936 0 1.73882-.828 3.03221-.828.4902 0 2.2513.0468 3.4105 1.7856Zm-4.02453-3.267c.53493-.6642.91323-1.5858.91323-2.5074 0-.1278-.0103-.2574-.0326-.3618-.87031.0342-1.90569.6066-2.53001 1.3644-.49017.5832-.94767 1.5048-.94767 2.439 0 .1404.02236.2808.03268.3258.05504.0108.14447.0234.23391.0234.78083 0 1.7629-.5472 2.33046-1.2834Z"
										fill="currentColor"
									/>
								</svg>
								Download
							</span>
						</a>
					</div>
				</div>

				{/* Phone mockup */}
				<div className="relative w-full max-w-md">
					<div className="relative z-20 mx-auto">
						<div className="relative w-[280px] h-[570px] mx-auto rounded-[3rem] border-8 border-gray-800 shadow-xl overflow-hidden">
							{/* Phone frame */}
							<div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-10">
								<div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>
							</div>

							{/* App screenshot */}
							<div className="relative h-full w-full bg-gray-50">
								<Image
									src="/mainPage.jpg"
									alt="PixioX App Interface"
									fill
									className="object-cover"
									priority
								/>

								{/* App UI overlay elements */}
								{/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-8 left-4 right-4">
                    <h3 className="text-white text-lg font-medium mb-2">
                      Monthly Collections
                    </h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {["January", "February", "March"].map((month, i) => (
                        <div
                          key={month}
                          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium text-white ${
                            [
                              "bg-blue-500/80",
                              "bg-green-500/80",
                              "bg-purple-500/80",
                            ][i]
                          }`}
                        >
                          {month}
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
							</div>
						</div>

						{/* Floating feature highlight */}
						<div className="absolute -right-4 bottom-1/3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700">
							<div className="flex items-center gap-3">
								<div className="bg-primary/20 p-2 rounded-full">
									<svg
										className="w-5 h-5 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium">Smart Organization</p>
									<p className="text-xs text-muted-foreground">Auto-sorted collections</p>
								</div>
							</div>
						</div>

						<div className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700">
							<div className="flex items-center gap-3">
								<div className="bg-blue-500/20 p-2 rounded-full">
									<svg
										className="w-5 h-5 text-blue-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
										></path>
									</svg>
								</div>
								<div>
									<p className="text-sm font-medium">Live Photo Support</p>
									<p className="text-xs text-muted-foreground">Native playback</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
