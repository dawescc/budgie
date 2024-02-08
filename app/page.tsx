import { HeartHandshake } from "lucide-react";
import Menu from "@/components/Menu";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";

export default async function Index() {
	return (
		<div className='h-full w-full flex flex-col'>
			<Menu />

			<Banner />

			<Hero />

			<main className='flex-1 flex flex-col gap-6 px-4 py-10'>
				<h2 className='font-bold text-4xl mb-4'>Hi</h2>
				<div className='flex flex-col gap-4'>Hi</div>
			</main>

			<footer className='w-full border-t border-t-border p-8 flex justify-center text-center text-xs'>
				<span className='bg-muted font-semibold select-none inline-flex items-center ring-1 ring-inset ring-border py-1.5 px-2.5 rounded-lg shadow-sm'>
					Made with &nbsp;
					<HeartHandshake />
				</span>
			</footer>
		</div>
	);
}
