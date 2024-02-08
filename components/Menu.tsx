import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import AuthButton from "./AuthButton";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Menu() {
	return (
		<Menubar className='px-4 border-x-0 border-t-0'>
			<MenubarMenu>
				<MenubarTrigger>
					<Logo />
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<Link
							className='w-full inline-flex items-center gap-2'
							href={"/about"}>
							About
						</Link>
					</MenubarItem>
					<MenubarItem>
						<Link
							className='w-full inline-flex items-center gap-2'
							href={"https://vercel.com/"}>
							Home
							<ArrowUpRight />
						</Link>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Preferences</MenubarItem>
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
