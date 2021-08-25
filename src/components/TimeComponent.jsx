import React, {useState, useEffect} from 'react'
import { CssBaseline, Typography, Container } from '@material-ui/core'



function TimeComponent(props) {
  const locale = 'be'
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 10 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const day = today.toLocaleDateString(locale, {weekday: 'long'});
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long'})}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, ${props.userName}`;
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });

  return (
    <>
      <CssBaseline />
      <div>
        <Container>
          <Typography variant="h6" gutterBottom>
            {wish}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {date} {time}
          </Typography>
        </Container>
      </div>
    </>
  )
}

export default TimeComponent
