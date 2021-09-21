import { useEffect , useState } from 'react';
import './App.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Loding from './loding';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  const [post,setPost] = useState([]);
  const [loding,setLoding] = useState(false);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
    setPost(res.data)
  setLoding(true)})
  })
 
const styles2={
  display: " inline-block",
  margin:"50px",
  padding:"20px",
  width: "18rem"
}
  return (
    <div>
    {loding? post.map((item) =>
    <Card sx={{ minWidth: 275 }} key={item.id} style={styles2}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div" >
         {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          body
        </Typography>
        <Typography variant="body2">
          {item.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>):<Loding/>}
   </div>
  );
}

export default App;
// <div className="App">
    //   <ul>
    //     {
    //       post.map(p =><li key={p.id}>{p.title}</li>)
    //     }
    //   </ul>
      
    // </div>