<script lang="ts">
	import { CalendarDate, today, getLocalTimeZone } from "@internationalized/date";

	let {
		id = "cf-date",
		name = "date",
		label = "Date souhaitée",
	}: {
		id?: string;
		name?: string;
		label?: string;
	} = $props();

	const tz = getLocalTimeZone();
	const todayDate = today(tz);

	let viewYear = $state(todayDate.year);
	let viewMonth = $state(todayDate.month);
	let selected = $state<CalendarDate | null>(null);

	const weekdays = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
	const monthNames = [
		"Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
		"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
	];

	function getDaysInMonth(year: number, month: number): number {
		return new Date(year, month, 0).getDate();
	}

	function getFirstDayOfMonth(year: number, month: number): number {
		const d = new Date(year, month - 1, 1).getDay();
		return d === 0 ? 6 : d - 1;
	}

	const calendarDays = $derived.by(() => {
		const daysInMonth = getDaysInMonth(viewYear, viewMonth);
		const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
		const days: (CalendarDate | null)[] = [];

		for (let i = 0; i < firstDay; i++) {
			days.push(null);
		}
		for (let d = 1; d <= daysInMonth; d++) {
			days.push(new CalendarDate(viewYear, viewMonth, d));
		}
		return days;
	});

	function prevMonth() {
		if (viewMonth === 1) {
			viewMonth = 12;
			viewYear--;
		} else {
			viewMonth--;
		}
	}

	function nextMonth() {
		if (viewMonth === 12) {
			viewMonth = 1;
			viewYear++;
		} else {
			viewMonth++;
		}
	}

	function selectDay(day: CalendarDate) {
		selected = day;
	}

	function isSelected(day: CalendarDate | null): boolean {
		if (!day || !selected) return false;
		return day.year === selected.year && day.month === selected.month && day.day === selected.day;
	}

	function isToday(day: CalendarDate | null): boolean {
		if (!day) return false;
		return day.year === todayDate.year && day.month === todayDate.month && day.day === todayDate.day;
	}

	function isPast(day: CalendarDate | null): boolean {
		if (!day) return false;
		return day.compare(todayDate) < 0;
	}

	const hiddenValue = $derived(selected ? `${selected.year}-${String(selected.month).padStart(2, "0")}-${String(selected.day).padStart(2, "0")}` : "");
</script>

<div class="date-field">
	<label for={id} class="cform__label">{label}</label>
	<input {id} type="hidden" {name} value={hiddenValue} />

	<div class="calendar" aria-label={label}>
		<header class="calendar__header">
			<button type="button" class="calendar__nav" onclick={prevMonth} aria-label="Mois précédent">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M15 18l-6-6 6-6"/>
				</svg>
			</button>
			<span class="calendar__title">{monthNames[viewMonth - 1]} {viewYear}</span>
			<button type="button" class="calendar__nav" onclick={nextMonth} aria-label="Mois suivant">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M9 18l6-6-6-6"/>
				</svg>
			</button>
		</header>

		<div class="calendar__weekdays">
			{#each weekdays as wd}
				<span class="calendar__weekday">{wd}</span>
			{/each}
		</div>

		<div class="calendar__grid">
			{#each calendarDays as day}
				{#if day}
					<button
						type="button"
						class="calendar__day"
						class:calendar__day--selected={isSelected(day)}
						class:calendar__day--today={isToday(day)}
						class:calendar__day--past={isPast(day)}
						onclick={() => selectDay(day)}
						disabled={isPast(day)}
					>
						{day.day}
					</button>
				{:else}
					<span class="calendar__day calendar__day--empty"></span>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.calendar {
		border: 1px solid var(--c-border);
		border-radius: var(--r-sm);
		background: var(--c-surface);
		padding: 1rem;
		max-width: 280px;
	}

	.calendar__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.calendar__nav {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border: 1px solid var(--c-border);
		border-radius: var(--r-sm);
		background: var(--c-bg);
		color: var(--c-text);
		cursor: pointer;
		transition: background var(--t-fast), border-color var(--t-fast);
	}

	.calendar__nav:hover {
		background: var(--c-surface-alt);
		border-color: var(--c-text-muted);
	}

	.calendar__title {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--c-text);
	}

	.calendar__weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 2px;
		margin-bottom: 0.5rem;
	}

	.calendar__weekday {
		text-align: center;
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--c-text-muted);
		text-transform: uppercase;
		padding: 0.25rem 0;
	}

	.calendar__grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 2px;
	}

	.calendar__day {
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
		border: none;
		border-radius: var(--r-sm);
		background: transparent;
		color: var(--c-text);
		cursor: pointer;
		transition: background var(--t-fast), color var(--t-fast);
	}

	.calendar__day:hover:not(:disabled):not(.calendar__day--selected) {
		background: var(--c-surface-alt);
	}

	.calendar__day--empty {
		cursor: default;
	}

	.calendar__day--past {
		color: var(--c-text-muted);
		opacity: 0.5;
		cursor: not-allowed;
	}

	.calendar__day--today {
		font-weight: 700;
		color: var(--c-orange);
	}

	.calendar__day--selected {
		background: var(--c-orange);
		color: #fff;
		font-weight: 600;
	}

	.calendar__day--selected:hover {
		background: var(--c-orange-dark);
	}
</style>
