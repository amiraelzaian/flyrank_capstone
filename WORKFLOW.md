# WORKFLOW.md

## AI Development Workflow

This document explains how AI was used throughout the development of the Settings Form feature, the prompts used, and the manual review and corrections made after generation.

## 1. Planning

Before prompting, the feature was scoped out manually:

- Fields: display name, email, timezone, theme, email notifications
- Validation rules for each field
- Success state after submission
- Accessibility requirements (labels, error messages, keyboard focus)

## 2. Prompts Used

Prompts were written incrementally, one feature at a time, rather than asking for the whole form in a single request.

1. "Create a React settings form component using React Hook Form and Zod for validation. Fields: display name (min 2 chars), email (valid email), timezone (select, required), theme (radio: light/dark/system), and an email notifications checkbox."
2. "Add accessible error handling — associate each error message with its input using aria-describedby and aria-invalid."
3. "Show a success message after the form is submitted successfully, with an option to go back and edit again."
4. "Style the form with a clean, minimal layout — a centered card, clear spacing between fields, and a visible focus state on inputs."

## 3. How AI Assisted

- Scaffolded the initial component structure and the `useForm` / `zodResolver` setup, which saved time versus writing the boilerplate by hand.
- Suggested the Zod schema shape and error messages.
- Proposed the accessibility attributes (`aria-invalid`, `aria-describedby`) once explicitly asked.
- Helped iterate on the CSS quickly by generating a first pass at spacing and layout.

## 4. Manual Review and Corrections

The AI-generated code was reviewed and adjusted in the following ways:

- **Default values**: The AI initially left `defaultValues` out of `useForm`, which caused the form to behave as an uncontrolled form on first render. This was added manually as a separate `defaultSettingsValues` object so it could be reused for the reset button.
- **Theme field**: The AI's first attempt used a `<select>` for theme. This was changed manually to a radio group (`fieldset`/`legend`) since there are only three options and radio buttons are clearer for a small, mutually exclusive set.
- **Submit button state**: The AI did not initially disable the submit button while saving. This was added manually (`disabled={isSubmitting}`) along with a "Saving..." label to prevent duplicate submissions.
- **Success flow**: The AI's first version reset the form silently on success with no confirmation. This was replaced manually with a dedicated `SuccessMessage` component so the user gets clear feedback and a way to return to editing.
- **CSS clean-up**: Removed duplicate/conflicting selectors the AI introduced (e.g. overlapping padding rules between `.form-field` and button elements) and consolidated spacing into a consistent scale.

## 5. Lessons Learned

- Breaking the feature into small, specific prompts (one per concern: schema, accessibility, success state, styling) produced more usable output than asking for the whole form at once.
- AI-generated code is a strong starting point but still needs a manual pass for state edge cases (like `isSubmitting`) and UX details (like confirming success rather than resetting silently).
- Reviewing AI output against the original feature checklist from the planning step made it easy to catch what was missing.
