<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Button } from "$lib/components/ui/button";
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

<form class="grid gap-5" action="#" method="POST" data-contact-form>
	<div class="grid gap-4 sm:grid-cols-2">
		<div class="grid gap-2">
			<Label for="ac-firstname">Prénom</Label>
			<Input id="ac-firstname" name="firstname" required autocomplete="given-name" placeholder="Votre prénom" bind:value={firstname} />
		</div>
		<div class="grid gap-2">
			<Label for="ac-lastname">Nom</Label>
			<Input id="ac-lastname" name="lastname" required autocomplete="family-name" placeholder="Votre nom" bind:value={lastname} />
		</div>
	</div>

	<div class="grid gap-2">
		<Label for="ac-email">Email</Label>
		<Input id="ac-email" name="email" type="email" required autocomplete="email" placeholder="vous@exemple.com" bind:value={email} />
	</div>

	<div class="grid gap-2">
		<Label for="ac-phone">
			Téléphone <span class="text-muted-foreground text-xs font-normal">(optionnel)</span>
		</Label>
		<Input id="ac-phone" name="phone" autocomplete="tel" placeholder="+33 6 00 00 00 00" bind:value={phone} />
	</div>

	<div class="grid gap-2">
		<Label for="ac-subject">Sujet</Label>
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

	<div class="grid gap-2">
		<Label for="ac-message">Message</Label>
		<Textarea id="ac-message" name="message" rows={5} required placeholder="Votre message..." bind:value={message} />
	</div>

	<div class="pt-1">
		<Button type="submit" class="w-full sm:w-auto">Envoyer</Button>
	</div>
</form>

