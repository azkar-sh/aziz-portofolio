<script>
	import { personalInfo } from '$lib/portfolioData';
</script>

<section id="hero" class="bg-background-1 h-screen">
	<div
		class="px-container flex items-center justify-start w-full text-console text-xl lg:text-3xl xl:text-3xl h-full"
		id="hero-content"
	>
		<div class="border-l border-white ps-4 translate-x-3">
			<div class="flex items-center gap-1">
				<div class="p-1 w-fit">
					<div class=" p-1">
						<div class="p-1 md:p-2 bg-white">
							<span class="text-background-1 font-bold">{personalInfo.greeting}</span>
						</div>
					</div>
				</div>
			</div>

			<div class="flex items-center gap-1">
				<div class="p-2 flex items-center gap-2">
					<span class="text-white tracking-wide font-bold">I'm</span>
					<div class="p-2 bg-white">
						<span class="text-background-1 font-bold tracking-widest"
							>{personalInfo.shortName.toUpperCase()}</span
						>
					</div>
				</div>
			</div>

			<div class="flex items-center gap-1">
				<div class="p-2 flex items-center gap-2">
					<div class="p-2 bg-white">
						<span class="text-background-1 font-bold">{personalInfo.role}</span>
					</div>

					<span class="text-white tracking-wide font-bold hidden md:inline">
						from {personalInfo.location}</span
					>
				</div>
			</div>

			<div class="flex items-center gap-1 md:hidden">
				<div class="p-2 flex items-center gap-2">
					<span class="text-white tracking-wide font-bold"> from {personalInfo.location}</span>
				</div>
			</div>
		</div>
	</div>
</section>
