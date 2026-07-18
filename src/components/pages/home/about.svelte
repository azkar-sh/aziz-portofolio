<script>
	import { aboutData } from '$lib/portfolioData';
</script>

<section id="about" class="bg-background-2 min-h-screen flex items-center justify-center">
	<div class="px-container w-full text-console text-white">
		<div class="border-l-2 border-white ps-5 py-4 space-y-6">
			<div class="space-y-3">
				<h2 class="text-inside-project bg-white text-background-2 font-semibold px-2 py-1 w-fit">
					Profile
				</h2>
				<p class="text-tag-project leading-relaxed text-white/90">{aboutData.profile}</p>
			</div>

			<div class="space-y-3">
				<h2 class="text-inside-project bg-white text-background-2 font-semibold px-2 py-1 w-fit">
					Skills & Languages
				</h2>
				<ul class="text-tag-project text-white/90 space-y-1">
					{#each aboutData.skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>

			<div class="space-y-3">
				<h2 class="text-inside-project bg-white text-background-2 font-semibold px-2 py-1 w-fit">
					Experience
				</h2>
				<div class="space-y-3 text-tag-project text-white/90">
					{#each aboutData.experience as item}
						<details class="border border-white/20 px-3 py-2">
							<summary class="cursor-pointer font-semibold list-none">
								{item.name}
							</summary>
							<p class="mt-2 text-white/75">{item.role} | {item.duration}</p>
							<ul class="mt-2 space-y-1 list-disc list-inside text-white/90">
								{#each item.description as description}
									<li>{description}</li>
								{/each}
							</ul>
						</details>
					{/each}
				</div>
			</div>

			<div class="space-y-3">
				<h2 class="text-inside-project bg-white text-background-2 font-semibold px-2 py-1 w-fit">
					Education
				</h2>
				<p class="text-tag-project text-white/90">{aboutData.education}</p>
			</div>
		</div>
	</div>
</section>
