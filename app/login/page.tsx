import { signIn } from "@/components/actions";

export default function Login({ searchParams }: { searchParams: { message: string } }) {
	return (
		<div className='h-dvh w-full flex items-center transition-all'>
			<form
				className='m-auto w-full max-w-md flex flex-col gap-8'
				action={signIn}>
				<div className='flex flex-col gap-2'>
					<label
						className=''
						htmlFor='email'>
						Email
					</label>
					<input
						className=''
						name='email'
						autoComplete='email'
						id='email'
						placeholder='you@example.com'
						required
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						className=''
						htmlFor='password'>
						Password
					</label>
					<input
						className=''
						type='password'
						id='password'
						autoComplete='password'
						name='password'
						placeholder='••••••••'
						required
					/>
				</div>
				{searchParams?.message && <p className=''>{searchParams.message}</p>}
				<button disabled>Sign In</button>
			</form>
		</div>
	);
}
