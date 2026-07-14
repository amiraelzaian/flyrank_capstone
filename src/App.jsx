import SettingsForm from './components/SettingsForm.jsx';

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="mt-2 text-slate-600">
            Manage your profile and application preferences.
          </p>
        </header>
        <SettingsForm />
      </div>
    </main>
  );
}

export default App;
