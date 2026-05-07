<script lang="ts">
	import { CalendarDate, today, getLocalTimeZone } from "@internationalized/date";
	import * as Select from "$lib/components/ui/select";

	const tz = getLocalTimeZone();
	const todayDate = today(tz);

	let name = $state("");
	let email = $state("");
	let phone = $state("");
	let eventType = $state<{ value: string; label: string } | undefined>(undefined);
	let guests = $state("");
	let message = $state("");

	let viewYear = $state(todayDate.year);
	let viewMonth = $state(todayDate.month);
	let selectedDate = $state<CalendarDate | null>(null);

	const weekdays = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
	const monthNames = [
		"Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
		"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
	];

	const eventTypes = [
		{ value: "team-building", label: "Team Building" },
		{ value: "seminaire", label: "Séminaire & Incentive" },
		{ value: "soiree-entreprise", label: "Soirée d'entreprise" },
		{ value: "evjf-evg", label: "EVJF / EVG" },
		{ value: "anniversaire", label: "Anniversaire & Fête" },
		{ value: "concert-prive", label: "Concert & Soirée privée" },
		{ value: "autre", label: "Autre" },
	];

	function getDaysInMonth(year: number, month: number): number {
		return new Date(year, month, 0).getDate();
	}

	function getFirstDayOfMonth(year: number, month: number): number {
		const d = new Date(year, month - 1, 1).getDay();
		return d === 0 ? 6 : d - 1;
	}

	const calendarDays = $derived(() => {
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
		selectedDate = day;
	}

	function isSelected(day: CalendarDate | null): boolean {
		if (!day || !selectedDate) return false;
		return day.year === selectedDate.year && day.month === selectedDate.month && day.day === selectedDate.day;
	}

	function isToday(day: CalendarDate | null): boolean {
		if (!day) return false;
		return day.year === todayDate.year && day.month === todayDate.month && day.day === todayDate.day;
	}

	function isPast(day: CalendarDate | null): boolean {
		if (!day) return false;
		return day.compare(todayDate) < 0;
	}

	const dateValue = $derived(selectedDate ? `${selectedDate.year}-${String(selectedDate.month).padStart(2, "0")}-${String(selectedDate.day).padStart(2, "0")}` : "");
</script>

<section class="contact-form" aria-labelledby="contact-title">
	<div class="contact-form__container">
		<header class="contact-form__header">
			<span class="contact-form__eyebrow">Contact</span>
			<h2 id="contact-title" class="contact-form__title">Demande de réservation</h2>
			<p class="contact-form__lead">Décrivez votre projet, nous vous répondons sous 24h avec une proposition personnalisée.</p>
		</header>

		<form class="contact-form__form" action="#" method="POST" data-event-form>
			<div class="contact-form__grid">
				<!-- Colonne gauche : infos personnelles -->
				<div class="contact-form__column">
					<div class="contact-form__field">
						<label for="cf-name" class="contact-form__label">Nom complet <span class="required">*</span></label>
						<input type="text" id="cf-name" name="name" required bind:value={name} placeholder="Jean Dupont" class="contact-form__input" />
					</div>

					<div class="contact-form__field">
						<label for="cf-email" class="contact-form__label">Email <span class="required">*</span></label>
						<input type="email" id="cf-email" name="email" required bind:value={email} placeholder="jean@exemple.com" class="contact-form__input" />
					</div>

					<div class="contact-form__field">
						<label for="cf-phone" class="contact-form__label">Téléphone</label>
						<input type="tel" id="cf-phone" name="phone" bind:value={phone} placeholder="06 12 34 56 78" class="contact-form__input" />
					</div>

					<div class="contact-form__field">
						<label for="cf-type" class="contact-form__label">Type d'événement <span class="required">*</span></label>
						<input type="hidden" name="type" value={eventType?.value ?? ""} />
						<Select.Root type="single" bind:value={eventType}>
							<Select.Trigger id="cf-type" class="w-full">
								{eventType?.label ?? "Sélectionner..."}
							</Select.Trigger>
							<Select.Content>
								{#each eventTypes as et}
									<Select.Item value={et.value} label={et.label}>{et.label}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
					</div>

					<div class="contact-form__field">
						<label for="cf-guests" class="contact-form__label">Nombre de personnes</label>
						<input type="number" id="cf-guests" name="guests" min="1" max="500" bind:value={guests} placeholder="ex: 30" class="contact-form__input" />
					</div>
				</div>

				<!-- Colonne droite : date + message -->
				<div class="contact-form__column">
					<div class="contact-form__field">
						<span class="contact-form__label">Date souhaitée</span>
						<input type="hidden" name="date" value={dateValue} />
						<div class="calendar" aria-label="Sélectionner une date">
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
								{#each calendarDays() as day}
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

					<div class="contact-form__field contact-form__field--grow">
						<label for="cf-message" class="contact-form__label">Votre projet <span class="required">*</span></label>
						<textarea id="cf-message" name="message" required bind:value={message} placeholder="Décrivez votre événement, vos besoins, vos envies..." class="contact-form__input contact-form__textarea"></textarea>
					</div>
				</div>
			</div>

			<div class="contact-form__actions">
				<button type="submit" class="contact-form__submit">Envoyer la demande</button>
				<p class="contact-form__note">Nous vous répondons sous 24h. Aucun engagement.</p>
			</div>
		</form>
	</div>
</section>

<style>
	.contact-form {
		padding: clamp(3rem, 8vw, 6rem) 0;
	}

	.contact-form__container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.contact-form__header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.contact-form__eyebrow {
		display: block;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--c-orange);
		margin-bottom: 0.75rem;
	}

	.contact-form__title {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 700;
		color: var(--c-text);
		margin: 0 0 1rem;
	}

	.contact-form__lead {
		font-size: 1rem;
		color: var(--c-text-muted);
		max-width: 500px;
		margin: 0 auto;
	}

	.contact-form__form {
		background: var(--c-surface);
		border: 1px solid var(--c-border);
		border-radius: var(--r-lg);
		padding: clamp(1.5rem, 4vw, 2.5rem);
		transition: background 0.2s, border-color 0.2s;
	}

	.contact-form__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.contact-form__grid {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
		}
	}

	.contact-form__column {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.contact-form__field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-form__field--grow {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.contact-form__field--grow .contact-form__textarea {
		flex: 1;
		min-height: 140px;
	}

	.contact-form__label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--c-text-secondary);
	}

	.required {
		color: var(--c-orange);
	}

	.contact-form__input {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 1px solid var(--c-border);
		border-radius: 0.5rem;
		background: var(--c-bg);
		font-family: inherit;
		font-size: 0.9rem;
		color: var(--c-text);
		transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
	}

	.contact-form__input::placeholder {
		color: var(--c-text-muted);
	}

	.contact-form__input:focus {
		outline: none;
		border-color: var(--c-orange);
		box-shadow: 0 0 0 3px rgba(247, 123, 70, 0.15);
	}

	.contact-form__textarea {
		resize: vertical;
		line-height: 1.6;
	}

	/* ─── Select shadcn override ─── */
	:global([data-slot="select-trigger"]) {
		width: 100%;
		background: var(--c-bg);
		border: 1px solid var(--c-border);
		border-radius: 0.5rem;
		padding: 0.6rem 0.875rem;
		font-family: inherit;
		font-size: 0.9rem;
		color: var(--c-text);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		min-height: 2.875rem;
		box-shadow: none;
		transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
	}

	:global([data-slot="select-trigger"]:focus-visible),
	:global([data-slot="select-trigger"][data-open="true"]) {
		outline: none;
		border-color: var(--c-orange);
		box-shadow: 0 0 0 3px rgba(247, 123, 70, 0.15);
	}

	:global([data-slot="select-trigger"] svg) {
		flex-shrink: 0;
		width: 1rem;
		height: 1rem;
		color: var(--c-text-muted);
	}

	:global([data-slot="select-content"]) {
		background: var(--c-bg);
		border: 1px solid var(--c-border);
		border-radius: 0.5rem;
		box-shadow: var(--shadow-md);
		z-index: 50;
		min-width: var(--bits-select-anchor-width);
		overflow: hidden;
	}

	:global([data-slot="select-item"]) {
		padding: 0.6rem 1rem;
		font-size: 0.9rem;
		color: var(--c-text);
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		transition: background 0.1s;
	}

	:global([data-slot="select-item"]:hover),
	:global([data-slot="select-item"][data-highlighted]) {
		background: var(--c-surface);
	}

	:global([data-slot="select-item"][data-selected]) {
		background: var(--c-surface-alt);
		font-weight: 600;
	}

	/* Calendar styles */
	.calendar {
		border: 1px solid var(--c-border);
		border-radius: 0.5rem;
		background: var(--c-bg);
		padding: 1rem;
		transition: background 0.2s, border-color 0.2s;
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
		border-radius: 0.375rem;
		background: var(--c-bg);
		color: var(--c-text);
		cursor: pointer;
		transition: background 0.15s, border-color 0.15s;
	}

	.calendar__nav:hover {
		background: var(--c-surface);
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
		border-radius: 0.375rem;
		background: transparent;
		color: var(--c-text);
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
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

	/* Actions */
	.contact-form__actions {
		margin-top: 2rem;
		text-align: center;
	}

	.contact-form__submit {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.875rem 2.5rem;
		background: var(--c-orange);
		color: #ffffff;
		font-family: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background 0.2s, transform 0.1s;
	}

	.contact-form__submit:hover {
		background: var(--c-orange-dark);
	}

	.contact-form__submit:active {
		transform: translateY(1px);
	}

	.contact-form__note {
		font-size: 0.75rem;
		color: var(--c-text-muted);
		margin-top: 1rem;
	}
</style>
