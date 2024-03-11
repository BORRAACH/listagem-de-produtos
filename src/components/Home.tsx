export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white shadow-sm">
        <div className="container px-4 md:px-6">
          <nav className="flex h-14 items-center">
            <a className="font-bold" href="#">
              Acme Inc
            </a>
            <div className="flex-1" />
            <nav className="flex items-center space-x-4">
              <a
                className="text-sm font-medium hover:underline transition:underline"
                href="#"
              >
                About
              </a>
              <a
                className="text-sm font-medium hover:underline transition:underline"
                href="#"
              >
                Services
              </a>
              <a
                className="text-sm font-medium hover:underline transition:underline"
                href="#"
              >
                Contact
              </a>
            </nav>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="grid gap-2 text-center">
          <div className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Beautiful Websites
          </div>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed dark:text-gray-400">
            The best tool for creating stunning designs.
          </p>
        </div>
      </main>
    </div>
  );
}
