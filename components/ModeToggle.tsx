"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MenubarRadioGroup, MenubarRadioItem, MenubarSeparator } from "./ui/menubar";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	return (
		<MenubarRadioGroup value={theme}>
			<MenubarRadioItem
				value='system'
				onClick={() => setTheme("system")}>
				System
			</MenubarRadioItem>
			<MenubarSeparator />
			<MenubarRadioItem
				value='light'
				onClick={() => setTheme("light")}>
				Light
			</MenubarRadioItem>
			<MenubarRadioItem
				value='dark'
				onClick={() => setTheme("dark")}>
				Dark
			</MenubarRadioItem>
		</MenubarRadioGroup>
	);
}
