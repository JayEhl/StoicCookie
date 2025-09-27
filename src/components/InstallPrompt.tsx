import React, { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">🍪</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Install StoicCookie</h3>
            <p className="text-sm text-gray-600">Add to home screen for quick access</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleDismiss}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700"
          >
            Not now
          </button>
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 bg-green-800 text-white text-sm font-medium rounded-md hover:bg-green-900 transition-colors"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
