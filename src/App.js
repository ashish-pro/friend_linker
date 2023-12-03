import { Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary" startIcon={<SettingsIcon />} endIcon={<SettingsIcon />}>Contained</Button>
      <Button variant="outlined" tartIcon={<SettingsIcon />}>Outlined</Button>
    </div>
  );
}

export default App;
