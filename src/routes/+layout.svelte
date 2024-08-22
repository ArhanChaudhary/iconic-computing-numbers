<script>
	import '../app.css';
</script>

<!-- cspell: ignore arhan chaudhary -->

<svelte:head>
	<meta name="description" content="How Many Iconic Computing Numbers can you Recognize?" />
	<meta property="og:url" content="https://numbers.arhan.sh" />
	<meta property="og:title" content="Numbers" />
	<meta property="og:description" content="How Many Iconic Computing Numbers can you Recognize?" />
	<meta property="og:image" content="https://numbers.arhan.sh/favicon.ico" />
	<meta name="twitter:card" content="summary" />
	<meta name="author" content="Arhan Chaudhary" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" />
	<title>Numbers</title>
</svelte:head>

<main class="bg-gray-100">
	<div
		class="mr-auto ml-auto max-w-5xl min-h-dvh bg-orange-50 px-4 shadow-[0_0_30px_5px] shadow-gray-400 relative pb-10"
	>
		<slot />
		<div class="flex justify-center absolute bottom-0 h-10 items-center left-0 right-0">
			<a
				href="https://github.com/ArhanChaudhary/iconic-computing-numbers"
				class="text-blue-600 dark:text-blue-500 underline mx-1">Source</a
			>
			&#x2022;
			<a href="https://arhan.sh" class="text-blue-600 dark:text-blue-500 underline mx-1"
				>My website</a
			>
		</div>
	</div>
</main>
