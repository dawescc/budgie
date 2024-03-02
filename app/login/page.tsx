import { signIn } from "@/components/actions";

export default function Login({ searchParams }: { searchParams: { message: string } }) {
	return (
		<div className=''>
			<form
				className=''
				action={signIn}>
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
				<button>Sign In</button>
				{searchParams?.message && <p className=''>{searchParams.message}</p>}
			</form>
		</div>
	);
}
