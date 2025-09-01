import { useState } from "react"
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { Splash } from "./components/splash";
import ThankYouPage from "@/pages/thank-you";

function Router() {
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/thank-you" component={ThankYouPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showSplash
          ? <Splash onFinish={() => setShowSplash(false)} />
          : <Router />
        }
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
