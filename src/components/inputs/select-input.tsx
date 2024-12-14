// Dependencies: pnpm install lucide-react

import {Input} from '@/components/ui/input';
import {ChevronDown} from 'lucide-react';

export default function SelectInput() {
	return <div className="flex rounded-lg shadow-sm shadow-black/5">
		<Input
			id="input-18"
			className="-me-px rounded-e-none shadow-none focus-visible:z-10"
			placeholder="Amount"
			type="number"
		/>
		<div className="relative inline-flex">
			<select
				className="peer inline-flex h-full appearance-none items-center rounded-none rounded-e-lg border border-input bg-background pe-8 ps-3 text-sm text-muted-foreground transition-shadow hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Domain suffix"
			>
				<option>€</option>
				<option>%</option>
			</select>
			<span
				className="pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" role="img"/>
          </span>
		</div>
	</div>;
}