"use client";

import { Command } from "cmdk";
import { CheckIcon } from "lucide-react";
import * as React from "react";

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

export function ExampleCmdk() {
	const [value, setValue] = React.useState("");

	return (
		<Command>
			<Command.Input placeholder="Search entry..." />
			<Command.List style={{ maxHeight: "300px", overflow: "auto" }}>
				<Command.Empty>No entry found.</Command.Empty>
				<Command.Group>
					{entries.map((entry) => (
						<Command.Item
							key={entry.value}
							value={entry.value}
							onSelect={(currentValue) => {
								setValue(currentValue === value ? "" : currentValue);
							}}
						>
							{value === entry.value && <CheckIcon />}
							{entry.label}
						</Command.Item>
					))}
				</Command.Group>
			</Command.List>
		</Command>
	);
}
