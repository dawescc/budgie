import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { KeyRound, LogIn, LogOut } from "lucide-react";
import { MenubarItem } from "./ui/menubar";

export default async function AuthButton() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const signOut = async () => {
		"use server";

		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		await supabase.auth.signOut();
		return redirect("/login");
	};

	return user ? (
		<form action={signOut}>
			<button className='w-full relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-destructive/10 focus:bg-destructive/10 cursor-default focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
				<span className='w-full flex items-center gap-2'>
					<LogOut />
					Sign Out
				</span>
			</button>
		</form>
	) : (
		<MenubarItem>
			<Link
				className='w-full cursor-default flex items-center gap-2'
				href='/login'>
				<LogIn />
				Sign In
			</Link>
		</MenubarItem>
	);
}
