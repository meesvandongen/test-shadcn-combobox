"use client";

import { CheckIcon } from "lucide-react";
import * as React from "react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

function generateEntries() {
	const entries = [];
	for (let i = 0; i < 26; i++) {
		for (let j = 0; j < 26; j++) {
			const value = String.fromCharCode(97 + i) + String.fromCharCode(97 + j);
			entries.push({
				value: value,
				label: value.toUpperCase(),
			});
		}
	}
	return entries;
}

const entries = generateEntries();

export function ExampleCommand() {
	const [value, setValue] = React.useState("");

	return (
		<Command className="rounded-lg border shadow-md">
			<CommandInput placeholder="Search entry..." />
			<CommandList>
				<CommandEmpty>No entry found.</CommandEmpty>
				<CommandGroup>
					{entries.map((entry) => (
						<CommandItem
							key={entry.value}
							value={entry.value}
							onSelect={(currentValue) => {
								setValue(currentValue === value ? "" : currentValue);
							}}
						>
							<CheckIcon
								className={cn(
									"mr-2 h-4 w-4",
									value === entry.value ? "opacity-100" : "opacity-0",
								)}
							/>
							{entry.label}
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</Command>
	);
}
