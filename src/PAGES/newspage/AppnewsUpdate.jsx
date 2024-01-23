// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import CardHeader from '@mui/material/CardHeader';

// import { fToNow } from './formattime';
// import Iconify from './iconify';

// export default function AppNewsUpdate({ title, subheader, list, ...other }) {
//   return (
//     <Card {...other}>
//       <CardHeader title={title} subheader={subheader} />

//         <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
//           {list.map((news) => (
//             <NewsItem key={news.id} news={news} />
//           ))}
//         </Stack>

//       <Divider sx={{ borderStyle: 'dashed' }} />

//       <a href='https://www.bbc.com/news'><Box sx={{ p: 2, textAlign: 'right' }}>
//         <Button
//           size="small"
//           color="inherit"
//           endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
//         >
//           View all
//         </Button>
//       </Box></a>
//     </Card>
//   );
// }

// AppNewsUpdate.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   list: PropTypes.array.isRequired,
// };

// // ----------------------------------------------------------------------

// function NewsItem({ news }) {
//   const { image, title, description, postedAt } = news;

//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <Box
//         component="img"
//         alt={title}
//         src={image}
//         sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
//       />

//       <Box sx={{ minWidth: 240, flexGrow: 1 }}>
//         <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
//           {title}
//         </Link>

//         <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
//           {description}
//         </Typography>
//       </Box>

//       <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
//         {fToNow(postedAt)}
//       </Typography>
//     </Stack>
//   );
// }

// NewsItem.propTypes = {
//   news: PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     postedAt: PropTypes.instanceOf(Date),
//   }),
// };


// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import CardHeader from '@mui/material/CardHeader';

// import { fToNow } from './formattime';
// import Iconify from './iconify';

// export default function AppNewsUpdate({ title, subheader, list, ...other }) {
//   return (
//     <Card {...other}>
//       <CardHeader title={title} subheader={subheader} />

//       <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
//         {list.map((news) => (
//           <NewsItem key={news.id} news={news} />
//         ))}
//       </Stack>

//       <Divider sx={{ borderStyle: 'dashed' }} />

//       <Box sx={{ p: 2, textAlign: 'right' }}>
//         <Button
//           size="small"
//           color="primary" // Change color to your preference
//           endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
//         >
//           View all
//         </Button>
//       </Box>
//     </Card>
//   );
// }

// AppNewsUpdate.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   list: PropTypes.array.isRequired,
// };

// // ----------------------------------------------------------------------

// function NewsItem({ news }) {
//   const { image, title, description, postedAt } = news;

//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <Box
//         component="img"
//         alt={title}
//         src={image}
//         sx={{ width: 80, height: 80, borderRadius: 2, flexShrink: 0 }}
//       />

//       <Box sx={{ minWidth: 240, flexGrow: 1 }}>
//         <Link color="primary" variant="h6" underline="hover" noWrap>
//           {title}
//         </Link>

//         <Typography variant="body1" sx={{ color: 'text.secondary' }} noWrap>
//           {description}
//         </Typography>
//       </Box>

//       <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
//         {fToNow(postedAt)}
//       </Typography>
//     </Stack>
//   );
// }

// NewsItem.propTypes = {
//   news: PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     postedAt: PropTypes.instanceOf(Date),
//   }),
// };


import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { fToNow } from './formattime';
import Iconify from './iconify';

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card {...other} >
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {list.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </Stack>

      <CardContent sx={{ borderTop: '1px solid #ccc' }}>
        <a href='https://www.bbc.com/news' ><Button
          fullWidth
          size="small"
          style={{color:"#31304D"}}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button></a>
      </CardContent>
    </Card>
  );
}

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ borderBottom: '1px solid #eee' }}>
      <Avatar alt={title} src={image} sx={{ width: 80, height: 80, borderRadius: '8px', flexShrink: 0 }} />

      <Stack sx={{ minWidth: 240, flexGrow: 1, padding: 2 }}>
        <Typography variant="h6" style={{color:"#31304D"}} noWrap>
          {title}
        </Typography>

        <Typography variant="body1" color="textSecondary" noWrap>
          {description}
        </Typography>
      </Stack>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}

NewsItem.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
  }),
};
