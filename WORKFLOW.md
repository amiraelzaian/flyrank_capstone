# WORKFLOW

## AI-Assisted Development Comparison

For this exercise, I implemented the same React feature twice: a simple Settings Form. The goal was to compare the results of using a vague AI prompt versus a detailed, structured prompt.

### Round 1 – Vague Prompt

In the first round, I used a very simple prompt asking the AI to build a React settings form. The generated code provided a basic implementation, but it lacked clear structure and required more manual review. Validation, accessibility, and project organization were not fully considered. I had to spend additional time checking the generated code and deciding what needed improvement.

### Round 2 – Structured Prompt

In the second round, I started a fresh AI session and used a detailed prompt with specific requirements. I explicitly requested React with Vite, React Hook Form, Zod validation, accessibility, semantic HTML, project structure, and a verification step. I also asked the AI to review its own work before finishing.

The result was significantly more organized. The project was divided into reusable components, validation logic was separated into its own file, and the form included proper validation messages and accessible labels. The structured prompt reduced the amount of manual review needed because the generated code followed the requested requirements more closely.

### Comparison

The biggest difference was not only the code quality but also the review effort. Although writing the detailed prompt took longer, it saved time during debugging and code review. The structured version produced cleaner code, better organization, improved accessibility, and stronger validation. It was much easier to understand and maintain.

### AI Mistake I Caught

The AI generated the `SuccessMessage` component with a `.js` extension even though it contained JSX. This caused a Vite parsing error because JSX components should use the `.jsx` extension. I fixed the issue by renaming the file to `SuccessMessage.jsx` and updating the import. This reminded me that AI-generated code should always be reviewed and tested before considering it complete.

### Lessons Learned

This exercise demonstrated that prompt quality has a direct impact on AI-generated code. A detailed prompt with constraints, expected behavior, project structure, and verification instructions produces better results than a vague request. AI is most effective when treated as a development assistant whose output is carefully reviewed, verified, and improved before merging into the project.
