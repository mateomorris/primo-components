<script>
	import { SvelteGantt, SvelteGanttTable } from 'svelte-gantt';
	import Heading from './Heading.svelte';

	export let foo = 'EMPTY';
</script>

<Heading />
<h1>This is the BRAND NEW tester</h1>
<h2>The prop value is {foo}</h2>
