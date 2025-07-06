// components/AppIntegrationHeader.jsx
export default function AppIntegrationHeader() {
  return (
    <div className="w-full bg-[#f8fafb] border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-16 flex items-center justify-between">
        <h1 className="text-2xl font-medium text-gray-800">
          Connect apps &amp;<br></br> integrations
        </h1>
        
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="Search for an integration name or category"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
