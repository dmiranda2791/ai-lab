<script>
	export let isLoading = false;
</script>

{#if isLoading}
	<div class="loading-indicator">
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
{/if}

<style>
	.loading-indicator {
		margin: 15px 0;
		background: linear-gradient(90deg, #035a9d 50%, #02487d 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		animation: loadingBackground 2s infinite ease-in-out;
		border-radius: 10px 2px 10px 10px;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 15px 10px 10px;
	}

	.dot {
		background-color: #ffffff; /* or any color you prefer */
		width: 8px;
		height: 8px;
		margin: 0 4px;
		border-radius: 50%;
		animation: float 0.8s infinite ease-in-out;
	}

	/* We create three animations with slight delays so the dots don't float at the same time */
	.dot:nth-child(1) {
		animation-delay: 0s;
	}
	.dot:nth-child(2) {
		animation-delay: 0.2s;
	}
	.dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	@keyframes loadingBackground {
		0% {
			background-position: right bottom;
		}
		50% {
			background-position: left bottom;
		}
		100% {
			background-position: right bottom;
		}
	}
</style>
