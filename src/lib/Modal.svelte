<script lang="ts">
	import { onMount } from 'svelte';
	import { GuessType } from '../routes/+page.svelte';
	import { fly } from 'svelte/transition';
	export let value: string;
	export let message: string;
	export let link: string | undefined = undefined;
	export let guessType: GuessType;

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if guessType === GuessType.finished}
	{#if visible}
		<div
			in:fly={{ y: -25 }}
			class="rounded-lg overflow-hidden border border-green-700 text-lg px-4 py-6 font-medium bg-green-100"
		>
			{message}
		</div>
	{/if}
{:else if visible}
	<div
		in:fly={{ y: -25 }}
		class="rounded-lg overflow-hidden border"
		class:border-green-700={guessType === GuessType.correct}
		class:border-red-700={guessType === GuessType.incorrect}
		class:border-gray-700={guessType === GuessType.technicallyIncorrect}
	>
		<div
			class="text-lg px-4 py-1 font-medium"
			class:bg-green-200={guessType === GuessType.correct}
			class:bg-red-200={guessType === GuessType.incorrect}
			class:bg-gray-200={guessType === GuessType.technicallyIncorrect}
		>
			{value}
			{#if link}
				&#x2022;
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 underline"
				>
					More info</a
				>
			{/if}
		</div>
		<div
			class="p-4"
			class:bg-green-50={guessType === GuessType.correct}
			class:bg-red-50={guessType === GuessType.incorrect}
			class:bg-gray-50={guessType === GuessType.technicallyIncorrect}
		>
			{message}
		</div>
	</div>
{/if}
