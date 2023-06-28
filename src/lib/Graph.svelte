<script>
	import { Line } from 'svelte-chartjs';
	// import { data } from './data.js';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	// arguments passed in from Primo
	export let graph_data;
</script>

<Line data={graph_data} options={{ responsive: true }} />
