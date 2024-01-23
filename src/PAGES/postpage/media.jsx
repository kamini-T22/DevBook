import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Slide } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Media(props) {
  const { userData } = props;
  const [expanded, setExpanded] = React.useState(false);
  //const [value, setValue] = React.useState(0);
  // const [comments, setComments] = useState([]);
  // const [newComment, setNewComment] = useState('');

  // const handleAddComment = () => {
  //   if (newComment.trim() !== '') {
  //     setComments((prevComments) => [...prevComments, newComment]);
  //     setNewComment('');
  //   }
  // };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUploadAlert = () => {
    alert('Post Uploaded successfully!');
    setOpen(false);;
  };

  return (
    <>
    
<div style={{backgroundColor:'#F0ECE5'}}>
<br></br>
    <Grid container spacing={2}>
      {userData.map((user) => (
        <Grid item xs={9} sm={3} md={4} key={user.id}>
          <Card sx={{ maxWidth: 700 }}>
            <CardHeader
              avatar={<Avatar alt="Ted talk" src={user.profile} />}
              title={user.name}
            />
            <CardMedia component="img" height="200" image={user.img} alt="img" />
            <CardContent>
              <Accordion expanded={expanded === `panel-${user.id}`} onChange={handleChange(`panel-${user.id}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${user.id}-content`}
                  id={`panel-${user.id}-header`}
                >
                  <Typography sx={{ width: '100%', flexShrink: 0 }}>{user.content}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {user.subcontent}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <CardActions >
                <BottomNavigation showLabels>
        <BottomNavigationAction label="Like" icon={<FavoriteIcon style={{color:'#31304D'}}/>} />
        <BottomNavigationAction label="Send" icon={<SendIcon style={{color:'#31304D'}}/>} />
      </BottomNavigation>

      <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0' }}>
        {comments.map((comment, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>
            {comment}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        style={{
          marginBottom: '8px',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      />

      <button
        onClick={handleAddComment}
        style={{
          padding: '10px 16px',
          backgroundColor: '#31304D',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Comment
      </button>
               </CardActions>
            </CardContent>
          </Card>
        </Grid>

      ))}
    </Grid>

<br></br>

    <div class="row" >
  <div class="col-md-12">
    <div class="card">
      <div class="card-header"  style={{ backgroundColor: '#31304D' }}>
        <h4 class="card-title"><Typography  style={{ color: '#F5F7F8' }}>Want to Share something???</Typography></h4>
      </div>
      <div class="card-body">
      <Grid2>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       Post it!
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Share your throughts..."}</DialogTitle>
        <DialogContent>
        <TextField
      id="outlined-multiline-flexible"
      label="Your Text Here"
      multiline
      maxRows={6}
      variant="outlined"
    />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
         Upload file
        <VisuallyHiddenInput type="file" />
        </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUploadAlert}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </Grid2>
      </div>
    </div>
  </div> 
</div> 


    </div>
    </>
  );
}





