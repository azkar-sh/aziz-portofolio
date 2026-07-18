<script>
	import '../app.css';
	import 'animate.css';
	import { page } from '$app/stores';
	import Navbar from '../components/navbar.svelte';
	import { aboutData, personalInfo } from '$lib/portfolioData';

	const siteUrl = 'https://azkar-portofolio.vercel.app';
	const siteName = personalInfo.fullName;
	const defaultTitle = `${personalInfo.fullName} | ${personalInfo.role}`;
	const defaultDescription = aboutData.profile;
	const ogImage = `${siteUrl}/images/profile-photo.png`;

	$: pathname = $page.url.pathname === '/' ? '' : $page.url.pathname;
	$: canonicalUrl = `${siteUrl}${pathname}`;
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: personalInfo.fullName,
		jobTitle: personalInfo.role,
		email: personalInfo.email,
		url: siteUrl,
		image: ogImage,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Tangerang',
			addressCountry: 'Indonesia'
		},
		sameAs: [personalInfo.linkedinUrl, personalInfo.whatsappUrl],
		description: defaultDescription
	};
</script>

<svelte:head>
	<title>{defaultTitle}</title>
	<meta name="description" content={defaultDescription} />
	<meta name="keywords" content="Aziz Akbar Ashshiddiq, Fullstack Developer, React.js, Next.js, Svelte, NestJS, Portfolio, Indonesia" />
	<meta name="author" content={personalInfo.fullName} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#070F2B" />

	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={defaultTitle} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={personalInfo.fullName} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={defaultTitle} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta name="twitter:image" content={ogImage} />

	<script type="application/ld+json">{JSON.stringify(structuredData)}</script>
</svelte:head>

<div class="flex flex-col-reverse md:flex-row-reverse bg-background-2 h-screen w-screen">
	<Navbar />
	<div class="w-full h-full overflow-auto">
		<slot />
	</div>
</div>
