<script lang="ts" context="module">
	const MAX_GUESSES = 40;
	export enum GuessType {
		correct,
		incorrect,
		doesNotCount,
		finishedSuccess,
		finishedFailure
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
	let joined = data.numbers.map(({ value }) => value).join('');
	let startTime: number;
	let incorrectGuesses = new Array<string>();
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

		if (guess.length < 3 || guess.length > 6) {
			modals = [
				...modals,
				{
					value: guess,
					message: "Your guess must be 3-6 digits long. Your guess won't count.",
					guessType: GuessType.doesNotCount
				}
			];
			return;
		}

		if (
			data.numbers.some(({ value, guessed }) => value === guess && guessed) ||
			data.technicallyIncorrectNumbers.some(({ value, guessed }) => value === guess && guessed) ||
			incorrectGuesses.includes(guess)
		) {
			modals = [
				...modals,
				{
					value: guess,
					message: "You have already guessed this number. Your guess won't count.",
					guessType: GuessType.doesNotCount
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
					guessType: GuessType.doesNotCount
				}
			];
			return;
		}
		if (!joined.includes(guess)) {
			modals = [
				...modals,
				{
					value: guess,
					message: "Your guess does not appear in the numbers string. Your guess won't count.",
					guessType: GuessType.doesNotCount
				}
			];
			return;
		}
		guesses++;

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
			let numberEl = numbersEl.querySelector(`[data-value="${number.value}"]`)!;
			let a = document.createElement('a');
			a.href = number.link;
			a.textContent = guess;
			a.classList.add('bg-green-300', 'hover:bg-green-500');
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'noopener noreferrer');
			numberEl.replaceWith(a);
			if (data.numbers.every(({ guessed }) => guessed) && guesses <= MAX_GUESSES) {
				let endTime = performance.now();
				let deltaString = deltaToString((endTime - startTime) / 1000);
				setTimeout(() => {
					let message = `Congratulations! You identified every iconic computing number with ${MAX_GUESSES - guesses || 'no more'} guess${MAX_GUESSES - guesses === 1 ? '' : 'es'} remaining in ${deltaString}.`;
					if (guesses === numbersCount) {
						message +=
							' You really are a true programming hobbyist, you guessed every number correctly! 🎉🎉🎉';
					}
					message +=
						'<br><br>Thank you so much for playing! I love the idea of having a puzzle that only experienced computer scientists would be able to solve. This game has taken me months of on-and-off research to put together, with the help of my friend <a href="https://bithole.dev/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Adrian</a> and the <a href="https://www.purduehackers.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Purdue Hackers</a> community.';
					modals = [
						...modals,
						{
							value: '',
							message,
							guessType: GuessType.finishedSuccess
						}
					];
				}, 500);
				return;
			}
		} else {
			modals = [
				...modals,
				{
					value: guess,
					message: 'Your guess was incorrect.',
					guessType: GuessType.incorrect
				}
			];
			incorrectGuesses.push(guess);
		}
		if (guesses === MAX_GUESSES) {
			let endTime = performance.now();
			let deltaString = deltaToString((endTime - startTime) / 1000);
			setTimeout(() => {
				modals = [
					...modals,
					{
						value: '',
						message: `You have used all of your guesses! You were only able to identify ${
							data.numbers.filter(({ guessed }) => guessed).length
						}/${numbersCount} iconic computing numbers in ${deltaString}. You may keep guessing to reveal the rest of the numbers.`,
						guessType: GuessType.finishedFailure
					}
				];
			}, 500);
		}
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
		challenge you to decipher this puzzle and test your general knowledge of computing.
	</p>
	<br />
	<ol class="list-decimal pl-[2ch]">
		<li>
			There are <b>{numbersCount}</b> iconic computing numbers hidden within this string, each
			referring to a specific concept in computing. You have {MAX_GUESSES} guesses to identify them all.
		</li>
		<li>There is no overlap, and every digit is used. Ignore the line wrapping.</li>
		<li>No two numbers are the same kind of number.</li>
		<li>
			This is not a memory test; you should be able to identify every number with little ambiguity
			without external tools.
		</li>
		<li>Every number is <b>3-6 digits long</b>, truncating if necessary.</li>
		<li>
			<b>The first number is the year {data.numbers[0].value}</b>. By rule three, there are no other
			years. Good luck!
		</li>
	</ol>
</div>
<div class="text-2xl text-center break-words my-10 mx-auto max-w-[62ch]" bind:this={numbersEl}>
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
				// @ts-expect-error ts is dumb
				document.activeElement.blur();
			}}
		/>
		<button
			class="ml-2 px-3 bg-gray-200 hover:bg-gray-300 border border-gray-700 rounded-md text-lg shadow-sm"
			on:click={() => {
				inputEl.focus();
				onSubmit(inputEl.value);
			}}>Submit</button
		>
	</div>
	<span class="inline-block mt-1 mb-10 text-gray-700 text-sm">
		{#if guesses >= MAX_GUESSES}
			You have used all of your guesses
		{:else}
			{MAX_GUESSES - guesses} guess{MAX_GUESSES - guesses === 1 ? '' : 'es'} remaining
		{/if}
	</span>
	<span class="flex flex-col-reverse gap-8">
		{#each modals as modal}
			<Modal {...modal} />
		{/each}
	</span>
</div>
