import { Button } from '@gravity-ui/uikit';
import { ThemeProvider } from '@gravity-ui/uikit';
import React, { useState } from 'react';

import { Grid, Row } from '@gravity-ui/page-constructor';

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Row>
          <Button view="outlined" size="l" onClick={() => setTheme('light')}>Light</Button>
          <Button view="outlined-action" onClick={() => setTheme('dark')} size="l">Dark</Button>
        </Row>
      </Grid>

    </ThemeProvider >
  );
}

export default App;
