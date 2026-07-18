<script>
	import ProfilePhoto from '../../../../static/images/profile-photo.png';
	import { personalInfo } from '$lib/portfolioData';
</script>

<section
	id="hero"
	class="text-modern min-h-screen px-container py-10 md:py-14 flex items-center w-full relative text-background-2 bg-gradient-to-br from-slate-100 via-white to-cyan-100 overflow-hidden"
>
	<div class="absolute -top-20 -right-12 w-64 h-64 rounded-full bg-cyan-200/40 blur-3xl"></div>
	<div class="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-indigo-200/40 blur-3xl"></div>

	<div class="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
		<div class="lg:col-span-7 space-y-5 animate__animated animate__fadeInLeft">
			<p class="uppercase tracking-[0.2em] text-xs md:text-sm text-background-2/70">
				Personal Portfolio
			</p>
			<h1 class="text-modern-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
				Hi! I'm {personalInfo.shortName}
			</h1>
			<p class="text-xl md:text-3xl tracking-wide text-background-2/90">{personalInfo.role}</p>
			<p class="text-base md:text-lg text-background-2/70">{personalInfo.location}</p>

			<div class="flex flex-wrap gap-3">
				<a
					href={`mailto:${personalInfo.email}`}
					target="__blank"
					class="px-4 py-2 rounded-full bg-background-2 text-white text-sm md:text-base"
				>
					{personalInfo.email}
				</a>
				<a
					href={personalInfo.linkedinUrl}
					target="__blank"
					class="px-4 py-2 rounded-full border border-background-2/30 text-background-2 text-sm md:text-base bg-white/80"
				>
					LinkedIn
				</a>
			</div>
		</div>

		<div
			class="lg:col-span-5 flex justify-start lg:justify-end animate__animated animate__fadeInRight"
		>
			<div
				class="p-3 rounded-[2rem] bg-white/70 shadow-2xl border border-white/90 backdrop-blur-sm"
			>
				<img
					src={ProfilePhoto}
					alt="Aziz Akbar Ashshiddiq"
					class="rounded-[1.6rem] w-[240px] md:w-[320px] object-cover"
				/>
			</div>
		</div>
	</div>
</section>
