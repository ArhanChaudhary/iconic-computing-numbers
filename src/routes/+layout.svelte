<script>
	import '../app.css';
</script>

<main class="bg-gray-100">
	<div
		class="mr-auto ml-auto max-w-5xl min-h-dvh bg-orange-50 px-4 shadow-[0_0_30px_5px] shadow-gray-400 relative pb-10"
	>
		<slot />
		<div class="flex justify-center absolute bottom-0 h-10 items-center left-0 right-0 gap-0.5">
			<a
				href="https://github.com/ArhanChaudhary/iconic-computing-numbers"
				class="text-blue-600 underline mx-1">Source</a
			>
			&#x2022;
			<a
				href="https://arhan.sh/blog/how-many-iconic-computing-numbers-can-you-recognize/"
				class="text-blue-600 underline mx-1">Blog</a
			>
			&#x2022;
			<a href="https://arhan.sh" class="text-blue-600 underline mx-1">My website</a>
		</div>
	</div>
</main>
