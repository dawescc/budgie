import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

export default function Footer() {
	return (
		<footer className='w-full px-8 pb-6 pt-3 flex flex-col gap-[1rem] place-items-center text-xs'>
			<span className='bg-muted font-semibold select-none inline-flex gap-1 items-center ring-1 ring-inset ring-border py-1.5 px-2.5 rounded-lg shadow-sm'>
				<span>Made with</span>
				<HeartHandshake />
			</span>
			<Separator className='max-w-xs' />
			<span className='text-sm flex gap-4'>
				<Link
					className='inline-flex items-center gap-[0.025rem] hover:underline'
					href='https://github.com/dawescc'>
					Github
					<ArrowUpRight className='size-4' />
				</Link>
				<Link
					className='inline-flex items-center gap-[0.025rem] hover:underline'
					href='https://twitter.com/dawescc'>
					Twitter
					<ArrowUpRight className='size-4' />
				</Link>
			</span>
		</footer>
	);
}
