import { ModeToggle } from "@/components/ModeToggle";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { HeartHandshake } from "lucide-react";
import { cookies } from "next/headers";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const totalCards = 420;

export default async function Index() {
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
					{Array.from({ length: totalCards }).map((_, index) => (
						<Card key={index}>
							<CardHeader>
								<CardTitle>Card Number {index + 1}</CardTitle>
								<CardDescription>Hey, what's up {index + 1}</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									This is card number {index + 1} out of {totalCards}
								</p>
							</CardContent>
							<CardFooter>
								<Button>{index + 1}</Button>
							</CardFooter>
						</Card>
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
