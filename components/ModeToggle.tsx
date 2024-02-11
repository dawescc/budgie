"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MenubarRadioGroup, MenubarRadioItem, MenubarSeparator } from "./ui/menubar";
import { Laptop, MoonStar, Sun } from "lucide-react";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	return (
		<MenubarRadioGroup value={theme}>
			<MenubarRadioItem
				value='system'
				onClick={() => setTheme("system")}>
				<span className='flex items-center gap-2'>
					<Laptop />
					System
				</span>
			</MenubarRadioItem>
			<MenubarSeparator />
			<MenubarRadioItem
				value='light'
				onClick={() => setTheme("light")}>
				<span className='flex items-center gap-2'>
					<Sun />
					Light
				</span>
			</MenubarRadioItem>
			<MenubarRadioItem
				value='dark'
				onClick={() => setTheme("dark")}>
				<span className='flex items-center gap-2'>
					<MoonStar />
					Dark
				</span>
			</MenubarRadioItem>
		</MenubarRadioGroup>
	);
}
