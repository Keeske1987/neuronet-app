export default function Header() {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-indigo-800 to-purple-700 text-white text-center shadow-md flex flex-col items-center">
      <img src="/assets/neuronet-logo.png" alt="NeuroNet Logo" className="h-16 w-16 mb-2" />
      <h1 className="text-4xl font-extrabold tracking-wide">🧠 NeuroNet Agent Studio</h1>
      <p className="mt-1 text-sm text-zinc-200">Créez, gérez et lancez vos agents IA sur la blockchain</p>
    </header>
  );
}
