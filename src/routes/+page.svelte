<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="bg-orange-100 h-full">
	<div class="mr-auto ml-auto max-w-5xl h-full bg-orange-50 px-4">
		<div class="text-4xl font-medium font-patua text-center px-4 py-6">
			How Many Iconic Computing Numbers can you Recognize?
		</div>
		<div class="text-lg">
			<p>
				I'm a huge fan of both computers and secret messages. If that's your cup of tea, I challenge
				you to a test of your computing knowledge by fully deciphering this secret message.
			</p>
			<br />
			<ol class="list-decimal pl-[2ch]">
				<li>There are 25 computing numbers hidden within this string without overlap</li>
				<li>
					This is not a memory test; you should be able to identify each number with little
					ambiguity without external tools
				</li>
				<li>Each number is iconic in their respective computing fields and distinct in meaning</li>
				<li>Each number is 3-6 digits long, truncating if necessary</li>
				<li>The numbers become harder to identify towards the end</li>
				<li>The first number is 1970, good luck!</li>
			</ol>
		</div>
		<div class="text-2xl text-center break-words my-10">
			{#each data.numbers as [number]}
				{number}
			{/each}
		</div>
		<input
			type="number"
			class="block w-full mx-auto px-3 py-2 bg-white border border-slate-400 rounded-md text-sm shadow-sm placeholder-slate-700
				focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-800 max-w-[40rem]"
			placeholder="Enter your guess"
		/>
	</div>
</main>
