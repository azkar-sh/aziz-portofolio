<script>
	import { personalInfo } from '$lib/portfolioData';
</script>

<section id="contact" class="bg-background-1 min-h-screen flex items-center justify-center">
	<div class="px-container flex items-center justify-start w-full h-full">
		<div
			class="flex flex-col justify-center gap-2 text-console text-xl lg:text-3xl xl:text-3xl border-l-2 border-white ps-4"
		>
			<div class="flex flex-col md:flex-row md:items-center gap-1">
				<div class="p-1 w-fit">
					<span class="text-console bg-white px-2 py-1 my-4 font-semibold text-background-2 w-fit"
						>Let's Connect!</span
					>
				</div>
			</div>

			<div class="flex flex-col md:flex-row md:items-center gap-1">
				<a
					href={personalInfo.whatsappUrl}
					class="text-white text-inside-project tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
					target="__blank"
				>
					{personalInfo.phone}</a
				>
			</div>

			<div class="flex flex-col md:flex-row md:items-center gap-1">
				<a
					href={`mailto:${personalInfo.email}`}
					class="text-white text-inside-project tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1 underline"
					target="__blank"
				>
					{personalInfo.email}</a
				>
			</div>

			<div class="flex flex-col md:flex-row md:items-center gap-1">
				<a
					href={personalInfo.linkedinUrl}
					class="text-white text-inside-project tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
					target="__blank"
				>
					{personalInfo.linkedinLabel}</a
				>
			</div>

			<div class="flex flex-col md:flex-row md:items-center gap-1">
				<a
					href={personalInfo.resumeUrl}
					class="text-white text-inside-project tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
					target="__blank"
				>
					View my resume</a
				>
			</div>
		</div>
	</div>
</section>
