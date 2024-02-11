import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default async function Index() {
	return (
		<div className='h-full w-full flex flex-col'>
			<Menu />

			<main className='flex-1 flex flex-col gap-6 px-2 py-4'>
				<div className='flex-1 rounded-[0.5rem] border bg-background shadow-sm'>
					<div className='flex-col md:flex divide-y-[0.025rem]'></div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
