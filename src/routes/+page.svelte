<script lang="ts" context="module">
	export enum GuessType {
		correct,
		incorrect,
		technicallyIncorrect,
		finished
	}
</script>

<script lang="ts">
	import Modal from '$lib/Modal.svelte';

	export let data;

	let guesses = 0;
	let modals = new Array<{ value: number; message: string; guessType: GuessType }>();
	let numbersEl: HTMLDivElement;
	let numbersCount = Object.keys(data.numbers).length;

	function keyPress(e: KeyboardEvent) {
		if (e.key !== 'Enter') {
			return;
		}
		if ((e.target as HTMLInputElement).value === '') return;
		let guess = (e.target as HTMLInputElement).valueAsNumber;
		(e.target as HTMLInputElement).value = '';

		let technicallyIncorrectNumber = data.technicallyIncorrectNumbers.find(
			({ value }) => value === guess
		);
		if (technicallyIncorrectNumber) {
			modals = [
				{
					...technicallyIncorrectNumber,
					guessType: GuessType.technicallyIncorrect
				},
				...modals
			];
			return;
		}

		let number = data.numbers.find(({ value }) => value === guess);
		if (number) {
			modals = [
				{
					value: number.value,
					message: number.message,
					guessType: GuessType.correct
				},
				...modals
			];
			number.guessed = true;
			guesses++;
			numbersEl.querySelector(`span[data-value="${number.value}"]`)!.classList.add('bg-green-300');
			if (data.numbers.every(({ guessed }) => guessed)) {
				modals = [
					{
						value: NaN,
						message: 'Congratulations! You have successfully deciphered the secret message',
						guessType: GuessType.finished
					},
					...modals
				];
			}
			return;
		}
		modals = [
			{
				value: guess,
				message: 'Your guess was incorrect',
				guessType: GuessType.incorrect
			},
			...modals
		];
		guesses++;
	}
</script>

<main class="bg-gray-100 h-full">
	<div
		class="mr-auto ml-auto max-w-5xl h-full bg-orange-50 px-4 shadow-[0_0_30px_5px] overflow-y-scroll shadow-gray-400"
	>
		<div class="text-4xl font-medium font-patua text-center px-4 py-6">
			How Many Iconic Computing Numbers can you Recognize?
		</div>
		<div class="text-lg">
			<p>
				I'm a huge fan of both computer science and secret messages. If that's your cup of tea, I
				challenge you to decipher this secret message and test your general knowledge of computing.
			</p>
			<br />
			<ol class="list-decimal pl-[2ch]">
				<li>
					There are {numbersCount} computing numbers hidden within this string without overlap (ignore
					the line wrapping)
				</li>
				<li>
					Each number is wholly distinct in meaning and iconic in their respective fields of
					computing
				</li>
				<li>
					This is not a memory test; you should be able to identify each number with little
					ambiguity without external tools
				</li>
				<li>Each number is 3-6 digits long, truncating if necessary</li>
				<li>The numbers become harder to identify towards the end</li>
				<li>The first number is 1970, good luck!</li>
			</ol>
		</div>
		<div class="text-2xl text-center break-words my-10 px-4" bind:this={numbersEl}>
			{#each data.numbers as { value }}<span data-value={value}>{value}</span>{/each}
		</div>
		<div class="max-w-[40rem] mx-auto w-full mb-[150px]">
			<input
				type="number"
				class="block w-full px-3 py-2 bg-white border border-gray-700 rounded-md text-lg shadow-sm placeholder-gray-700 focus:outline-none focus:border-black"
				placeholder="Enter your guess"
				on:keypress={keyPress}
				on:wheel={(e) => e.preventDefault()}
			/>
			<span class="inline-block mt-1 mb-7 text-gray-700 text-sm">
				{guesses} guess{guesses === 1 ? '' : 'es'} / {numbersCount} numbers
			</span>
			{#each modals as modal}
				<Modal {...modal} />
			{/each}
		</div>
	</div>
</main>
