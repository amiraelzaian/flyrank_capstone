import { useState } from 'react';

const INITIAL_SETTINGS = {
  displayName: '',
  email: '',
  theme: 'system',
  language: 'en',
  emailAlerts: true,
  productUpdates: false,
};

function SettingsForm() {
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!settings.displayName.trim()) {
      nextErrors.displayName = 'Display name is required.';
    }

    if (!settings.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaveMessage('');

    if (!validate()) {
      return;
    }

    setIsSaving(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSaveMessage('Settings saved successfully.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setSettings(INITIAL_SETTINGS);
    setErrors({});
    setSaveMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Profile</h2>

        <div>
          <label htmlFor="displayName" className="mb-1 block text-sm font-medium text-slate-700">
            Display name
          </label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            value={settings.displayName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            placeholder="Jane Doe"
          />
          {errors.displayName && (
            <p className="mt-1 text-sm text-red-600">{errors.displayName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            placeholder="jane@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </section>

      <section className="mt-8 space-y-4 border-t border-slate-100 pt-6">
        <h2 className="text-lg font-semibold text-slate-900">Preferences</h2>

        <div>
          <label htmlFor="theme" className="mb-1 block text-sm font-medium text-slate-700">
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div>
          <label htmlFor="language" className="mb-1 block text-sm font-medium text-slate-700">
            Language
          </label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </section>

      <section className="mt-8 space-y-3 border-t border-slate-100 pt-6">
        <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>

        <label className="flex items-center gap-3 text-sm text-slate-700">
          <input
            name="emailAlerts"
            type="checkbox"
            checked={settings.emailAlerts}
            onChange={handleChange}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Email me about important account activity
        </label>

        <label className="flex items-center gap-3 text-sm text-slate-700">
          <input
            name="productUpdates"
            type="checkbox"
            checked={settings.productUpdates}
            onChange={handleChange}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Send product updates and tips
        </label>
      </section>

      {saveMessage && (
        <p className="mt-6 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
          {saveMessage}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isSaving}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSaving ? 'Saving...' : 'Save changes'}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default SettingsForm;
