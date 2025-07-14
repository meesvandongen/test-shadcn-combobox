"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
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

export function ExampleCombobox() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? entries.find((entry) => entry.value === value)?.label
						: "Select entry..."}
					<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
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
										setOpen(false);
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
			</PopoverContent>
		</Popover>
	);
}
