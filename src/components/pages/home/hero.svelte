<script>
	const toggleProject = () => {
		const project = document.getElementById('project');
		project.scrollIntoView({ behavior: 'smooth' });
		project.className = 'animate__animated animate__fadeInLeft';
	};
</script>

<section id="hero" class="bg-background-1 h-screen animate__animated animate__fadeInRight">
	<div class="px-container flex items-center justify-start w-full h-full" id="hero-content">
		<div
			class="flex flex-col justify-center gap-2 text-console text-xl lg:text-3xl xl:text-3xl border-l-2 border-white ps-5"
		>
			<span class="text-tag text-white">
				{'<section id="greeting" class="flex flex-col gap-2">'}
			</span>

			<div class="border-l border-white ps-4 translate-x-3">
				<div class="flex items-center gap-1">
					<span class="text-tag text-white">
						{'<span>'}
					</span>

					<div class="p-1 w-fit">
						<div class=" p-1">
							<div class="p-1 md:p-2 bg-white">
								<span class="text-background-1 font-bold">Welcome !</span>
							</div>
						</div>
					</div>

					<span class="text-tag text-white">
						{'</span>'}
					</span>
				</div>

				<div class="flex items-center gap-1">
					<span class="text-tag text-white">
						{'<span>'}
					</span>

					<div class="p-2 flex items-center gap-2">
						<span class="text-white tracking-wide font-bold">I'm</span>
						<div class="p-2 bg-white">
							<span class="text-background-1 font-bold tracking-widest">Aziz</span>
						</div>
					</div>

					<span class="text-tag text-white">
						{'<span>'}
					</span>
				</div>

				<div class="flex items-center gap-1">
					<span class="text-tag text-white">
						{'<span>'}
					</span>

					<div class="p-2 flex items-center gap-2">
						<div class="p-2 bg-white">
							<span class="text-background-1 font-bold">Web Developer</span>
						</div>

						<span class="text-white tracking-wide font-bold hidden md:inline">
							from Jakarta, Indonesia</span
						>
					</div>

					<span class="text-tag text-white">
						{'<span>'}
					</span>
				</div>

				<div class="flex items-center gap-1 md:hidden">
					<span class="text-tag text-white">
						{'<span>'}
					</span>

					<div class="p-2 flex items-center gap-2">
						<span class="text-white tracking-wide font-bold"> from Jakarta</span>
					</div>

					<span class="text-tag text-white">
						{'<span>'}
					</span>
				</div>
			</div>

			<span class="text-tag text-white">
				{'</section>'}
			</span>

			<span class="text-tag text-white my-2">
				{'</br>'}
			</span>

			<div class="flex md:flex-row flex-col gap-2 md:items-center">
				<span class="text-tag text-white">
					{'<button on:click={toggleProject}>'}
				</span>
				<button class="p-2 bg-white w-fit" on:click={toggleProject}>
					<span class="text-background-1 font-bold">Project</span>
				</button>
				<span class="text-tag text-white">
					{'</button>'}
				</span>
			</div>
		</div>
	</div>
</section>
