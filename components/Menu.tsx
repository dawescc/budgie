import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import AuthButton from "./AuthButton";
import { ModeToggle } from "./ModeToggle";

import { Link as LinkIcon, ArrowUpRight, Backpack, Cog, Megaphone } from "lucide-react";
import Link from "next/link";

export default function Menu() {
	return (
		<Menubar className='px-4 border-x-0 border-t-0 sticky top-0 z-10'>
			<MenubarMenu>
				<MenubarTrigger className='font-black'>
					<Backpack height='1.0rem' />
					Things
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<Link
							className='w-full inline-flex items-center gap-2 cursor-default'
							href={"/about"}>
							<LinkIcon />
							About
						</Link>
					</MenubarItem>
					<MenubarItem>
						<Link
							className='w-full inline-flex items-center gap-2 cursor-default'
							href={"https://vercel.com/"}>
							<Megaphone />
							Announcements
						</Link>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<Link
							className='w-full inline-flex items-center gap-2 cursor-default'
							href={"/preferences"}>
							<Cog />
							Preferences
						</Link>
					</MenubarItem>
					<MenubarSeparator />
					<AuthButton />
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Appearance</MenubarTrigger>
				<MenubarContent>
					<ModeToggle />
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
