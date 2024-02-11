import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Banner() {
	return (
		<div className='p-2'>
			<Alert className='bg-[#FFAB6E]/20 border-[#FFAB6E]/50'>
				<Terminal className='h-4 w-4' />
				<AlertTitle>Welcome back!</AlertTitle>
				<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			</Alert>
		</div>
	);
}
