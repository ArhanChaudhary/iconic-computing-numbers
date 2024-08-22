<script lang="ts">
	import { GuessType } from '../routes/+page.svelte';
	export let value: number;
	export let message: string;
	export let guessType: GuessType;
</script>

<div
	class="rounded-lg overflow-hidden border my-4"
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
