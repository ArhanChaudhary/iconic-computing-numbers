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
	import { onMount } from 'svelte';

	export let data;

	let guesses = 0;
	let modals = new Array<{ value: string; message: string; link?: string; guessType: GuessType }>();
	let numbersEl: HTMLDivElement;
	let inputEl: HTMLInputElement;
	let numbersCount = Object.keys(data.numbers).length;
	let startTime: number;
	onMount(() => {
		startTime = performance.now();
	});

	function deltaToString(time: number) {
		let hours = Math.floor(time / 3600);
		let minutes = Math.floor((time % 3600) / 60);
		let seconds = Math.floor(time % 60);
		let ret = '';
		if (hours) {
			if (hours === 1) {
				ret += '1 hour';
			} else {
				ret += `${hours} hours`;
			}
			if (minutes) {
				if (minutes === 1) {
					ret += ' and 1 minute';
				} else {
					ret += ` and ${minutes} minutes`;
				}
			}
		} else if (minutes) {
			if (minutes === 1) {
				ret += '1 minute';
			} else {
				ret += `${minutes} minutes`;
			}
			if (seconds) {
				if (seconds === 1) {
					ret += ' and 1 second';
				} else {
					ret += ` and ${seconds} seconds`;
				}
			}
		} else if (seconds === 1) {
			ret += '1 second';
		} else {
			ret += `${seconds} seconds`;
		}
		return ret;
	}

	function onSubmit(guess: string) {
		if (guess === '') return;
		inputEl.value = '';

		if (
			data.numbers.some(({ value, guessed }) => value === guess && guessed) ||
			data.technicallyIncorrectNumbers.some(({ value, guessed }) => value === guess && guessed)
		) {
			modals = [
				...modals,
				{
					value: guess,
					message: 'You have already guessed this number.',
					guessType: GuessType.technicallyIncorrect
				}
			];
			return;
		}

		let technicallyIncorrectNumber = data.technicallyIncorrectNumbers.find(
			({ value }) => value === guess
		);
		if (technicallyIncorrectNumber) {
			modals = [
				...modals,
				{
					value: guess,
					message: `${technicallyIncorrectNumber.message} is not an intended number. Your guess won't count.`,
					guessType: GuessType.technicallyIncorrect
				}
			];
			return;
		}

		let number = data.numbers.find(({ value }) => value === guess);
		if (number) {
			modals = [
				...modals,
				{
					value: guess,
					message: number.message,
					link: number.link,
					guessType: GuessType.correct
				}
			];
			number.guessed = true;
			guesses++;
			let numberEl = numbersEl.querySelector(`[data-value="${number.value}"]`)!;
			let a = document.createElement('a');
			a.href = number.link;
			a.textContent = guess;
			a.classList.add('bg-green-300', 'hover:bg-green-500');
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'noopener noreferrer');
			numberEl.replaceWith(a);
			if (data.numbers.every(({ guessed }) => guessed)) {
				let endTime = performance.now();
				let deltaString = deltaToString((endTime - startTime) / 1000);
				setTimeout(() => {
					let message = `Congratulations! You took ${guesses} guesses to decipher the secret message in ${deltaString}.`;
					if (guesses === numbersCount) {
						message +=
							' You really are a true programming hobbyist, you guessed every number correctly! 🎉🎉🎉';
					}
					modals = [
						...modals,
						{
							value: '',
							message,
							guessType: GuessType.finished
						}
					];
				}, 500);
			}
			return;
		}
		modals = [
			...modals,
			{
				value: guess,
				message: 'Your guess was incorrect.',
				guessType: GuessType.incorrect
			}
		];
		guesses++;
	}
</script>

<div class="text-4xl font-medium font-patua text-center px-4 py-6">
	How Many Iconic Computing Numbers can you Recognize?<span
		class="absolute text-gray-500 text-sm translate-y-0.25">v2</span
	>
</div>
<div class="text-lg">
	<p>
		I'm a huge fan of both computer science and secret messages. If that's your cup of tea, I
		challenge you to decipher this secret message and test your general knowledge of computing.
	</p>
	<br />
	<ol class="list-decimal pl-[2ch]">
		<li>
			You are being timed. Despite that, <b
				>prioritize minimizing guesses (&lt;40 guesses) and avoid brute force</b
			>.
		</li>
		<li>
			There are {numbersCount} iconic computing numbers hidden within this string without overlap, each
			uniquely referring to a specific concept in computing. Ignore the line wrapping.
		</li>
		<li>
			This is not a memory test; you should be able to identify each number with little ambiguity
			without external tools.
		</li>
		<li>Each number is 3-6 digits long, truncating if necessary.</li>
		<li>The numbers become harder to identify towards the end.</li>
		<li>The first number is 1970. Press enter to submit, good luck!</li>
	</ol>
</div>
<div class="text-2xl text-center break-words my-10 mx-auto max-w-[61ch]" bind:this={numbersEl}>
	<!-- No cheating! Oh well, since you're already here you might as well check out my website while at it https://arhan.sh/ -->
	{#each data.numbers as { value }}<span data-value={value}>{value}</span>{/each}
</div>
<div class="max-w-[40rem] mx-auto w-full mb-10">
	<div class="flex">
		<input
			bind:this={inputEl}
			type="number"
			pattern="\d*"
			class="inline-block flex-grow px-3 py-2 bg-white border border-gray-700 rounded-md text-lg shadow-sm placeholder-gray-700 focus:outline-none focus:border-black"
			placeholder="Enter your guess"
			on:keypress={(e) => {
				if (e.key === 'Enter') onSubmit(inputEl.value);
			}}
			on:wheel={() => {
				// @ts-ignore
				document.activeElement.blur();
			}}
		/>
		<button
			class="ml-2 px-3 bg-gray-200 hover:bg-gray-300 border border-gray-700 rounded-md text-lg shadow-sm"
			on:click={(e) => {
				inputEl.focus();
				onSubmit(inputEl.value);
			}}>Submit</button
		>
	</div>
	<span class="inline-block mt-1 mb-10 text-gray-700 text-sm">
		{guesses} guess{guesses === 1 ? '' : 'es'} / {numbersCount} numbers
	</span>
	<span class="flex flex-col-reverse gap-8">
		{#each modals as modal}
			<Modal {...modal} />
		{/each}
	</span>
</div>
