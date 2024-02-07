import { ModeToggle } from "@/components/ModeToggle";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { HeartHandshake } from "lucide-react";
import { cookies } from "next/headers";

export default async function Index() {
	const cookieStore = cookies();

	const canInitSupabaseClient = () => {
		// This function is just for the interactive tutorial.
		// Feel free to remove it once you have Supabase connected.
		try {
			createClient(cookieStore);
			return true;
		} catch (e) {
			return false;
		}
	};

	const isSupabaseConnected = canInitSupabaseClient();

	return (
		<div className='h-full w-full flex flex-col'>
			<nav className='w-full flex justify-center h-16 border-b border-b-border'>
				<div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
					<AuthButton />
					<ModeToggle />
				</div>
			</nav>

			<main className='flex-1 flex flex-col gap-6 px-4 py-10'>
				<h2 className='font-bold text-4xl mb-4'>Hi</h2>
				<div className='flex flex-col gap-4'>
					{Array.from({ length: 420 }).map((_, index) => (
						<h3 className='font-bold text-2xl'>Hello for the {index + 1}th time</h3>
					))}
				</div>
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
