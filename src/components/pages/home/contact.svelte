<script>
	const toggleHero = () => {
		const hero = document.getElementById('hero');
		hero.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section id="contact" class="bg-background-1 h-screen">
	<div class="px-container flex items-center justify-start w-full h-full">
		<div
			class="flex flex-col justify-center gap-2 text-console text-xl lg:text-3xl xl:text-3xl border-l-2 border-white ps-5"
		>
			<span class="text-tag-project text-white">
				{'<section id="contact" class="flex flex-col gap-2">'}
			</span>

			<div class="border-l border-white ps-4 translate-x-3 flex flex-col gap-2">
				<div class="flex items-center gap-1">
					<span class="text-tag-project text-white">
						{'<h1>'}
					</span>

					<div class="p-1 w-fit">
						<div class=" p-1">
							<div class="p-1 md:p-2 bg-white">
								<span class="text-background-1 font-semibold">Aziz Akbar Ashshiddiq</span>
							</div>
						</div>
					</div>

					<span class="text-tag-project text-white">
						{'</h1>'}
					</span>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<span class="text-tag-project text-white">
						{'<a href="mailto:akbar.dizir@gmail.com">'}
					</span>

					<div class="p-2 flex items-center gap-2">
						<a
							href="mailto:akbar.dizir@gmail.com"
							class="text-white tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1 underline"
							target="__blank"
						>
							akbar.dizir@gmail.com</a
						>
					</div>

					<span class="text-tag-project text-white">
						{'</a>'}
					</span>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<span class="text-tag-project text-white">
						{'<a href="https://www.linkedin.com/in/aziz-ashshiddiq/">'}
					</span>

					<div class="p-2 flex items-center gap-2">
						<a
							href="https://www.linkedin.com/in/aziz-ashshiddiq/"
							class="text-white tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
							target="__blank"
						>
							Aziz Ashshiddiq | LinkedIn</a
						>
					</div>

					<span class="text-tag-project text-white">
						{'</a>'}
					</span>
				</div>

				<div class="flex flex-col md:flex-row md:items-center gap-1">
					<span class="text-tag-project text-white">
						{'<a href="https://wa.me/628992*****">'}
					</span>

					<div class="p-2 flex items-center gap-2">
						<a
							href="https://wa.me/628992099447"
							class="text-white tracking-wide font-semibold hover:text-background-1 hover:bg-white px-1"
							target="__blank"
						>
							Aziz Ashshiddiq | Message</a
						>
					</div>

					<span class="text-tag-project text-white">
						{'</a>'}
					</span>
				</div>
			</div>

			<span class="text-tag-project text-white">
				{'</section>'}
			</span>

			<span class="text-tag-project text-white my-2">
				{'</br>'}
			</span>

			<div class="flex md:flex-row flex-col gap-2 md:items-center">
				<span class="text-tag-project text-white">
					{'<button on:click={toggleHome}>'}
				</span>
				<button class="p-2 bg-white w-fit" on:click={toggleHero}>
					<span class="text-background-1 font-semibold">Home</span>
				</button>
				<span class="text-tag-project text-white">
					{'</button>'}
				</span>
			</div>
		</div>
	</div>
</section>

<style>
	/* your styles go here */
</style>
