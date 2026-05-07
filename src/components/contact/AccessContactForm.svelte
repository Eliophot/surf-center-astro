<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	const subjects = [
		{ value: "info", label: "Renseignement général" },
		{ value: "reservation", label: "Question réservation" },
		{ value: "groupe", label: "Groupe & événement" },
		{ value: "partenariat", label: "Partenariat" },
		{ value: "autre", label: "Autre" },
	] as const;

	let firstname = $state("");
	let lastname = $state("");
	let email = $state("");
	let phone = $state("");
	let subject = $state<(typeof subjects)[number]["value"] | "">("");
	let message = $state("");

	const subjectLabel = $derived(subjects.find((s) => s.value === subject)?.label);
</script>

<form class="acform" action="#" method="POST" data-contact-form>
	<div class="acform__grid">
		<div class="acform__row">
			<div class="acform__field">
				<label for="ac-firstname" class="acform__label">Prénom <span class="acform__req">*</span></label>
				<input
					type="text"
					id="ac-firstname"
					name="firstname"
					required
					autocomplete="given-name"
					placeholder="Votre prénom"
					class="acform__input"
					bind:value={firstname}
				/>
			</div>
			<div class="acform__field">
				<label for="ac-lastname" class="acform__label">Nom <span class="acform__req">*</span></label>
				<input
					type="text"
					id="ac-lastname"
					name="lastname"
					required
					autocomplete="family-name"
					placeholder="Votre nom"
					class="acform__input"
					bind:value={lastname}
				/>
			</div>
		</div>

		<div class="acform__field">
			<label for="ac-email" class="acform__label">Email <span class="acform__req">*</span></label>
			<input
				type="email"
				id="ac-email"
				name="email"
				required
				autocomplete="email"
				placeholder="vous@exemple.com"
				class="acform__input"
				bind:value={email}
			/>
		</div>

		<div class="acform__field">
			<label for="ac-phone" class="acform__label">
				Téléphone <span class="acform__opt">(optionnel)</span>
			</label>
			<input
				type="tel"
				id="ac-phone"
				name="phone"
				autocomplete="tel"
				placeholder="+33 6 00 00 00 00"
				class="acform__input"
				bind:value={phone}
			/>
		</div>

		<div class="acform__field">
			<label for="ac-subject" class="acform__label">Sujet <span class="acform__req">*</span></label>
			<input type="hidden" name="subject" value={subject} />
			<Select.Root type="single" bind:value={subject}>
				<Select.Trigger id="ac-subject" class="w-full">
					{subjectLabel ?? "Choisir un sujet..."}
				</Select.Trigger>
				<Select.Content>
					{#each subjects as s}
						<Select.Item value={s.value} label={s.label}>{s.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<div class="acform__field">
			<label for="ac-message" class="acform__label">Message <span class="acform__req">*</span></label>
			<textarea
				id="ac-message"
				name="message"
				required
				rows="5"
				placeholder="Votre message..."
				class="acform__input acform__textarea"
				bind:value={message}
			/>
		</div>
	</div>

	<div class="acform__actions">
		<button type="submit" class="acform__submit">Envoyer</button>
		<p class="acform__note">Nous vous répondons sous 24h. Aucun engagement.</p>
	</div>
</form>

<style>
	/* ── Layout (miroir de .contact-form__column dans ContactFormShadcn) ── */
	.acform__grid {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.acform__row {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 600px) {
		.acform__row { grid-template-columns: 1fr 1fr; }
	}

	.acform__field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	/* ── Labels — identiques à .contact-form__label ── */
	.acform__label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--c-text-secondary);
	}

	.acform__req { color: var(--c-orange); }

	.acform__opt {
		font-weight: 400;
		letter-spacing: 0;
		text-transform: none;
		font-size: 0.68rem;
		color: var(--c-text-muted);
	}

	/* ── Inputs — identiques à .contact-form__input ── */
	.acform__input {
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

	.acform__input::placeholder { color: var(--c-text-muted); }

	.acform__input:focus {
		outline: none;
		border-color: var(--c-orange);
		box-shadow: 0 0 0 3px rgba(247, 123, 70, 0.15);
	}

	.acform__textarea {
		resize: vertical;
		min-height: 140px;
		line-height: 1.6;
	}

	/* ── Select shadcn — mêmes valeurs exactes que ContactFormShadcn.svelte ── */
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

	/* ── Actions — identiques à .contact-form__actions ── */
	.acform__actions {
		margin-top: 2rem;
		text-align: center;
	}

	.acform__submit {
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

	.acform__submit:hover { background: var(--c-orange-dark); }
	.acform__submit:active { transform: translateY(1px); }

	.acform__note {
		font-size: 0.75rem;
		color: var(--c-text-muted);
		margin-top: 1rem;
	}
</style>

