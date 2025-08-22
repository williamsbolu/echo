"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex bg-green-200 flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button onClick={() => endCall()} variant="destructive">
        End Call
      </Button>

      <p>IsConnected {isConnected}</p>
      <p>IsConnecting {isConnecting}</p>
      <p>IsSpeaking {isSpeaking}</p>
      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
