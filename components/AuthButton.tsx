import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { KeyRound, LogOut } from "lucide-react";

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
		<div className='flex items-center'>
			<form action={signOut}>
				<Button variant={"destructive"}>
					Logout&nbsp;
					<LogOut />
				</Button>
			</form>
		</div>
	) : (
		<Button
			asChild
			variant={"default"}>
			<Link
				href='/login'
				className='py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover'>
				Login&nbsp;
				<KeyRound />
			</Link>
		</Button>
	);
}
