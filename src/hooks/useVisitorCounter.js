import { useState, useEffect } from 'react';

const COUNTER_KEY = 'portfolio_visitors';
const VISITOR_KEY = 'portfolio_visitor_id';

function generateFingerprint() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('Visitor fingerprint', 2, 2);
  
  return [
    navigator.userAgent,
    screen.width,
    screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    canvas.toDataURL().slice(-20) // partial hash for uniqueness
  ].join('|');
}

export default function useVisitorCounter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initCounter = async () => {
      try {
        // Check if this visitor already counted
        const visitorId = generateFingerprint();
        const storedVisitors = JSON.parse(localStorage.getItem(VISITOR_KEY) || '[]');
        
        if (!storedVisitors.includes(visitorId)) {
          // New visitor - increment via API
          const currentCount = parseInt(localStorage.getItem(COUNTER_KEY) || '0');
          
          // Fetch external counter (visitorbadge.io API)
          const badgeUrl = `https://api.visitorbadge.io/api/${visitorId}?q=vtLg9aHwafoW7okYSmSb`;
          await fetch(badgeUrl, { mode: 'no-cors' });
          
          // Optimistically update local count
          const newCount = currentCount + 1;
          localStorage.setItem(COUNTER_KEY, newCount.toString());
          storedVisitors.push(visitorId);
          localStorage.setItem(VISITOR_KEY, JSON.stringify(storedVisitors.slice(-100))); // Keep last 100
          
          setCount(newCount);
        } else {
          // Returning visitor - use stored count
          setCount(parseInt(localStorage.getItem(COUNTER_KEY) || '0'));
        }
      } catch (error) {
        // Fallback: use stored count
        setCount(parseInt(localStorage.getItem(COUNTER_KEY) || '0'));
      } finally {
        setLoading(false);
      }
    };

    initCounter();
  }, []);

  return { count, loading };
}
