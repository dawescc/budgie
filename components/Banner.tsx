import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Banner() {
	return (
		<div className='p-2'>
			<Alert className='bg-muted'>
				<Terminal className='h-4 w-4' />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>You can add components to your app using the cli.</AlertDescription>
			</Alert>
		</div>
	);
}
