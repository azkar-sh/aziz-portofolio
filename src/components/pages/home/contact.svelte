<script>
	import { personalInfo } from '$lib/portfolioData';
</script>

<section id="contact" class="bg-background-1 min-h-screen flex items-center justify-center">
	<div class="px-container flex items-center justify-start w-full h-full">
		<div
			class="flex flex-col justify-center gap-2 text-console text-xl lg:text-3xl xl:text-3xl border-l-2 border-white ps-5"
		>
			<div class="border-l border-white ps-4 translate-x-3 flex flex-col gap-2">
				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<div class="p-1 w-fit">
						<div class=" p-1">
							<div class="p-1 md:p-2 bg-white">
								<span class="text-background-1 font-semibold">Contact</span>
							</div>
						</div>
					</div>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<div class="p-2 flex items-center gap-2">
						<span class="text-white tracking-wide font-semibold">{personalInfo.location}</span>
					</div>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<div class="p-2 flex items-center gap-2">
						<a
							href={personalInfo.whatsappUrl}
							class="text-white tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
							target="__blank"
						>
							{personalInfo.phone}</a
						>
					</div>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<div class="p-2 flex items-center gap-2">
						<a
							href={`mailto:${personalInfo.email}`}
							class="text-white tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1 underline"
							target="__blank"
						>
							{personalInfo.email}</a
						>
					</div>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<div class="p-2 flex items-center gap-2">
						<a
							href={personalInfo.linkedinUrl}
							class="text-white tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
							target="__blank"
						>
							{personalInfo.linkedinLabel}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
